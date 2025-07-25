"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="submit"
      submitFunc={e =>
        // handleFormSubmit(e, setFormDataRef, () =>
        //   router.push("/find-a-specialist/job-request/stump")
        // )
        router.push("/specialist/dashboard/my-jobs")
      }>
      <Input
        type="email"
        name="email"
        value={formDataRef.email || ""}
        placeholder="Email"
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={formDataRef.password || ""}
        placeholder="Password"
        onChange={handleChange}
      />
      <FormSubmitButton color="orange">Login</FormSubmitButton>
    </Form>
  );
}

export default LoginForm;
