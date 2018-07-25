import React, { Component } from 'react';
import './App.css';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fabric>
          <DefaultButton>
            I am a button.
          </DefaultButton>
        </Fabric>
      </div>
    );
  }
}

export default App;
