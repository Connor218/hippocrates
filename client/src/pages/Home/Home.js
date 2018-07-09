import React, { Component } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import LogInBtn from "../../components/LogInBtn/LogInBtn";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";

class Home extends Component {
  
    render() {
      return (
        <Wrapper>
          <Jumbotron></Jumbotron>
          <LogInBtn></LogInBtn>
          <SignUpBtn></SignUpBtn> 
        </Wrapper>
      );
    }
  }
  
  export default Home;
  