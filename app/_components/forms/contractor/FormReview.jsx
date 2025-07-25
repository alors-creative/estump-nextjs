"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function FormReview() {
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
        router.push("/become-a-specialist/confirmation")
      }>
      <>
        {Object.entries(formDataRef)?.map(([key, value]) => (
          <div key={key}>
            <p>
              <strong>{key}:</strong>{" "}
              {Array.isArray(value) ? (
                value.every(v => typeof v === "string") ? (
                  value.map((v, i) => (
                    <img
                      key={i}
                      src={v}
                      alt={`Uploaded ${key} ${i}`}
                      width={100}
                    />
                  ))
                ) : (
                  value.map((v, i) => <p key={i}>{v.name || "File"}</p>)
                )
              ) : typeof value === "object" && value instanceof File ? (
                <p>{value.name}</p>
              ) : (
                value
              )}
            </p>
          </div>
        ))}
      </>
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default FormReview;
