import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import ImageSlider from './ImageSlider';
import TestSwipper from './TestSwipper';

class App extends React.Component {
  render(){
    return (
        <div className="App">
          <TestSwipper />
        </div>
      );
  }  

}

export default App;
