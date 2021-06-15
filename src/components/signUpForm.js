import React, { Component, useEffect, useState } from "react"

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openForm: false,
    }
    this._handleSubmit = this._handleSubmit.bind(this)
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
        console.log(response)
        this.setState({ submit: true })
      })
      .catch((err) => {
        console.log("err", err)
      })
  }
  render() {
    console.log(this.state)
    return (
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
          {this.state.submit && <div class="submit-message">Success!</div>}
        </form>
      </div>
    )
  }
}

export default SignUpForm
