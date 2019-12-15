import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let appData = this.props.appData;
    return (
      <section id="portfolio">
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {appData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  appData.skills && appData.skills.map((item, index) => {
                    let skillId = "skill" + index;
                    return(
                        <li key={skillId}>
                          <span className={`bar-expand ${item.skillname.toLowerCase()}`} style={{paddingRight: item.level}}>

                          </span><em>{item.skillname}</em>
                        </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

        </div>

      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            appData.portfolio && appData.portfolio.map((item, index)=>{
              let porfolioKey = "porfolio-" + index;
              return(
                <div className="columns portfolio-item" key={porfolioKey}>
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
