
import React from 'react';
import ReactDOM from 'react-dom';

import ClickOutside from './react-click-outside.js';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentClickedBoxy : null
    }
  }

  hasClickedOut(boxy){
    this.setState({
      currentClickedBoxy: boxy
    })
  }


  render() {
    return (
      <div>
        <ClickOutside onClickOutside={ () => this.hasClickedOut(1) }>
          <h1>Box 1 { this.state.currentClickedBoxy == 1 ? 'Outside Me!' : '' }</h1>
        </ClickOutside>

        <ClickOutside onClickOutside={ () => this.hasClickedOut(2) }>
          <h1>Box 2 { this.state.currentClickedBoxy == 2 ? 'Outside Me!' : '' }</h1>
        </ClickOutside>

        <p>You Clicked Outside Box: <b>{ this.state.currentClickedBoxy }</b></p>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById("app"))
