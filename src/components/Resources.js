import React from 'react';
import { MobileNav } from './Nav';

export function Resources() {
  return (
    <>
      <header>
        <MobileNav />
        <h1>RESOURCES</h1>
        <p>
            Huskies watch out for each other. Here are some safety resources to help.
        </p>
      </header>
      <div id="resources-links">
        <section>
          <div className="resource-group">
            <h2>Safety Resources</h2>
            <ul>
                <li><a href="https://police.uw.edu/?_gl=1*6aql3m*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MjgzNjQuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MjgzNjQuMC4wLjA.">UW Police Department (Seattle Campus)</a></li>
                <li><a href="https://www.washington.edu/safety/resources/">UW Bothell Campus Safety</a></li>
                <li><a href="https://www.tacoma.uw.edu/fa/safety?_gl=1*hciqhz*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MjgzNjQuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MjgzNjQuMC4wLjA.">UW Tacoma Campus Safety</a></li>
                <li><a href="https://www.washington.edu/safecampus/">SafeCampus</a></li>
                <li><a href="https://www.washington.edu/globalaffairs/global-travelers/emergency/">UW Global Emergency</a></li>
            </ul>

            <h2>UW Medicine Resources</h2>
            <ul>
                <li><a href="https://www.uwmedicine.org/locations/uw-medical-center">UW Meical Center - Montlake</a></li>
                <li><a href="https://www.uwmedicine.org/locations/northwest-hospital">UW Meical Center - Northwest</a></li>
                <li><a href="https://www.uwmedicine.org/locations/harborview-medical-center">Harborview Medical Center</a></li>
                <li><a href="https://www.uwmedicine.org/locations/valley-medical-center">Valley Medical Center</a></li>
            </ul>

            <h2>Other Resources</h2>
            <ul>
                <li><a href="https://www.washington.edu/uwem/">UW Emergency Management</a></li>
                <li><a href="https://www.washington.edu/titleix/">Title IX</a></li>
                <li><a href="https://www.washington.edu/studentconduct/">Student Conduct</a></li>
                <li><a href="https://www.ehs.washington.edu/?_gl=1*cuhqu1*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.">EH&S</a></li>
                <li><a href="https://wellbeing.uw.edu/unit/hall-health/?_gl=1*cuhqu1*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.">Hall Health (Seattle)</a></li>
                <li><a href="https://wellbeing.uw.edu/unit/counseling-center/?_gl=1*cuhqu1*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.">Counseling Center (Seattle)</a></li>
                <li><a href="https://livewell.uw.edu/?_gl=1*cuhqu1*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.">LiveWell (Seattle)</a></li>
                <li><a href="https://dsl.uw.edu/staff-development/student-care-report-form/?_gl=1*ab842l*_ga*NTU1MDc4NDMwLjE2ODM2NjI0MjQ.*_ga_3T65WK0BM8*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.*_ga_JLHM9WH4JV*MTcxMzcyODEzNy4xMy4xLjE3MTM3MzAyMzYuMC4wLjA.">Student Care Report Form (Seattle)</a></li>
                <li><a href="https://www.washington.edu/bias/">Bias Incident Reporting Tool (Seattle)</a></li>
                <li><a href="https://www.washington.edu/youth/">Office of Youth Protection Coordinator</a></li>
                <li><a href="https://research-grad-ed.uwmedicine.org/research-facilities-and-resources/south-lake-union/">UW Medicine South Lake Union Security</a></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}