"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import ImageInput from "@/app/_components/forms/components/ImageInput";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function ContractorDisclaimerForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/become-a-specialist/review")
        )
      }>
      <Input
        type="checkbox"
        name="estumpDisclaimer"
        value={formDataRef.estumpDisclaimer || false}
        placeholder="Measurement Disclaimer"
        onChange={handleChange}
      />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default ContractorDisclaimerForm;
