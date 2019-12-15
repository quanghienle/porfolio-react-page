import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let appData = this.props.appData;
    let panel = appData.about.map((item, index) => {
        let key = "panel-" + index;
       return(
           <div className="console-panel" style={{fontFamily: 'Monaco',
               textAlign: "left",
               fontSize: "15px",
                padding: "0 0 20px 8px"}}
                key={key}>
               <span  style={{color: "white"}}>
                   > {item.question}
               </span>
               <br />
               <span  style={{padding: "0 0 0 20px"}}>
                   => {item.answer}
               </span>
           </div>
       )
    });
    return (
      <section id="about" style={{padding: "100px 80px 0 80px"}}>
          <h1> Hello World !!</h1>
          <div className="main-col">
              <div className="console-header" style={{height: "5%", background: "grey", color: "grey"}}>
                  terminal
              </div>
              <div className="console-body" style={{padding: "20px"}}>
                  {panel}
              </div>
          </div>
      </section>
    );
  }
}
