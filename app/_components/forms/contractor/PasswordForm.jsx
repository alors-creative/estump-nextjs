"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/forms/components/forms.module.scss";

function PasswordForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/become-a-specialist/compliance-docs")
        )
      }>
      <Input
        type="password"
        name="password"
        value={formDataRef.password || ""}
        placeholder="Password"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        value={formDataRef.confirmPassword || ""}
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default PasswordForm;
