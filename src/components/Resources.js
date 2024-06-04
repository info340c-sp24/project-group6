import React, { useState } from 'react';
import { MobileNav } from './Nav';

export function Resources() {
  const [isSeattleFilterActive, setIsSeattleFilterActive] = useState(false);

  const handleFilterToggle = () => {
    setIsSeattleFilterActive((prev) => !prev);
  };

  const resources = {
    safety: [
      { title: "UW Police Department (Seattle Campus)", link: "https://police.uw.edu/..." },
      { title: "UW Bothell Campus Safety", link: "https://www.washington.edu/safety/resources/" },
      { title: "UW Tacoma Campus Safety", link: "https://www.tacoma.uw.edu/fa/safety?..." },
      { title: "SafeCampus", link: "https://www.washington.edu/safecampus/" },
      { title: "UW Global Emergency", link: "https://www.washington.edu/globalaffairs/global-travelers/emergency/" }
    ],
    medicine: [
      { title: "UW Medical Center - Montlake", link: "https://www.uwmedicine.org/locations/uw-medical-center" },
      { title: "UW Medical Center - Northwest", link: "https://www.uwmedicine.org/locations/northwest-hospital" },
      { title: "Harborview Medical Center", link: "https://www.uwmedicine.org/locations/harborview-medical-center" },
      { title: "Valley Medical Center", link: "https://www.uwmedicine.org/locations/valley-medical-center" }
    ],
    other: [
      { title: "UW Emergency Management", link: "https://www.washington.edu/uwem/" },
      { title: "Title IX", link: "https://www.washington.edu/titleix/" },
      { title: "Student Conduct", link: "https://www.washington.edu/studentconduct/" },
      { title: "EH&S", link: "https://www.ehs.washington.edu/..." },
      { title: "Hall Health (Seattle)", link: "https://wellbeing.uw.edu/unit/hall-health?..." },
      { title: "Counseling Center (Seattle)", link: "https://wellbeing.uw.edu/unit/counseling-center?..." },
      { title: "LiveWell (Seattle)", link: "https://livewell.uw.edu/..." },
      { title: "Student Care Report Form (Seattle)", link: "https://dsl.uw.edu/staff-development/student-care-report-form?..." },
      { title: "Bias Incident Reporting Tool (Seattle)", link: "https://www.washington.edu/bias/" },
      { title: "Office of Youth Protection Coordinator", link: "https://www.washington.edu/youth/" },
      { title: "UW Medicine South Lake Union Security", link: "https://research-grad-ed.uwmedicine.org/research-facilities-and-resources/south-lake-union/" }
    ]
  };

  const sortResources = (resourceArray) => {
    return [...resourceArray].sort((a, b) => {
      const aIncludesSeattle = a.title.toLowerCase().includes('seattle');
      const bIncludesSeattle = b.title.toLowerCase().includes('seattle');
      if (aIncludesSeattle && !bIncludesSeattle) return -1;
      if (!aIncludesSeattle && bIncludesSeattle) return 1;
      return 0;
    });
  };

  const sortedResources = {
    safety: isSeattleFilterActive ? sortResources(resources.safety) : resources.safety,
    medicine: isSeattleFilterActive ? sortResources(resources.medicine) : resources.medicine,
    other: isSeattleFilterActive ? sortResources(resources.other) : resources.other
  };

  return (
    <>
      <header>
        <MobileNav />
        <h1>RESOURCES</h1>
        <p>Huskies watch out for each other. Here are some safety resources to help.</p>
      </header>
      <div id="resources-links">
        <section>
          <div className="resource-group">
            <h2>Safety Resources</h2>
            <ul>
              {sortedResources.safety.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link}>{resource.title}</a>
                </li>
              ))}
            </ul>

            <h2>UW Medicine Resources</h2>
            <ul>
              {sortedResources.medicine.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link}>{resource.title}</a>
                </li>
              ))}
            </ul>

            <h2>Other Resources</h2>
            <ul>
              {sortedResources.other.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link}>{resource.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <footer>
        <button onClick={handleFilterToggle}>
          {isSeattleFilterActive ? 'Remove Seattle Filter' : 'Filter by Seattle'}
        </button>
      </footer>
    </>
  );
}
