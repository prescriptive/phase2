import React from "react"
class LazyTypeform extends React.Component {
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
      <div
        dangerouslySetInnerHTML={{
          __html: `
                  <a class="typeform-share button" href="https://form.typeform.com/to/LkNfiuv4?typeform-medium=embed-snippet" data-mode="popup" style="display:none;" data-size="100" target="_blank">Launch me page </a><script>console.log('test')</script>
                    `,
        }}
      />
    ) : (
      ""
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

export default LazyTypeform
