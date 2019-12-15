import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let appData = this.props.appData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                appData.education && appData.education.map((item, index)=>{
                    let eduId = "education" + index;
                    let achievements = item.Achievements && item.Achievements.map((item, index) => {
                        let key = "achievement-" + index;
                        return(<p key={key}> &bull; {item}</p>)
                    });
                    return(
                        <div className="row item" key={eduId}>
                            <div className="twelve columns">
                                <h3>{item.UniversityName}</h3>
                                <p className="info">
                                    {item.specialization}
                                    <span>&bull;</span>
                                    <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                                </p>
                                {achievements}
                            </div>
                        </div>
                    )})
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                appData.work && appData.work.map((item, index) => {
                    let workId = "work" + index;
                    let achievements = item.Achievements && item.Achievements.map((item, index) => {
                        let key = "achievement-" + index;
                        return(<p key={key}> &bull; {item}</p>)
                    });
                  return(
                    <div className="row item" key={workId}>
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                              {item.specialization}
                              <span>&bull;</span>
                              <em className="date">{item.startDate} - {item.endDate}</em></p>
                           {achievements}
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>




      </section>
    );
  }
}
