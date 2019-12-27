import React from "react"
import styled from "styled-components"
const Bacground = styled.div`
  background-color: #ffb320;
`
const Grey = styled.div`
  background-color: #131313;
`
const Lge = styled.p``
export default () => (
  <Grey className="is-hidden-desktop">
    <div className="containor  has-text-black-bis">
      <div className="columns is-gapless">
        <div className="column is-3 has-text-centered ">
          <Bacground>
            <p className="has-text-black is-size-4 "> Latest News =></p>
          </Bacground>
        </div>

        <div className="column has-background-white">
          <marquee>
            <p className=" is-size-4 has-text-black ">
              <span className="has-background-danger has-text-black">NEW </span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <span className="has-background-warning has-text-black">
                STRATEGY{" "}
              </span>{" "}
              Isum dolor sit amet, consectetur adipiscing elit.{" "}
              <span className="has-background-info has-text-black">RACING</span>{" "}
              Isum dolor sit amet, consectetur adipiscing elit.
            </p>
          </marquee>
        </div>
      </div>
    </div>
  </Grey>
)
