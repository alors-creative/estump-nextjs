"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import StumpPhotosForm from "@/app/_components/forms/client/StumpPhotosForm";
import Form from "@/app/_components/forms/components/Form";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function StumpForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  const handleStumpQuantityChange = e => {
    const quantity = parseInt(e.target.value) || 0;

    setFormDataRef(prev => {
      const newStumps = [...(prev.stumps || [])];

      // Expand the array if needed
      while (newStumps.length < quantity) {
        newStumps.push({ stumpQuantity: 1, width: 0, height: 0, photos: [] });
      }

      // Trim the array if needed
      while (newStumps.length > quantity) {
        newStumps.pop();
      }

      return {
        ...prev,
        stumpQuantity: quantity,
        stumps: newStumps
      };
    });
  };

  const handleStumpChange = (index, field, value) => {
    setFormDataRef(prev => {
      const updated = [...prev.stumps];
      updated[index] = {
        ...updated[index],
        [field]: value
      };
      return { ...prev, stumps: updated };
    });
  };

  return (
    <Form
      type="partial"
      submitFunc={e =>
        handleFormSubmit(e, setFormDataRef, () =>
          router.push("/find-a-specialist/job-request/estump-disclaimer")
        )
      }>
      <Input
        type="number"
        name="stumpQuantity"
        value={formDataRef.stumpQuantity || ""}
        placeholder="Number of Stumps"
        onChange={handleStumpQuantityChange}
      />
      {formDataRef.stumps.map((stump, index) => (
        <div key={index}>
          <Input
            type="number"
            name="width"
            value={stump.width || ""}
            placeholder="Width (in)"
            onChange={e => handleStumpChange(index, "width", e.target.value)}
          />
          <Input
            type="number"
            name="height"
            value={stump.height || ""}
            placeholder="Height (in)"
            onChange={e => handleStumpChange(index, "height", e.target.value)}
          />
          <StumpPhotosForm stumpIndex={index} />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setFormDataRef(prev => ({
            ...prev,
            stumps: [
              ...prev.stumps,
              { stumpQuantity: 0, width: 0, height: 0, photos: [] }
            ]
          }))
        }>
        + Add Another Stump
      </button>
      <FormSubmitButton color="orange">Next</FormSubmitButton>
    </Form>
  );
}

export default StumpForm;
