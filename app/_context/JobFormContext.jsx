"use client";

import { createContext, useContext, useRef, useState } from "react";

const JobFormContext = createContext();

const initialState = { from: undefined, to: undefined };

function JobFormProvider({ children }) {
  const [formDataRef, setFormDataRef] = useState({});

  return (
    <JobFormContext.Provider value={{ formDataRef, setFormDataRef }}>
      {children}
    </JobFormContext.Provider>
  );
}

function useJobForm() {
  const context = useContext(JobFormContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { JobFormProvider, useJobForm };
