"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useJobForm } from "@/app/_context/JobFormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function StumpPhotosForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useJobForm();
  const handleChange = handleInputChange(setFormDataRef);

  return <p>Stump Photos Inputs</p>;
}

export default StumpPhotosForm;
