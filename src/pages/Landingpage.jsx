import React from 'react';
import LandingPageHero from '../components/landingPage/LandingPageHero';
import LandingDescription from '../components/landingPage/LandingDescription';
import FooterLanding from '../components/landingPage/FooterLanding';
import LandingWorkflow from '../components/landingPage/LandingWorkflow';
import LandingSponsorSection from '../components/landingPage/LandingSponsorSection';

const LandingPage = () => {

  return (
    <>
    <LandingPageHero/>
    <LandingDescription/>
    <LandingWorkflow/>
    <LandingSponsorSection/>
    <FooterLanding/>
    
    </>
  );
};

export default LandingPage;
