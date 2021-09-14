import React from "react"
import ResponsiveEmbed from "react-responsive-embed"
class LazyVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    window.addEventListener("load", this.handleLoad)
  }
  componentWillMount() {
    window.addEventListener("load", this.handleLoad)
  }
  handleLoad = () => {
    this.setState({ loaded: true })
    console.log("loaded")
  }
  render() {
    console.log(this)

    return this.state.loaded ? <h2>test</h2> : <h2>loading</h2>
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
