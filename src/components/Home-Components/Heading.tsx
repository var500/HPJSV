import React from "react";
import Title from "./Title";
import ImportantLinks from "./ImportantLinks";
import CardContainer from "./Home-Card/CardContainer";
import { LogoCarousel } from "./LogoCarousel";

export default function Heading() {
  return (
    <div className="flex flex-col justify-center pb-5 mt-5 gap-5">
      <Title text={"जल शक्ति विभाग"}/>
      <p className="text-justify text-base font-normal">
        This web portal has been developed as a complete ERP solution to not
        only automate the functioning of the entire Department, but also to
        provide the decision makers with sufficient online information to
        provide better services to citizens through proper and timely execution
        of water supply and irrigation schemes in the State of Himachal Pradesh.
        The software is work-flow based and is capable of generating all
        accounting and inventory reports in real time mode. The software takes
        base data of schemes from the State Budget database and the planners are
        able to monitor these schemes. This software is also supplemented with a
        no. of mobile apps. This web portal also facilitates the department to
        generate the water bills of consumers, thereby facilitating consumers to
        pay their bills in online mode. The consumers can also apply for new
        water connections online, using this portal.
      </p>
      <ImportantLinks />
      <CardContainer />
      <LogoCarousel />
    </div>
  );
}
