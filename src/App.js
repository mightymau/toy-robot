import React, { useState } from 'react';
import Commands from './components/Commands'
import SampleCommands from './components/SampleCommands'
import './App.css';
import Robot from './robot.js'

function App() {
  const [commands, setCommands] = useState([]);
  const [output, setOutput] = useState('');
  const [invalid, setInvalid] = useState(false);

  const onLoadCommands = (e) => {
    setCommands(e.target.value);
    setOutput('');
      setInvalid(false);

  }
  const onLoadTextCommands = () => {
    fetch('/commands/commands.txt')
    .then((r) => r.text())
    .then(text  => {
      setCommands(text);
      setOutput('');
      setInvalid(false);
    })  
  }
  const onChange = (e) => {
    setCommands(e.target.value);
    setInvalid(false);
    setOutput('')
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let myRobot = new Robot();
    let position;
    let commands_array = commands.split("\n");

    //let commands_array = e.target.commandsTextArea.value.split("\n");
    runCommands:
    for( var i = 0; i < commands_array.length; i++) {
      let command = commands_array[i].toUpperCase();
      if(command === '')
        continue;
      if (command.slice(0, 5) === 'PLACE') {
        let args = command.slice(5);
        position = args.replace(/\s/g, '').split(',');
        command = 'PLACE';
      }
      switch (command) {
          case 'PLACE':
              if(!myRobot.place(+position[0], +position[1], position[2])){
                setInvalid(true);
                break runCommands;
              }
              break;
          case 'MOVE':
              myRobot.move();
              setInvalid(false);
              break;
          case 'LEFT':
              myRobot.rotate('LEFT');
              setInvalid(false);
              break;
          case 'RIGHT':
              myRobot.rotate('RIGHT');
              setInvalid(false);
              break;
          case 'REPORT':
              setOutput(`${myRobot.x},${myRobot.y},${myRobot.direction}`);
              setInvalid(false);
              //console.log(`${myRobot.x},${myRobot.y},${myRobot.direction}`);
              break;
          default:
            setInvalid(true);
            break;
      }
    }

  }

  return (
    <div className="App">
      <div className="container">
      <h1>Toy Robot Simulator</h1>
      <div className="row">
        <div className="col-8">
          
        { invalid &&
          <div className="alert alert-danger" role="alert">Invalid Command!</div>
        }
        
        <Commands commands={commands} onSubmit={onSubmit} onChange={onChange}/>
        </div>
        <div className="col">
        <SampleCommands onLoadTextCommands={onLoadTextCommands} onLoadCommands={onLoadCommands} commands={commands} />
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col">
            {output.length > 0 && 
              <h2 id="output">Output: {output}</h2>
            }
          </div>
        </div>
      </div>
      
      </div>

    </div>
  );
}

export default App;
