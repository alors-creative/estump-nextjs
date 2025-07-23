"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useJobForm } from "@/app/_context/JobFormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function FormReview() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useJobForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/find-a-specialist/job-request/payment")
        )
      }>
      Form Review
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default FormReview;
