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
      <React.Fragment>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
            `,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: `
                  <a class="typeform-share button" href="https://form.typeform.com/to/LkNfiuv4?typeform-medium=embed-snippet" data-mode="popup" style="display:none;" data-size="100" target="_blank">Launch me page </a><script>console.log('test')</script>
                    `,
          }}
        />
      </React.Fragment>
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
