
import React from 'react';
import ReactDOM from 'react-dom';

class ClickOutside extends React.Component {

  componentDidMount(){
    let me = this

    // The element
    me.el = ReactDOM.findDOMNode(this)

    // make a event handler for click event
    this.evt = (e) => {
      let itsChildren = me.el.contains(e.target)
      if(e.target != me.el && !itsChildren) me.props.onClickOutside(e)
    }

    // Attach Event Listener to body
    document.addEventListener('click',this.evt, false)
  }

  componentWillUnmount(){
    // Remove Event Listener from body
    document.removeEventListener('click',this.evt, false)
  }

  render(){
    return (
      <div>{ this.props.children }</div>
    )
  }

}

export default ClickOutside;
