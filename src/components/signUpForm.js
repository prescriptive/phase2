import React from "react"

const SignUpForm = () => (
  <div className="newsletter-form">
    <form
      method="POST"
      action="https://prescriptivesolutions.activehosted.com/proc.php"
      id="_form_9_"
      class="_form _form_9 _inline-form  _dark"
      novalidate
      style={{
        display: "block",
      }}
    >
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
        <div class="_clear-element"></div>
      </div>
      <div class="_form-thank-you"></div>
    </form>
  </div>
)

export default SignUpForm
