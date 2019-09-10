import React from "react"
import styled from "styled-components"
const Buttn = styled.a`
  background-color: #ffb320;
`
const Containr = styled.div`
  background-color: black;
`
export default () => (
  <div className="foter is-hidden-disktop">
    <Containr>
      <div className="columns">
        <div className="column">
          <Buttn className="button is-rounded testa" href="/about">
            About us
          </Buttn>
        </div>
        <div className="column">
          <Buttn className="button is-rounded testa" href="/Form">
            Login/Register
          </Buttn>
        </div>
      </div>
    </Containr>
  </div>
)
