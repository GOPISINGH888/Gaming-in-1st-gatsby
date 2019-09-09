import React from "react"
import styled from "styled-components"
import Box from "../components/Box"
const Btnn = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
`
export default () => (
  <Btnn>
    <div className="container">
      <div className="columns is-mobile is-centered">
        <div className="column is-half  has-text-centered">
          <a className="button is-danger is-rounded">NEW GAMES</a>
          <p className="is-size-1 has-text-bold has-text-black">
            Recent Reviews
          </p>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Box
            img="https://colorlib.com/preview/theme/gamewarrior/img/review/1.jpg"
            largetext="Assasin’’s Creed"
            lowertext
          />
        </div>{" "}
        <div className="column">
          <Box
            img="https://colorlib.com/preview/theme/gamewarrior/img/review/2.jpg"
            largetext="Doom"
            lowertext
          />
        </div>{" "}
        <div className="column">
          <Box
            img="https://colorlib.com/preview/theme/gamewarrior/img/review/3.jpg"
            largetext="Overwatch"
            lowertext
          />
        </div>{" "}
        <div className="column">
          <Box
            img="https://colorlib.com/preview/theme/gamewarrior/img/review/4.jpg"
            largetext="GTA"
            lowertext
          />
        </div>
      </div>
    </div>
  </Btnn>
)
