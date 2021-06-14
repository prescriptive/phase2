import React, { Component, useEffect, useState } from "react"
import styled from "styled-components"
import * as variable from "./variables"

const SignUpStyle = styled.div``
class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openForm: false,
    }
  }

  openForm() {
    this.setState((prevState) => ({
      openForm: !prevState.openForm,
    }))
  }
  render() {
    return (
      <SignUpStyle className="signup-container">
        <h2>test</h2>
      </SignUpStyle>
    )
  }
}

export default SignUp
