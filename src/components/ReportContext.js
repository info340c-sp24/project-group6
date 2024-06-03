import React, { createContext, useState } from 'react';

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports([...reports, report]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};