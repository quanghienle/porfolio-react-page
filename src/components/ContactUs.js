import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let appData = this.props.appData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {appData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
          <footer>
              <div className="row">
                  <div className="twelve columns">
                      <ul className="social-links">
                          {
                              appData.socialLinks && appData.socialLinks.map((item, index)=>{
                                  let footerKey = "footer-" + index;
                                  return(
                                      <li key={footerKey}>
                                          <a href={item.url}>
                                              <i className={item.className}/>
                                          </a>
                                      </li>
                                  )
                              })
                          }
                      </ul>

                  </div>
                  <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
              </div>
          </footer>
        </section>
        );
  }
}
