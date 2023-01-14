import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  state={
    progress: 0
  };
  setProgress=(progress)=>
  {
    this.setState({
      progress:progress
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          {/* <News setProgress={this.setProgress}= setProgress={this.setProgress} country="in" category="sports"/> */}
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="sports" country="us" category="sports" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="us" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="us" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" country="us" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="us" category="business" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="us" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="us" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="us" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="us" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

export default App
