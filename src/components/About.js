import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let appData = this.props.appData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={appData.profilePicture} alt="" />
            </div>

            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p> {appData.aboutme}</p>
               <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>{appData.name}</span>
                            <br></br>
                        <span>{appData.address}</span>
                            <br></br>
                        <span>{appData.website}</span>
                    </p>
                  </div>
               </div>

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
            </div>

         </div>
      </section>
    );
  }
}
