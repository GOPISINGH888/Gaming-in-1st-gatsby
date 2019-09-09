import React from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
const Title = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
`
const Bgclr = styled.p`
  background-color: lightcyan;
`
export default () => (
  <Bgclr>
    <Banner />
    <div className="container">
      <Title className=" has-text-weight-bold has-text-link">Sign in</Title>
      <div className="columns">
        <div className="column is-half">
          <div className="field">
            <label className="label  has-text-link">Username</label>
            <div className="control">
              <input
                className=" input is-rounded"
                type="text"
                placeholder="e.g Username"
              />
            </div>
          </div>
          <div className="field">
            <label className="label  has-text-link">Password</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="password"
                placeholder="password"
              />
            </div>
          </div>
          <label className="checkbox">
            <input type="checkbox" />
            Keep me signed in
          </label>{" "}
          <br />
          <a className="button is-link is-rounded ">Sign in</a>
          <hr />
          <a>Forget password?</a>
          <hr />
          <Title className=" has-text-weight-bold  has-text-link ">
            Sign up
          </Title>
          <div className="field">
            <label className="label  has-text-link">Firstname</label>
            <div className="control">
              <input
                className=" input is-rounded"
                type="text"
                placeholder="e.g Firstname"
              />
            </div>
          </div>
          <div className="field">
            <label className="label  has-text-link">Lastname</label>
            <div className="control">
              <input
                className=" input is-rounded"
                type="text"
                placeholder="e.g lastname"
              />
            </div>
          </div>
          <div className="field">
            <label className="label  has-text-link">Password</label>
            <div className="control">
              <input
                className="input is-rounded"
                type="password"
                placeholder="password"
              />
            </div>
            <label className="checkbox">
              <input className=" has-text-link" type="checkbox" />
              show password
            </label>
          </div>
          <label className="checkbox">
            <input type="checkbox" />I accept all terms and conditions
          </label>
          <br />
          <a className="button is-link is-rounded">Sign up</a>
        </div>
      </div>
    </div>
  </Bgclr>
)
