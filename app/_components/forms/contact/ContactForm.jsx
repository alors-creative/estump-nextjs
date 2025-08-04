"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import TextArea from "@/app/_components/forms/components/TextArea";
import { useForm } from "@/app/_context/FormContext";
import { handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ContactForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleFormSubmit(formData) {
    setIsSubmitting(true);

    // Prepare Data
    const contactData = Object.fromEntries(formData.entries());

    // POST request
    setIsSubmitting(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactData)
    });

    // Get result
    const { success, message } = await response.json();

    console.log(success);

    success && router.push(`/contact-us/thank-you`);

    setIsSubmitting(false);
  }

  return (
    <Form type="submit" submitFunc={handleFormSubmit}>
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
      <TextArea name="message" placeholder="Message" onChange={handleChange} />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default ContactForm;
