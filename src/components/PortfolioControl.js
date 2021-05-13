import React from "react";
import Home from './Home';
import FadeIn from 'react-fade-in';
import Nav from './Nav'


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
      </>
    )
  }
}

export default PortfolioControl;