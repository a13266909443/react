import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './layouts/header/header'
import Footer from './layouts/footer/footer'
import Home from './pages/home/home'
import CourseClass from './pages/courseClass/courseClass'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/courseClass" component={CourseClass} />
            </Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
