const drumData = [{
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
];

const inactiveDrum = {
  backgroundColor: 'grey',
  marginTop: 20,
  boxShadow: "2px 2px 5px black"
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: inactiveDrum
    }
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playDrum = this.playDrum.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown',this.handleKeyPress);
  }
  
  componentWillMount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress(event) {
    if(event.keyCode === this.props.keyCode) {
      this.playDrum();
    }
  }
  
  activatePad() {
    
  }
  
  playDrum(event) {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
  }
  
  render() {
    return (
      <div>
        <div id="drum-machine">
        <div id="display">
          <div className="drum-pad-panel">
            <div className="drum-pad">Q</div>
            <div className="drum-pad">W</div>
            <div className="drum-pad">E</div>
            <div className="drum-pad">A</div>
            <div className="drum-pad">S</div>
            <div className="drum-pad">D</div>
            <div className="drum-pad">Z</div>
            <div className="drum-pad">X</div>
            <div className="drum-pad">C</div>
          </div>
          <div className="controls"></div>
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