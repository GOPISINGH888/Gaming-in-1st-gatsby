import React from "react"
import styled from "styled-components"
const Buttn = styled.a`
  background-color: #ffb320;
`
const Containr = styled.div`
  background-color: grey;
`
export default () => (
  <div className="container">
    <Containr>
      <div className="columns">
        <div className="column">
          <Buttn>
            {" "}
            <a className="has-text-black">About us</a>
          </Buttn>
        </div>
        <div className="column">
          <Buttn>
            {" "}
            <a className="has-text-black">regester</a>
          </Buttn>
        </div>
      </div>
    </Containr>
  </div>
)
