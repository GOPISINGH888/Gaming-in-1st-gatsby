import React from "react"
import styled from "styled-components"
const Margen = styled.div`
  margin-top: 40px;
`
const Full = styled.div`
  margin-top: 30px;
`
const box = props => (
  <Full>
    <div className=" content is-centered">
      <img src={props.img} />

      <p className="is-size-4">{props.largetext}</p>
      <Margen>
        {" "}
        <p className="is-5">
          Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit
          ame.
        </p>{" "}
      </Margen>
    </div>
  </Full>
)
export default box
