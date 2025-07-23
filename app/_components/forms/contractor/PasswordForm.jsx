"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useJobForm } from "@/app/_context/JobFormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function PasswordForm() {
  <Form
    type="partial"
    submitFunc={e =>
      handleFormSubmit(e, setFormDataRef, () =>
        router.push("/find-a-specialist/become-a-specialist/review")
      )
    }>
    Set account password
    <FormSubmitButton color="orange">Next</FormSubmitButton>
  </Form>;
}

export default PasswordForm;
