import React from "react"
import Banner from "../components/Banner"
import styled from "styled-components"
const Title = styled.p`
  background-color: black;
`
const Fig = styled.div`
  margin-top: 17px;
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
      <div className="columns">
        <div className="column is-1">.</div>
        <div className="column is-6">
          <Figr>
            <h1 className="is-size-2 has-text-white">What is Gaming ?</h1>
            <hr />
            <p className="has-text-grey">
              Gaming refers to playing electronic games, whether through
              consoles, computers, mobile phones or another medium altogether.
              Gaming is a nuanced term that suggests regular gameplay, possibly
              as a hobby. Although traditionally a solitary form of relaxation,
              online multiplayer video games have made gaming a popular group
              activity as well. A person who is into gaming is often called a
              gamer or hardcore gamer.
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
  </div>
)
