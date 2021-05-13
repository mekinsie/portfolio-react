import React from "react";
import Home from './Home';
import Nav from './Nav'
import About from './About'
import Works from './Works'
import Contact from './Contact'


class PortfolioControl extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <>
        <Nav/>
        <Home />
        <About />
        <Works />
        <Contact />
      </>
    )
  }
}

export default PortfolioControl;