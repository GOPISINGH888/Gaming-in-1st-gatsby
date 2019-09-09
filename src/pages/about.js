import React from "react"
import Banner from "../components/Banner"
import Slider from "../components/Slider"
import styled from "styled-components"
import Lastfooter from "../components/Lastfooter"
const Title = styled.p`
  background-color: black;
`
const Fig = styled.div`
  margin-top: 13px;
`
const Figr = styled.div`
  margin-top: 90px;
`
export default () => (
  <div>
    <Title>
      <Banner />
      <div>
        <img
          src="https://www.desktopbackground.org/p/2011/01/11/140494_hd-game-wallpapers-1920x1080-free-download-for-laptop_1366x768_h.jpg"
          width="100%"
          height="04%"
        />{" "}
      </div>
      <Slider />
      <div className="columns">
        <div className="column is-1">.</div>
        <div className="column is-6">
          <Figr>
            <h1 className="is-size-2 has-text-white">About us..</h1>
            <hr />
            <p className="has-text-grey">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Figr>
          <Fig>
            {" "}
            <figure className="image is-3by2">
              <img src="https://i.pinimg.com/originals/97/91/e3/9791e327110ac5919d82a2ddeebabe97.jpg" />
            </figure>
          </Fig>
        </div>
        <div className="column">
          <figure class="media-left">
            <figure className="image is-28x28">
              <img
                className="is-rounded"
                src="https://i.pinimg.com/originals/e0/de/80/e0de8034b2ac623cb8cc8ba1986b2c10.jpg"
                width="30px"
                height="30px"
              />
            </figure>
          </figure>
        </div>
      </div>
    </Title>
    <Lastfooter />
  </div>
)
