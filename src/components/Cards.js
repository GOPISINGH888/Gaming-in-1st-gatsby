import React from "react"
import styled from "styled-components"

const Container=styled.div`
.card{
  height:27rem;
}
`;

const Bimga = styled.div`
  height: 27rem !importnat;
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/features/1.jpg);
  background-size: cover;
`
const Bimgb = styled.div`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/features/2.jpg);
  background-size: cover;
`
const Bimgc = styled.div`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/features/3.jpg);
  background-size: cover;
`
const Bimgd = styled.div`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/features/4.jpg);
  background-size: cover;
`
const Mgntop = styled.p`
  margin-top: 230px;
  margin-bottom: 50px;
`
const Clrtxt = styled.span`
  margin-left: 20px;
`
const Space = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`
export default () => (
  <Container className="has-background-black">
    <div className="container ">
      <Space>
        <div className="columns is-gapless">
          <div className="column is-3 ">
            <div className="card bimg-1">
              <Bimga>
                {" "}
                <Clrtxt>
                  {" "}
                  <span className="has-background-danger">NEW</span>
                </Clrtxt>
                <Mgntop>
                  {" "}
                  <p className="is-size-5 has-text-white has-text-centered">
                    Suspendisse ut justo tem por, rutrum
                  </p>
                </Mgntop>
                <p className="is-size-6 has-text-white has-text-centered">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <footer className="has-text-light is-size-7 ">
                  3 comments
                </footer>
              </Bimga>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <Bimgb>
                <Clrtxt>
                  {" "}
                  <span className="has-background-warning">STRATEGY</span>
                </Clrtxt>
                <Mgntop>
                  {" "}
                  <p className="is-size-5 has-text-white has-text-centered">
                    Justo tempor, rutrum erat id, molestie
                  </p>
                </Mgntop>
                <p className="is-size-6 has-text-white has-text-centered">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <footer className="has-text-light is-size-7">3 comments</footer>
              </Bimgb>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <Bimgc>
                <Clrtxt>
                  {" "}
                  <span className="has-background-danger">NEW</span>{" "}
                </Clrtxt>
                <Mgntop>
                  {" "}
                  <p className="is-size-5 has-text-white has-text-centered">
                    NEW Nullam lacinia ex eleifend orci porttitor
                  </p>
                </Mgntop>
                <p className="is-size-6 has-text-white has-text-centered">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <footer className="has-text-light is-size-7">3 comments</footer>
              </Bimgc>
            </div>
          </div>
          <div className="column is-3">
            <div className="card">
              <Bimgd>
                <Clrtxt>
                  <span className="has-background-primary">RACING</span>
                </Clrtxt>
                <Mgntop>
                  {" "}
                  <p className="is-size-5 has-text-white has-text-centered">
                    Lacinia ex eleifend orci suscipit
                  </p>
                </Mgntop>
                <p className="is-size-6 has-text-white has-text-centered">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <footer className="has-text-light is-size-7">3 comments</footer>
              </Bimgd>
            </div>
          </div>
        </div>
      </Space>
    </div>
  </Container>
)
