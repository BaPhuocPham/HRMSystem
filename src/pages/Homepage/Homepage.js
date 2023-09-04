import React from "react";
import "./Homepage.css";
import { HomepageHeader } from "../../components/HomepageHeader/HomepageHeader";
import { HomepageBanner } from "../../components/HomepageBanner/HomepageBanner";
import { HomepageCompanies } from "../../components/HomepageCompanies/HomepageCompanies";
import { HomepageResidencies } from "../../components/HomepageResidencies/HomepageResidencies";
import { HomepageValue } from "../../components/HomepageValue/HomepageValue";
import { HomepageContact } from "../../components/HomepageContact/HomepageContact";
import { HomepageGetStarted } from "../../components/HomepageGetStarted/HomepageGetStarted";
import { HomepageFooter } from "../../components/HomepageFooter/HomepageFooter";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="innerWidth">
        <div className="white-gradient"></div>
        <HomepageHeader />
        <HomepageBanner />
      </div>
      <HomepageCompanies />
      <HomepageResidencies />
      <HomepageValue />
      <HomepageContact />
      <HomepageGetStarted />
      <HomepageFooter />
    </div>
  );
};
