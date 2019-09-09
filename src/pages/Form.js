import React from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
const Title = styled.div`
  margin-bottom: 30px;
  color: #ffb320;
`
const Box = styled.div`
  margin-top: 40px;
`
const Bgimg = styled.div`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/pattern.png);
`
const Clr = styled.p`
  color: #ffb320;
`
const Button = styled.a`
  background-color: #ffb320;
  color: black;
`
export default () => (
  <div>
    <Banner />
    <Bgimg>
      {" "}
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Box>
              <div className="box has-background-grey-dark">
                <Title className=" has-text-weight-bold is-2">Log in</Title>
                <div className="field">
                  <label className="label has-text-weight-semibold">
                    {" "}
                    <Clr>Username </Clr>
                  </label>

                  <div className="control">
                    <input
                      className=" input is-rounded"
                      type="text"
                      placeholder="e.g Username"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-weight-semibold">
                    <Clr>Password</Clr>
                  </label>

                  <div className="control">
                    <input
                      className="input is-rounded"
                      type="password"
                      placeholder="password"
                    />
                  </div>
                </div>
                <br />

                <Button className="button  is-rounded ">Log in</Button>
              </div>
            </Box>
            <Box>
              {" "}
              <div className="box has-background-grey-dark">
                <Title className=" has-text-weight-bold  is-2">Sign up</Title>
                <div className="field">
                  <label className="label  has-text-weight-semibold">
                    <Clr>Firstname</Clr>
                  </label>

                  <div className="control">
                    <input
                      className=" input is-rounded"
                      type="text"
                      placeholder="e.g Firstname"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label has-text-weight-semibold">
                    <Clr>Lastname </Clr>
                  </label>

                  <div className="control">
                    <input
                      className=" input is-rounded"
                      type="text"
                      placeholder="e.g lastname"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label  has-text-weight-semibold">
                    {" "}
                    <Clr>Password </Clr>
                  </label>
                  <div className="control">
                    <input
                      className="input is-rounded"
                      type="password"
                      placeholder="password"
                    />
                  </div>
                </div>
                <br />
                <Button className="button is-rounded">Sign up</Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </Bgimg>
  </div>
)
