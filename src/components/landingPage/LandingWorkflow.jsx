import React from 'react';
import './LandingWorkflow.css';

function LandingWorkflow() {
  return (
    <div className="page-container">
      <h1 className="header">How does VidWeave work</h1>
      <br></br>
      <div className="card-container">
        <div className="card">
          <h1 className="page-title" >Instructions</h1>
          <br></br>
          <ul className='font-semibold'>
           <li> Get started:  Click on the 'Get Started' button to be redirected to the sign-up page.</li>
            <li>Connect your wallet:  Connecting your wallet is the first step to using VidWeave.</li>
            <li>Sign Up:  Fill all the required information and click on 'Submit' button to be redirected to the user dashboard</li>
            <li></li>
            <li> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingWorkflow;
