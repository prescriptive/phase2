import React from "react"
import ResponsiveEmbed from "react-responsive-embed"
class LazyVideo extends React.Component {
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
    console.log(this)

    return this.state.loaded ? (
      <ResponsiveEmbed
        className="lazyframe"
        src={"https://www.youtube.com/embed/" + this.props.video_id}
      />
    ) : (
      <h2>loading</h2>
    )
  }
}
// export const LazyVideo = ({ video_id }) => {
//   return (
//     <ResponsiveEmbed
//       className="lazyframe"
//       src={"https://www.youtube.com/embed/" + video_id}
//     />
//   )
// }

export default LazyVideo
