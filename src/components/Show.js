import React from "react"
import styled from "styled-components"
const Title = styled.p`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/slider-1.jpg);
  background-size: cover;
`
const Mrgn = styled.p`
  margin-top: 196px;
  margin-bottom: 250px;
`
const Sizee = styled.p`
  font-size: 5rem;
`
const Button = styled.a`
  background-color: #ffb320;
`
const Buton = styled.a`
  .testaA {
    background-color: #ffb320;
    margin-top: 40px;
  }
`
export default () => (
  <Title>
    <div className="mrgn">
      <div className="columns">
        <div className="column is-1">...</div>
        <div className="column is-8">
          <Mrgn>
            {" "}
            <Sizee>
              {" "}
              <div className="title has-text-white">
                The Best
                <span className="has-text-warning">Games</span>
                Out There
              </div>
            </Sizee>
            <p className="text is-size-6 has-text-weight-semibold has-text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada
              <br />
              lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
              ligula sapien.
              <br />
              Suspendisse cursus faucibus finibus.
            </p>
            <Buton>
              <a
                className="button is-rounded testaA"
                href="https://en.wikipedia.org/wiki/Game"
              >
                {" "}
                Read more
              </a>
            </Buton>
          </Mrgn>
        </div>
      </div>
    </div>{" "}
  </Title>
)
