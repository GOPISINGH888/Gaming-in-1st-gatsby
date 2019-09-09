import React from "react"
import styled from "styled-components"
const Background = styled.div`
  background: url(https://colorlib.com/preview/theme/gamewarrior/img/pattern.png);
  background-size: no repeat;
`
const Titltxt = styled.p`
  margin-bottom: 30px;
`
const Img = styled.div`
  margin-top: 25px;
`
const Statu = styled.div`
  margin-top: 60px;
`
const Txtt = styled.div`
  margin-top: 50px;
`
export default () => (
  <Background>
    <div className="container">
      <div className="columns ">
        <div className="column is-4 ">
          <img src="https://colorlib.com/preview/theme/gamewarrior/img/footer-logo.png" />
          <Txtt>
            {" "}
            <p className="has-text-white">
              Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor
              sit ame.
            </p>{" "}
          </Txtt>
          <Statu>
            {" "}
            <img src="https://colorlib.com/preview/theme/gamewarrior/img/footer-top-bg.png" />
          </Statu>
        </div>
        <div className="column is-4">
          <Titltxt>
            {" "}
            <p className="has-text-white is-size-4 ">Latest Posts</p>
          </Titltxt>
          <article class="media">
            <figure class="media-left">
              <Img>
                {" "}
                <img
                  src="https://colorlib.com/preview/theme/gamewarrior/img/latest-blog/1.jpg"
                  height="55px"
                  width="55px"
                />
              </Img>
            </figure>
            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum{" "}
                  <br />
                  <span className="has-text-grey">By Admin</span>
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <Img>
                <img
                  src="https://colorlib.com/preview/theme/gamewarrior/img/latest-blog/2.jpg"
                  height="55px"
                  width="55px"
                />
              </Img>
            </figure>
            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum{" "}
                  <br />
                  <span className="has-text-grey">By Admin</span>
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <Img>
                {" "}
                <img
                  src="https://colorlib.com/preview/theme/gamewarrior/img/latest-blog/3.jpg"
                  height="55px"
                  width="55px"
                />
              </Img>
            </figure>
            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum{" "}
                  <br />
                  <span className="has-text-grey">By Admin</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="column is-4 ">
          <Titltxt>
            {" "}
            <p className="has-text-white is-size-4 ">Top Comments</p>
          </Titltxt>
          <article class="media">
            <figure class="media-left">
              <figure className="image  is-48x48">
                {" "}
                <img
                  className="is-rounded"
                  src="https://colorlib.com/preview/theme/gamewarrior/img/authors/1.jpg"
                  width="30px"
                  height="30px"
                />
              </figure>
            </figure>

            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-danger">James Smith </span>
                  <span className="has-text-grey"> on </span>Lorem ipsum dolor
                  sit amet, co
                  <br />
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <figure className="image  is-48x48">
                {" "}
                <img
                  className="is-rounded"
                  src="https://colorlib.com/preview/theme/gamewarrior/img/authors/2.jpg"
                  width="30px"
                  height="30px"
                />
              </figure>
            </figure>

            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-danger">James Smith </span>
                  <span className="has-text-grey"> on </span>Lorem ipsum dolor
                  sit amet, co
                  <br />
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <figure className="image  is-48x48">
                {" "}
                <img
                  className="is-rounded"
                  src="https://colorlib.com/preview/theme/gamewarrior/img/authors/3.jpg"
                  width="30px"
                  height="30px"
                />
              </figure>
            </figure>

            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-danger">James Smith </span>
                  <span className="has-text-grey"> on </span>Lorem ipsum dolor
                  sit amet, co
                  <br />
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <figure className="image  is-48x48">
                {" "}
                <img
                  className="is-rounded"
                  src="https://colorlib.com/preview/theme/gamewarrior/img/authors/4.jpg"
                  width="30px"
                  height="30px"
                />
              </figure>
            </figure>

            <div class="media-content">
              <div class="content">
                <p className="has-text-white">
                  <span className="has-text-danger">James Smith </span>
                  <span className="has-text-grey"> on </span>Lorem ipsum dolor
                  sit amet, co
                  <br />
                  <span className="has-text-warning">June 21, 2018 </span>{" "}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </Background>
)
