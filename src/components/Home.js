import React, { useContext } from 'react';
import { ReportContext } from './ReportContext';
import { MobileNav } from './Nav';

export function Home() {
  const { reports } = useContext(ReportContext);
  return (
    <>
      <header>
        <MobileNav />
        <h1>WELCOME</h1>
        <p>If you have an emergency, please call or text 911.</p>
      </header>

      <div id='content'>
        <section id='card-container'>
          <div
            className='card'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/safe-campus.jpg)`,
            }}
          >
            <h2>SAFE CAMPUS</h2>
          </div>

          <div
            className='card'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/uw-police.jpg)`,
            }}
          >
            <h2>UW POLICE</h2>
          </div>

          <div
            className='card'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/emergency-management.jpg)`,
            }}
          >
            <h2>EMERGENCY MANAGEMENT</h2>
          </div>

          <div
            className='card'
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/contact.jpg)`,
            }}
          >
            <h2>CONTACT</h2>
          </div>
        </section>

        <section id='news'>
          <h2>RECENT REPORTS</h2>
          <ul>
            {reports.map((report, index) => (
              <li key={index}>
                <h3>{report.title}</h3>
                <p>{report.dateTime}</p>
                <p>{report.location}</p>
                <p>{report.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

