import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render(): JSX.Element {
    return <p>Hello There!</p>;
  }
}

export default hot(module)(App);
