"use client";

import { createContext, useContext, useRef, useState } from "react";

const ContractorFormContext = createContext();

const initialState = { from: undefined, to: undefined };

function ContractorFormProvider({ children }) {
  const [formDataRef, setFormDataRef] = useState({});

  return (
    <ContractorFormContext.Provider value={{ formDataRef, setFormDataRef }}>
      {children}
    </ContractorFormContext.Provider>
  );
}

function useContractorForm() {
  const context = useContext(ContractorFormContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { ContractorFormProvider, useContractorForm };
