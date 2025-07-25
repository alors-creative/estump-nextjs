"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import ImageInput from "@/app/_components/forms/components/ImageInput";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function ComplainceDocsForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/become-a-specialist/equipment-info")
        )
      }>
      <h1>Profile Picture</h1>
      <ImageInput name="contractorProfile" documentType="ContractorProfile" />
      <h1>Proof of Insurance</h1>
      <ImageInput name="proofOfInsurance" documentType="ProofOfInsurance" />
      <h1>Business License</h1>
      <ImageInput name="businessLicense" documentType="BusinessLicense" />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default ComplainceDocsForm;
