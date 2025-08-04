"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import ImageInput from "@/app/_components/forms/components/ImageInput";
import Input from "@/app/_components/forms/components/Input";
import Heading from "@/app/_components/heading/Heading";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/forms/components/forms.module.scss";

function ComplainceDocsForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <div className={styles.formContainer}>
      <Heading type="h5" color="purple">
        eStump requires a profile photo, proof of insurance, a copy of your
        business licesne, a photo of your business truck and a photo of your
        machine for us to review in order to be approved to become a stump
        specialist. Please attach below.
      </Heading>
      <Form
        type="partial"
        submitFunc={e =>
          handleFormSubmit(e, setFormDataRef, () =>
            router.push("/become-a-specialist/estump-contractor-disclaimer")
          )
        }>
        <Heading type="h6" color="orange">
          Profile Picture
        </Heading>
        <ImageInput name="contractorProfile" documentType="ContractorProfile" />
        <Heading type="h6" color="orange">
          Proof of Insurance
        </Heading>
        <ImageInput name="proofOfInsurance" documentType="ProofOfInsurance" />
        <Heading type="h6" color="orange">
          Business License
        </Heading>
        <ImageInput name="businessLicense" documentType="BusinessLicense" />
        <Heading type="h6" color="orange">
          Truck Photo
        </Heading>
        <ImageInput name="truck" documentType="Truck" />
        <Heading type="h6" color="orange">
          Machine
        </Heading>
        <ImageInput name="machine" documentType="Machine" />
        <FormSubmitButton color="purple">Next</FormSubmitButton>
      </Form>
    </div>
  );
}

export default ComplainceDocsForm;
