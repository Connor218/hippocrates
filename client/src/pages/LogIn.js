import React, { Component } from "react";
import NavBar from "../components/Panels/NavBar";
import Footer from "../components/Panels/Footer";
import Wrapper from "../components/Panels/Wrapper";
import LoginForm from "../components/Forms/LoginForm";

class LogIn extends Component {
  render() {
    return (
        <Wrapper>
        <NavBar />
        <div id="hero" align="center">
          <div className="content">
            <h1>Hippocrates</h1>
          </div>
          <div className="container">
            <LoginForm />
          </div>
        </div>
        <div id="aboutApp" align="center" />
        <Footer />
        </Wrapper>
    );
  }
}

export default LogIn;
  