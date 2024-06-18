
import './App.css';
import ClassComponent from './Component/ClassComponent'; 
import Functional  from './Component/Functional'; 
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <ClassComponent/>

        <Functional/>
      </div>
    )
  }
}
export default App;
