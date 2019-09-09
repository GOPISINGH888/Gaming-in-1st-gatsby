import React from "react"
import styled from "styled-components"
const Container = styled.div`
  .test {
    background-color: black;
    padding-left: 70px;
    padding-right: 40px;
  }
`
const Button = styled.a`
  .testa {
    background-color: #ffb320;
  }
`
const Margin = styled.a`
  .navbar-item {
    margin-left: 30px;
    margin-top: 6px;
  }
`
export default () => (
  <Container>
    <nav className="navbar test" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          className="navbar-item  is-mobile is-centered"
          href="http://localhost:8000/"
        >
          <img
            src="https://colorlib.com/preview/theme/gamewarrior/img/logo.png"
            width="112"
            height="28"
            alt="elegant Themes"
          />
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="testb">
          <Margin>
            <div className="navbar-start  is-mobile is-centered ">
              <a
                className="navbar-item has-text-white"
                href="http://localhost:8000"
              >
                Home
              </a>
              <a
                className="navbar-item has-text-white"
                href="http://localhost:8000/about"
              >
                About us
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-white">Games</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item" href="https://www.pubg.com/">
                    Pub G
                  </a>
                  <a className="navbar-item" href="https://www.callofduty.com/">
                    Call OF Duty
                  </a>
                  <a
                    className="navbar-item"
                    href="https://www.rockstargames.com/V/"
                  >
                    G.T.A 5{" "}
                  </a>
                  <hr className="navbar-divider" />
                  <a
                    className="navbar-item"
                    href="https://www.ea.com/en-gb/games"
                  >
                    More Games
                  </a>
                </div>
              </div>
            </div>
          </Margin>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Button>
                <a
                  className="button is-rounded testa"
                  href="http://localhost:8000/Form"
                >
                  Login/Register
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </Container>
)
