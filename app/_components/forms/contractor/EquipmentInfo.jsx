"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import ImageInput from "@/app/_components/forms/components/ImageInput";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";
import styles from "@/app/_components/forms/components/forms.module.scss";

function EquipmentInfo() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/become-a-specialist/estump-contractor-disclaimer")
        )
      }>
      <h1>Truck Photo</h1>
      <ImageInput name="truck" documentType="Truck" />
      <h1>Machine</h1>
      <ImageInput name="machine" documentType="Machine" />
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default EquipmentInfo;
