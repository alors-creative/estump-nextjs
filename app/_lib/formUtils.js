"use client";

export async function handleFormSubmit(e, setFormDataRef, onSuccess) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  setFormDataRef(prev => ({
    ...prev,
    ...data
  }));

  if (typeof onSuccess === "function") {
    await onSuccess();
  }
}

export function handleInputChange(setFormData) {
  return function (e) {
    const { name, type, value, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
}
