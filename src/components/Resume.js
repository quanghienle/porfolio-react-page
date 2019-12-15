import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let appData = this.props.appData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {appData.work &&
              appData.work.map((item, index) => {
                let workId = "work" + index;
                let achievements =
                  item.Achievements &&
                  item.Achievements.map((item, index) => {
                    let key = "achievement-" + index;
                    return <p key={key}> &bull; {item}</p>;
                  });
                return (
                  <div className="row item" key={workId}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">
                          {item.startDate} - {item.endDate}
                        </em>
                      </p>
                      {achievements}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{appData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {appData.skills &&
                  appData.skills.map((item, index) => {
                    let skillId = "skill" + index;
                    return (
                      <li key={skillId}>
                        <span
                          className="bar-expand"
                          style={{ paddingRight: item.level }}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
