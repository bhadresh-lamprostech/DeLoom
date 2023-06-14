import React from 'react';
import LandingPageHero from '../components/landingPage/LandingPageHero';
import LandingDescription from '../components/landingPage/LandingDescription';
import FooterLanding from '../components/landingPage/FooterLanding';
import LandingSponser from '../components/landingPage/LandingSponserSection';

const LandingPage = () => {

  return (
    <>
    <LandingPageHero/>
    <LandingDescription/>
    <LandingSponser/>
    <FooterLanding/>
    
    </>
  );
};

export default LandingPage;
