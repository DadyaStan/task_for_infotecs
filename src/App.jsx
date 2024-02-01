import React from "react";
import Searcher from "./components/Searcher";
import Table from "./components/Table";

class App extends React.Component {
  
    render() {
      return (
      <div className="container">
        <div className="content">
          <Searcher />
          <Table />
        </div>
      </div>)
    }
  
    inputClick() {
        console.log ('Click')
    }
  
    mouseOver() { console.log('Mouse Over') }
}

export default App