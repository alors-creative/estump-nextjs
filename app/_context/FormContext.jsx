"use client";

import { createContext, useContext, useRef, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [formDataRef, setFormDataRef] = useState({
    stumps: [
      {
        stumpQuantity: 0,
        width: 0,
        height: 0,
        photos: []
      }
    ]
  });
  const [isUploading, setIsUploading] = useState(false);

  return (
    <FormContext.Provider
      value={{ formDataRef, setFormDataRef, isUploading, setIsUploading }}>
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { FormProvider, useForm };
