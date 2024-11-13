import React from 'react';

function Pot({ count, player, index, handleClick, isMancala }) {
    const onClick = () => {
        if (!isMancala) {
            handleClick(player, index);
        }
    };

    const potId = isMancala ? `m${player}` : `p${player}${index}`;

    return (
        <div className={`pot ${isMancala ? 'mancala' : ''}`} id={potId} onClick={onClick}>
            <div className="bead-container">
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="bead" style={{ backgroundColor: beadColors[Math.floor(Math.random() * beadColors.length)] }}></div>
                ))}
            </div>
        </div>
    );
}

export default Pot;
