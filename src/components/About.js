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
            </div>

         </div>
      </section>
    );
  }
}
