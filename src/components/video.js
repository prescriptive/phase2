import React, { Component, useEffect, useState } from "react"
import styled from "styled-components"
import YouTube from "react-youtube"
import * as variable from "../components/variables"

const VideoStyle = styled.div`
  // .video-false {
  //   display: none;
  // }
  // .video-true {
  //   display: block;
  // }
  .view-video {
    display: inline-block;
  }
  .close-video {
    position: absolute;
    top: 75px;
    right: 50px;
    z-index: 999999;
    background: ${variable.red};
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window
//   return {
//     width,
//     height,
//   }
// }
// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   )

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions())
//     }

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   return windowDimensions
// }

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoPlay: false,
    }
  }
  // componentDidUpdate() {
  //   var vid = document.getElementById("myVideo")
  //   setTimeout(() => vid.play(), 4000)
  // }
  playThis() {
    // this.setState({ videoPlay: "video-play" })
    console.log("playthis")
    this.setState(prevState => ({
      videoPlay: !prevState.videoPlay,
    }))
  }
  closeVideo() {
    this.setState(prevState => ({
      videoPlay: !prevState.videoPlay,
    }))
  }

  // useWindowDimensions() {
  //   const [windowDimensions]
  //   console.log(windowDimensions)
  // }
  render() {
    console.log(this.props)
    const { innerWidth: width, innerHeight: height } = window
    const opts = {
      height: height,
      width: width,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const Myvideo = ({ id, height, width }) => {
      return (
        this.state.videoPlay && (
          <div
            className="video"
            style={{
              position: "fixed",
              // paddingBottom: "56.25%" /* 16:9 */,
              // paddingTop: 25,
              top: 0,
              left: 0,
              zIndex: 99999,
              height: height,
              width: width,
            }}
          >
            <div className="close-video" onClick={this.closeVideo.bind(this)}>
              X
            </div>
            <YouTube videoId={id} opts={opts} onReady={this._onReady} />
          </div>
          // <div
          //   className="video"
          //   style={{
          //     position: "fixed",
          //     // paddingBottom: "56.25%" /* 16:9 */,
          //     // paddingTop: 25,
          //     top: 0,
          //     left: 0,
          //     zIndex: 99999,
          //     height: height,
          //     width: width,
          //   }}
          // >
          //   <iframe
          //     style={{
          //       position: "absolute",
          //       top: 0,
          //       left: 0,
          //       width: "100%",
          //       height: "100%",
          //     }}
          //     src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          //     frameBorder="0"
          //   />
          // </div>
        )
      )
    }
    return (
      <VideoStyle className="video-container">
        <div
          className="view-video youtube-popup"
          onClick={this.playThis.bind(this)}
        >
          Check out our Video
        </div>
        <Myvideo id="la7rqfDdQpA" height={height} width={width} />
      </VideoStyle>
    )
  }
}

export default Video
