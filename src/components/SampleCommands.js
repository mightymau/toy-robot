import React from 'react';

function SampleCommands({onLoadCommands, onLoadTextCommands}) {
    const sampleCommands = ["PLACE 0,0,NORTH\nMOVE\nLEFT\nREPORT","PLACE 0,0,EAST\nMOVE\nLEFT\nREPORT","PLACE 0,0,NORTH\nMOVE\nRIGHT\nREPORT"];

    return(
        <div>
            <button className="btn btn-secondary btn-sm" onClick={onLoadTextCommands}>Load Commands from Commands.txt</button>
            <button id="sample-2-btn" className="btn btn-secondary btn-sm" onClick={onLoadCommands} value={sampleCommands[1]}>Load Sample Commands 2</button>
            <button id="sample-3-btn" className="btn btn-secondary btn-sm" onClick={onLoadCommands} value={sampleCommands[2]}>Load Sample Commands 3</button>

        </div>
    )

}

export default SampleCommands