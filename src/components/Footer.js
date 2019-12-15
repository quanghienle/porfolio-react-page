import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let appData = this.props.appData;
    return (
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
    );
  }
}
