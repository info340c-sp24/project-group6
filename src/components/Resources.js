import React, { useState } from 'react';
import { MobileNav } from './Nav';

export function Resources() {
  const [selectedResources, setSelectedResources] = useState([]);
  const [personalizedResources, setPersonalizedResources] = useState([]);

  const handleCheckboxChange = (resourceId) => {
    setSelectedResources((prev) => {
      if (prev.includes(resourceId)) {
        return prev.filter((id) => id !== resourceId);
      } else {
        return [...prev, resourceId];
      }
    });
  };

  const handleSaveChanges = () => {
    setPersonalizedResources(selectedResources);
  };

  const resources = {
    safety: [
      { id: 1, title: "UW Police Department (Seattle Campus)", link: "https://police.uw.edu/..." },
      { id: 2, title: "UW Bothell Campus Safety", link: "https://www.washington.edu/safety/resources/" },
      { id: 3, title: "UW Tacoma Campus Safety", link: "https://www.tacoma.uw.edu/fa/safety?..." },
      { id: 4, title: "SafeCampus", link: "https://www.washington.edu/safecampus/" },
      { id: 5, title: "UW Global Emergency", link: "https://www.washington.edu/globalaffairs/global-travelers/emergency/" }
    ],
    medicine: [
      { id: 6, title: "UW Medical Center - Montlake", link: "https://www.uwmedicine.org/locations/uw-medical-center" },
      { id: 7, title: "UW Medical Center - Northwest", link: "https://www.uwmedicine.org/locations/northwest-hospital" },
      { id: 8, title: "Harborview Medical Center", link: "https://www.uwmedicine.org/locations/harborview-medical-center" },
      { id: 9, title: "Valley Medical Center", link: "https://www.uwmedicine.org/locations/valley-medical-center" }
    ],
    other: [
      { id: 10, title: "UW Emergency Management", link: "https://www.washington.edu/uwem/" },
      { id: 11, title: "Title IX", link: "https://www.washington.edu/titleix/" },
      { id: 12, title: "Student Conduct", link: "https://www.washington.edu/studentconduct/" },
      { id: 13, title: "EH&S", link: "https://www.ehs.washington.edu/..." },
      { id: 14, title: "Hall Health (Seattle)", link: "https://wellbeing.uw.edu/unit/hall-health?..." },
      { id: 15, title: "Counseling Center (Seattle)", link: "https://wellbeing.uw.edu/unit/counseling-center?..." },
      { id: 16, title: "LiveWell (Seattle)", link: "https://livewell.uw.edu/..." },
      { id: 17, title: "Student Care Report Form (Seattle)", link: "https://dsl.uw.edu/staff-development/student-care-report-form?..." },
      { id: 18, title: "Bias Incident Reporting Tool (Seattle)", link: "https://www.washington.edu/bias/" },
      { id: 19, title: "Office of Youth Protection Coordinator", link: "https://www.washington.edu/youth/" },
      { id: 20, title: "UW Medicine South Lake Union Security", link: "https://research-grad-ed.uwmedicine.org/research-facilities-and-resources/south-lake-union/" }
    ]
  };

  const allResources = [...resources.safety, ...resources.medicine, ...resources.other];

  return (
    <>
      <header>
        <MobileNav />
        <h1>RESOURCES</h1>
        <p>Huskies watch out for each other. Here are some safety resources to help.</p>
      </header>
      <div id="resources-container">
        <div id="resources-links">
          <section>
            <div className="resource-group">
              <h2>Safety Resources</h2>
              <ul>
                {resources.safety.map((resource) => (
                  <li key={resource.id}>
                    <input
                      type="checkbox"
                      checked={selectedResources.includes(resource.id)}
                      onChange={() => handleCheckboxChange(resource.id)}
                    />
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>

              <h2>UW Medicine Resources</h2>
              <ul>
                {resources.medicine.map((resource) => (
                  <li key={resource.id}>
                    <input
                      type="checkbox"
                      checked={selectedResources.includes(resource.id)}
                      onChange={() => handleCheckboxChange(resource.id)}
                    />
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>

              <h2>Other Resources</h2>
              <ul>
                {resources.other.map((resource) => (
                  <li key={resource.id}>
                    <input
                      type="checkbox"
                      checked={selectedResources.includes(resource.id)}
                      onChange={() => handleCheckboxChange(resource.id)}
                    />
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
        <div id="personalized-resources">
          <h2>Personalized Resources</h2>
          <ul>
            {allResources
              .filter((resource) => personalizedResources.includes(resource.id))
              .map((resource) => (
                <li key={resource.id}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
