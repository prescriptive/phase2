import React, { Component, useEffect, useState } from "react"
import styled from "styled-components"
import * as variable from "./variables"
import Modal from "react-modal"
import { faCentercode } from "@fortawesome/free-brands-svg-icons"
import SignUpForm from "../components/signUpForm"
import Helmet from "react-helmet"
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
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  componentDidMount() {
    // const script = document.createElement("script")
    // script.src =
    //   "https://prescriptivesolutions.activehosted.com/f/embed.php?id=9"
    // script.async = true
    // document.body.appendChild(script)
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
  _handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    fetch("https://prescriptivesolutions.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        this.setState({ submit: true })
        this.closeForm()
      })
      .catch((err) => {
        console.log("err", err)
      })
  }
  render() {
    return (
      <SignUpStyle className="signup-container">
        <Helmet>
          <script
            src="https://prescriptivesolutions.activehosted.com/f/embed.php?id=9"
            type="text/javascript"
            charset="utf-8"
          ></script>
        </Helmet>
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
                padding: "0px 30px 30px 30px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#003552",
                  fontSize: "36px",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Sign up for the Phase 2 Newsletter
              </h2>
              <div
                style={{
                  fontSize: "27px",
                  lineHeight: "36px",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                Get the Phase 2 newsletter delivered directly to your inbox
                every month. Stay on top of the latest news in IT careers,
                industry trends, and Phase 2 Community opportunities.
              </div>
              <div className="newsletter-form">
                <form onSubmit={this._handleSubmit}>
                  <input type="hidden" name="u" value="9" />
                  <input type="hidden" name="f" value="9" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
                  <div class="_form-content">
                    <div class="_form_element _x40587438 _full_width ">
                      <label
                        for="email"
                        class="_form-label"
                        style={{
                          fontSize: "27px",
                          margin: "30px auto 20px auto",
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          maxWidth: "420px",
                        }}
                      >
                        Enter your email address:
                      </label>
                      <div class="_field-wrapper">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          required
                          style={{
                            backgroundColor: "#DCDCDC",
                            padding: "20px 5px",
                            border: "0px",
                            marginBottom: "20px",
                            width: "100%",
                            maxWidth: "420px",
                            borderRadius: "5px",
                            fontSize: "24px",
                          }}
                        />
                      </div>
                    </div>
                    <div class="_button-wrapper _full_width">
                      <button
                        id="_form_9_submit"
                        class="_submit"
                        type="submit"
                        style={{
                          cursor: "pointer",
                          backgroundColor: "#d23026",
                          padding: "10px 35px",
                          borderRadius: "50px",
                          border: "1px solid white",
                          color: "white",
                          display: "inline-block",
                          fontSize: "24px",
                          lineHeight: "32px",
                          textAlign: "center",
                          marginBottom: "20px",
                          cursor: "pointer",
                          fontSize: "27px",
                        }}
                      >
                        Yes, please sign me up!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
