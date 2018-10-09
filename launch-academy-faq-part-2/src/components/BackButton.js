import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div className="back-button ">
      <a className="navbarList" onClick={browserHistory.goBack}>Back</a>
    </div>
  )
}

export default BackButton;
