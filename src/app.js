
import React from 'react';
import ReactDOM from 'react-dom';

import ClickOutside from './react-click-outside.js';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      clickedOutside : false
    }
  }

  refresh(){
    window.location.reload()
  }

  hasClickedOut(){
    this.setState({
      clickedOutside : true
    })
  }


  render() {
    return (
      <div>
        <ClickOutside onClickOutside={ () => this.hasClickedOut() }>
          <h1>Box 1 { this.state.clickedOutside ? 'Outside Me!' : '' }</h1>
        </ClickOutside>
        <button onClick={ () => this.refresh() } >Refresh</button>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById("app"))
