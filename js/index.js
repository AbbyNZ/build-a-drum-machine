const Button = ({button, playDrum}) => {
  return (
    <button type="button" className="drum-pad" onClick={() => playDrum(event, button.keyTrigger)} id={button.id}>{button.keyTrigger}<audio src={button.url} className="clip" id={button.keyTrigger} />      
    </button>
  );
};

const Drumpad = ({buttons, playDrum}) => {
  const PadElements = buttons.map((button, index) => {
    return <Button keyTrigger={index} button={button} playDrum={playDrum} />; 
  });
  
  return (
    <div className="drumpad">{PadElements}</div>
  )
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumData:  [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
],

      display: ""
    };
    
    this.playDrum = this.playDrum.bind(this);
    /*this.handleKeyPress = this.handleKeyPress.bind(this);*/
  }
  
  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      this.playDrum(event);
    });
  }
   
 playDrum(event, keyTrigger) {
   return this.state.drumData.map((audio) => {
     if(keyTrigger === audio.keyTrigger || event.keyCode === audio.keyCode) {
       document.getElementById(audio.keyTrigger).currentTime = 0;
       document.getElementById(audio.keyTrigger).play();
       this.setState({
         display: audio.id
       });
     }
   });
 }
  
  render() {
    return (
      <div >
        <div id="drum-machine">
          <div className="drum-pad-panel">
            <Drumpad buttons={this.state.drumData} playDrum={this.playDrum}>
            </Drumpad>  
            </div>
            <div className="controls">
              <div id="display">
                {this.state.display}
              </div>
            </div>
          </div>
     </div> 
    );
  }
};

class DrumApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="title">Build A Drum Machine   </h2>
        </div>
        <div>
          <DrumMachine />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<DrumApp />, document.getElementById('app'));
