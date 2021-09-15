import React from "react"
import AudioFile from "../components/tokens/audioFile"

class LazyAudiofile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentWillMount() {
    if (this.state.loaded === true) {
    } else {
      window.addEventListener("mousemove", this.handleLoad)
      window.addEventListener("touchmove", this.handleLoad)
    }
  }

  handleLoad = () => {
    this.setState({ loaded: true })
    console.log(this.state.loaded)
    window.removeEventListener("mousemove", this.handleLoad)
    window.removeEventListener("touchmove", this.handleLoad)
  }
  render() {
    return this.state.loaded ? (
      <AudioFile content={this.props.content} element={this.props.element} />
    ) : (
      ""
    )
  }
}

export default LazyAudiofile
