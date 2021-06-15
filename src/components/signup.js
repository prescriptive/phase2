import React, { Component, useEffect, useState } from "react"
import styled from "styled-components"
import * as variable from "./variables"
import Modal from "react-modal"
import { faCentercode } from "@fortawesome/free-brands-svg-icons"
import SignUpForm from "../components/signUpForm"
const SignUpStyle = styled.div`
  .form-header {
    background-color: red;
    padding: 5px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-header-close {
    margin-right: 10px;
    border-right: thin solid white;
  }
`
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "820px",
    padding: "0px",
    borderRadius: "0px",
    border: "0px",
    zIndex: "999999",
  },
  overlay: {
    backgroundColor: "transparent",
    backdropFilter: "blur(5px)",
    zIndex: "9999999",
  },
}
class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openForm: false,
    }
    this.openForm = this.openForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }
  componentDidMount() {
    const script = document.createElement("script")

    script.src =
      "https://prescriptivesolutions.activehosted.com/f/embed.php?id=9"
    script.async = true

    document.body.appendChild(script)
  }
  openForm() {
    this.setState((prevState) => ({
      openForm: !prevState.openForm,
    }))
    // console.log(this)
  }
  closeForm() {
    this.setState((prevState) => ({
      openForm: !prevState.openForm,
    }))
  }

  render() {
    return (
      <SignUpStyle className="signup-container">
        <div onClick={this.openForm}>Sign up for Phase 2 updates</div>
        <Modal
          isOpen={this.state.openForm}
          onRequestClose={this.closeForm}
          style={customStyles}
          contentLabel="Sign Up Form"
        >
          <div>
            <div
              style={{
                backgroundColor: variable.red,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                color: "white",
                padding: "10px 20px",
              }}
            >
              <div
                style={{
                  paddingRight: "20px",
                  borderRight: "thin solid white",
                  cursor: "pointer",
                  fontSize: "33px",
                  fontWeight: "bold",
                }}
                onClick={this.closeForm}
              >
                Close
              </div>
              <div
                style={{
                  marginLeft: "20px",
                  cursor: "pointer",
                  fontSize: "33px",
                  fontWeight: "bold",
                }}
                onClick={this.closeForm}
              >
                X
              </div>
            </div>
            <div
              style={{
                padding: "0px 20px 20px 20px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#003552",
                  fontSize: "36px",
                }}
              >
                Sign up for the Phase 2 Newsletter
              </h2>
              <div
                style={{
                  fontSize: "27px",
                  lineHeight: "36px",
                }}
              >
                Get the Phase 2 newsletter delivered directly to your inbox
                every month. Stay on top of the latest news in IT careers,
                industry trends, and Phase 2 Community opportunities.
              </div>
              <SignUpForm></SignUpForm>

              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "27px",
                }}
                onClick={this.closeForm}
              >
                No thanks.
              </div>
            </div>
          </div>
        </Modal>
      </SignUpStyle>
    )
  }
}

export default SignUp
