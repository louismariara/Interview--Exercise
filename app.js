import React, { useState, useEffect } from 'react';
import Board from './Board';
const beadColors = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E67E22'
];
function App() {
       
return (
        <div>
            <Board gameState={gameState} handleClick={handleClick} />
        </div>

  );
}

export default App;







