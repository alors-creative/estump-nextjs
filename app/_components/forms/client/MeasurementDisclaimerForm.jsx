"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function MeasurementDisclaimerForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/find-a-specialist/job-request/stump")
        )
      }>
      <Input
        type="checkbox"
        name="measurementDisclaimer"
        value={formDataRef.measurementDisclaimer || false}
        placeholder="Measurement Disclaimer"
        onChange={handleChange}
      />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default MeasurementDisclaimerForm;
