import React from 'react';

import './styles.css';
import Logo from '../icons/logo';

class TopNav extends React.Component {

  render() {
    return (
      <div className='top-nav'>
        <div className="container clearfix">
          <a href='/'
             rel="noopener noreferrer"
             target='_blank'
             className="logo clearfix float-left">
            <Logo/>
            <div className="logo-text">
              <h4>GitHunt</h4>
              <p className="text-muted d-none d-sm-inline-block d-md-inline-block d-xl-inline-block d-lg-inline-block">Most starred projects on GitHub</p>
              <p className="text-muted d-inline-block d-sm-none d-md-none d-xl-none d-lg-none">Top Github Projects</p>
            </div>
          </a>
          <div className="float-right external-btns">
            <a href='/login'
               target='_blank'
               rel="noopener noreferrer"
               className="btn btn-dark"><i className="fa fa-github mr-1"></i> Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;