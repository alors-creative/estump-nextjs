"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/forms/components/forms.module.scss";
import Heading from "@/app/_components/heading/Heading";
import Image from "next/image";
import FormImage from "@/app/_components/forms/components/FormImage";
import { useState } from "react";

function FormReview() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    complianceDocs,
    equipmentPhotos
  } = formDataRef;

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleFormSubmit(formData) {
    setIsSubmitting(true);

    // Prepare Data
    const contactData = formDataRef;

    console.log(contactData);

    // POST request
    setIsSubmitting(true);
    const response = await fetch("/api/contractor-signup", {
      method: "POST",
      body: JSON.stringify(contactData)
    });

    // Get result
    const { success, message } = await response.json();

    console.log(success);

    success && router.push(`/become-a-specialist/confirmation`);

    setIsSubmitting(false);
  }

  return (
    <div className={styles.formContainer}>
      <Form type="submit" submitFunc={handleFormSubmit}>
        <Heading type="h1" color="orange">
          Review Your Details Below:
        </Heading>

        <Heading type="h6" color="green">
          Contractor Information
        </Heading>
        <div className="details">
          <p>
            <span>First Name: </span>
            <span>{firstName || ""}</span>
          </p>
          <p>
            <span>Last Name: </span>
            <span>{lastName || ""}</span>
          </p>
          <p>
            <span>Email: </span>
            <span>{email || ""}</span>
          </p>
          <p>
            <span>Phone Number: </span>
            <span>{phoneNumber || ""}</span>
          </p>
        </div>

        <Heading type="h6" color="green">
          Compliance Documents
        </Heading>
        <div className="details">
          {complianceDocs?.map(photo => (
            <div key={photo?.photo_url} className={styles.compliance}>
              {photo?.document_type === "ContractorProfile" && (
                <>
                  <span>Profile Picture: </span>
                  <FormImage photo={photo?.photo_url} />
                </>
              )}
              {photo?.document_type === "ProofOfInsurance" && (
                <>
                  <span>Profile of Insurance: </span>
                  <FormImage photo={photo?.photo_url} />
                </>
              )}
              {photo?.document_type === "BusinessLicense" && (
                <>
                  <span>Business License: </span>
                  <FormImage photo={photo?.photo_url} />
                </>
              )}
            </div>
          ))}
          {equipmentPhotos?.map(photo => (
            <div key={photo?.photo_url} className={styles.compliance}>
              {photo?.document_type === "Truck" && (
                <>
                  <span>Truck: </span>
                  <FormImage photo={photo?.photo_url} />
                </>
              )}
              {photo?.document_type === "Machine" && (
                <>
                  <span>Stump Machine: </span>
                  <FormImage photo={photo?.photo_url} />
                </>
              )}
            </div>
          ))}
        </div>
        <FormSubmitButton color="orange">Submit</FormSubmitButton>
      </Form>
    </div>
  );
}

export default FormReview;
