import React from "react";
import Nav from './Nav'
import Home from './Home';
import About from './About'
import Skills from './Skills'
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
        <Skills />
        <Works />
        <Contact />
      </>
    )
  }
}

export default PortfolioControl;