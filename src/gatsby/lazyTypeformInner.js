import React from "react"
import { PopupButton } from "@typeform/embed-react"
import "@typeform/embed/build/css/popup.css"

class LazyTypeformInner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PopupButton
          id="LkNfiuv4"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            border: "0px",
            top: "0",
            left: "0",
            background: "none",
            cursor: "pointer",
          }}
          className="my-button"
        ></PopupButton>
      </React.Fragment>
    )
  }
}

export default LazyTypeformInner
