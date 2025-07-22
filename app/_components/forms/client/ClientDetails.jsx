"use client";

import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useJobForm } from "@/app/_context/JobFormContext";
import { createJob } from "@/app/_lib/actions";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function ClientDetails() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useJobForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/find-a-specialist/job-request/photos")
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
      <h2>Address</h2>
      <Input
        type="text"
        name="streetAddress"
        value={formDataRef.streetAddress || ""}
        placeholder="Address"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="city"
        value={formDataRef.city || ""}
        placeholder="City"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="state"
        value={formDataRef.state || ""}
        placeholder="State"
        onChange={handleChange}
      />
      <Input
        type="string"
        name="zipCode"
        value={formDataRef.zipCode || ""}
        placeholder="Zip Code"
        onChange={handleChange}
        maxLength={5}
      />

      <button type="submit">Next</button>
    </Form>
  );
}

export default ClientDetails;
