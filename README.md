# React Click Outside
A [React](http://https://facebook.github.io/react/) Component to make a click outside event. Inspired by [https://github.com/kentor/react-click-outside](https://github.com/kentor/react-click-outside)


#### [DEMO](https://rawgit.com/BosNaufal/react-click-outside/master/index.html)


## Install
Include [react-click-outside.js](./src/react-click-outside.js) to your web App file.


## Usage
```js

import React from 'react';
import ReactDOM from 'react-dom';

import ClickOutside from './path/to/react-click-outside.js';

class App extends React.Component {

  hasClickedOut(){
    console.log("You've Just Clicked Outside Me!");
  }


  render() {
    return (
      <div>
        <ClickOutside onClickOutside={ () => this.hasClickedOut() }>
          <h1>Box</h1>
        </ClickOutside>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById("app"))

```

## Why it doesn't Enhance the Component?
Sometime we need mutiple event in the single scope. like,
```js

class Multi extends React.Component {

  handleOne(){ }

  handleTwo(){ }

  render() {
    return (
      <div>
        <ClickOutside onClickOutside={ () => this.handleOne() }>
          <h1>Box</h1>
        </ClickOutside>

        <ClickOutside onClickOutside={ () => this.handleTwo() }>
          <h1>Another Box</h1>
        </ClickOutside>
      </div>
    )
  }

}

```


## Thank You for Making it become useful
Hopefully it can be useful for your next projects.

## Let's talk about some projects
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
