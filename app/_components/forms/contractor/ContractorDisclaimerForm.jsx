"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import ImageInput from "@/app/_components/forms/components/ImageInput";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/forms/components/forms.module.scss";
import Heading from "@/app/_components/heading/Heading";

function ContractorDisclaimerForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <div className={styles.formContainer}>
      <div className="disclaimer">
        <Heading type="h5" color="purple">
          By using the eStump platform, I acknowledge and agree to the
          following:
        </Heading>
        <ul>
          <li>
            I understand that eStump is a referral platform that connects me
            with clients seeking stump removal services.
          </li>
          <li>
            I agree that eStump collects a deposit from the client to secure the
            booking, and that the remaining balance is to be paid directly by
            the client upon completion of the service.
          </li>
          <li>
            I understand that any additional work outside of the original quote
            provided to the client is not the responsibility of eStump, and it
            is solely my responsibility to negotiate and agree upon any extra
            charges with the client.
          </li>
          <li>
            I acknowledge that I am an independent contractor, and not an
            employee, agent, or representative of eStump.
          </li>
          <li>
            I understand that eStump reserves the right to remove me from the
            platform at any time, for any reason, including but not limited to
            violations of platform policies, misconduct, or client complaints.
          </li>
        </ul>
      </div>
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
          placeholder="I have read, understood, and agree to the above terms."
          onChange={handleChange}
        />
        <FormSubmitButton color="orange">Next</FormSubmitButton>
      </Form>
    </div>
  );
}

export default ContractorDisclaimerForm;
