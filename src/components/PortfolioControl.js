import React from "react";
import Home from './Home';
import FadeIn from 'react-fade-in';
import Nav from './Nav'
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
        <Contact />
      </>
    )
  }
}

export default PortfolioControl;