import React from 'react';
import Pot from './Pot';

function Board({ gameState, handleClick }) {
    const generatePotHTML = (beadCounts, player) => {
        const reversedBeadCounts = player === 'playerOne' ? beadCounts.slice().reverse() : beadCounts;
        return reversedBeadCounts.map((count, index) => (
            <Pot
                key={`p${player}${index}`}
                count={count}
                player={player}
                index={index}
                handleClick={handleClick}
                isMancala={false} // Indicate it's not a mancala
            />
        ));
    };

    return (
        <div className="board">
            <div className="section endsection">
                <Pot count={gameState.mancala.playerOne} isMancala={true} player="playerOne" />
            </div>
            <div className="section midsection">
                <div className="midrow botmid">
                    {generatePotHTML(gameState.playerOne, 'playerOne')}
                </div>
                <div className="midrow topmid">
                    {generatePotHTML(gameState.playerTwo, 'playerTwo')}
                </div>
            </div>
            <div className="section endsection">
                <Pot count={gameState.mancala.playerTwo} isMancala={true} player="playerTwo" />
            </div>
        </div>
    );
}

export default Board;


