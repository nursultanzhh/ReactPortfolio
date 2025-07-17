import React from "react";
import WorkItem from "./WorkItem";


const data= [
    {
        year: "2025",
        title: "Software Engineer",
        company: "Freelancer at Upwork",
        duration: "2025 Jun - Present",
        details: "Front End Engineer for various projects, focusing on React and JavaScript."
    }
    ,
    {
        year: "2024",
        title: "SC PLMM Engineer",
        company: "TCO",
        duration: "Dec 2022 - Oct 2024",
        details: "Material management of 3GP Project."
    },
    {
        year: "2022",
        title: "Instrument & ControlEngineer",
        company: "TCO",
        duration: "Apr 2019 - Dec 2022",
        details: "I&C Engineering support of the 3GP Project."
    },
    {
        year: "2019",
        title: "Workface Planning Engineer",
        company: "TCO",
        duration: "Nov 2017 - Apr 2019",
        details: "Construction support of the 3GP Project"
    }
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-950">Work</h1>
        {data.map((item, index) => (
            <WorkItem 
            key={index} 
            year={item.year} 
            title={item.title}
            company={item.company} 
            duration={item.duration} 
            details={item.details}
        />))}
    </div>

  );
};

export default Work;
