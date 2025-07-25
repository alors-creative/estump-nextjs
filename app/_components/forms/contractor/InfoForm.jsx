"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function InfoForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/become-a-specialist/set-password")
        )
      }>
      <Input
        type="text"
        name="firstName"
        value={formDataRef.firstName || ""}
        placeholder="First Name"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="lastName"
        value={formDataRef.lastName || ""}
        placeholder="Last Name"
        onChange={handleChange}
      />

      <Input
        type="email"
        name="email"
        value={formDataRef.email || ""}
        placeholder="Email"
        onChange={handleChange}
      />

      <Input
        type="phone"
        name="phoneNumber"
        value={formDataRef.phoneNumber || ""}
        placeholder="Phone Number"
        onChange={handleChange}
      />

      <input
        type="hidden"
        id="account_type"
        name="account_type"
        value="Contractor"
      />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default InfoForm;
