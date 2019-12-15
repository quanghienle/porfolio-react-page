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
                    return(
                        <div className="row item" key={eduId}>
                            <div className="twelve columns">
                                <h3>{item.UniversityName}</h3>
                                <p className="info">
                                    {item.specialization}
                                    <span>&bull;</span>
                                    <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                                </p>
                                <p>{item.Achievements}</p>
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
                  return(
                    <div className="row item" key={workId}>
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.startDate} -  {item.endDate}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>


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
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}
