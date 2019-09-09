import React from "react"
import styled from "styled-components"
const Container = styled.div`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/pattern.png);
  background-size: no repeat;
`
const Pt = styled.p`
  margin-top: -19px;
  margin-bottom: 39px;
  margin-left: -20px;
`
const Yelotxt = styled.p`
  margin-top: 39px;
  margin-bottom: 20px;
`
const Ptxt = styled.p`
  margin-top: 10px;
`
const Footertxt = styled.p`
  margin-top: 30px;
`
const Btnn = styled.div`
  padding-top: 80px;
  margin-bottom: -5px;
`
const Bottm = styled.div`
  padding-bottom: 80px;
`
export default () => (
  <Container>
    <div className="container">
      <Bottm>
        <Btnn>
          <div className="button is-active has-background-danger">
            TOURNAMENTS
          </div>
        </Btnn>
        <div className="columns">
          <div className="column">
            <div className="box has-background-black-ter">
              <div className="columns">
                <div className="column">
                  <Pt>
                    <a className="has-background-warning  button is-active">
                      PREMIUM TOURNAMENT
                    </a>
                  </Pt>
                  <img src="https://colorlib.com/preview/theme/gamewarrior/img/tournament/1.jpg" />
                </div>
                <div className="column">
                  <Yelotxt>
                    {" "}
                    <p className="has-text-warning is-size-4">
                      World Of WarCraft
                    </p>
                  </Yelotxt>
                  <Ptxt>
                    {" "}
                    <p className="has-text-grey is-size-7">
                      Tournament Beggins:{" "}
                      <span className="has-text-white is-size-7">
                        June 20, 2020
                      </span>
                    </p>
                  </Ptxt>
                  <Ptxt>
                    <p className="has-text-grey is-size-7">
                      Tournament Ends:{" "}
                      <span className="has-text-white is-size-7">
                        July 1, 2020
                      </span>
                    </p>
                  </Ptxt>
                  <Ptxt>
                    {" "}
                    <p className="has-text-grey is-size-7">
                      Participants:{" "}
                      <span className="has-text-white is-size-7">10 teams</span>
                    </p>
                  </Ptxt>
                  <Ptxt>
                    <p className="has-text-grey is-size-7">
                      Tournament Author:{" "}
                      <span className="has-text-white is-size-7">Admin</span>
                    </p>
                  </Ptxt>
                  <Footertxt>
                    <p className="is-size-7 has-text-grey">
                      <span className="has-text-warning ">Prizes:</span> 1st
                      place $2000, 2nd place: $1000, 3rd place: $500
                    </p>
                  </Footertxt>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box has-background-black-ter">
              <div className="columns">
                <div className="column">
                  <Pt>
                    <a className="has-background-warning button is-active">
                      PREMIUM TOURNAMENT
                    </a>
                  </Pt>
                  <img src="https://colorlib.com/preview/theme/gamewarrior/img/tournament/2.jpg" />
                </div>
                <div className="column">
                  <Yelotxt>
                    {" "}
                    <p className="has-text-warning is-size-4">DOOM</p>
                  </Yelotxt>
                  <Ptxt>
                    {" "}
                    <p className="has-text-grey is-size-7">
                      Tournament Beggins:{" "}
                      <span className="has-text-white is-size-7">
                        June 20, 2020
                      </span>
                    </p>
                  </Ptxt>
                  <Ptxt>
                    <p className="has-text-grey is-size-7">
                      Tournament Ends:{" "}
                      <span className="has-text-white is-size-7">
                        July 1, 2020
                      </span>
                    </p>
                  </Ptxt>
                  <Ptxt>
                    {" "}
                    <p className="has-text-grey is-size-7">
                      Participants:{" "}
                      <span className="has-text-white is-size-7">10 teams</span>
                    </p>
                  </Ptxt>
                  <Ptxt>
                    {" "}
                    <p className="has-text-grey is-size-7">
                      Tournament Author:{" "}
                      <span className="has-text-white is-size-7">Admin</span>
                    </p>
                  </Ptxt>
                  <Footertxt>
                    {" "}
                    <p className="is-size-7 has-text-grey">
                      <span className="has-text-warning">Prizes:</span> 1st
                      place $2000, 2nd place: $1000, 3rd place: $500
                    </p>
                  </Footertxt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Bottm>
    </div>
  </Container>
)
