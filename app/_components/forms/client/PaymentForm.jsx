"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function PaymentForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="submit"
      submitFunc={e =>
        // handleFormSubmit(e, setFormDataRef, () =>
        //   router.push("/find-a-specialist/job-request/confirmation")
        // )
        router.push("/find-a-specialist/job-request/confirmation")
      }>
      <h1>Stripe Form Here</h1>
      <h2>Once payment is completed then we can submit job</h2>
      <FormSubmitButton color="orange">Submit Job</FormSubmitButton>
    </Form>
  );
}

export default PaymentForm;
