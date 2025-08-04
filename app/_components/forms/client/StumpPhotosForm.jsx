"use client";

import FormSubmitButton from "@/app/_components/buttons/FormSubmitButton";
import Form from "@/app/_components/forms/components/Form";
import ImageInput from "@/app/_components/forms/components/ImageInput";
import Input from "@/app/_components/forms/components/Input";
import { useForm } from "@/app/_context/FormContext";
import { handleFormSubmit, handleInputChange } from "@/app/_lib/formUtils";
import { useRouter } from "next/navigation";

function StumpPhotosForm() {
  const router = useRouter();
  const { formDataRef, setFormDataRef, isUploading } = useForm();
  const handleChange = handleInputChange(setFormDataRef);

  const handleDeletePhoto = index => {
    const updatedPhotos = [...formDataRef.photos];
    updatedPhotos.splice(index, 1);

    setFormDataRef(prev => ({
      ...prev,
      photos: updatedPhotos
    }));
  };

  return (
    <>
      <ImageInput name="image" />
      {isUploading && <p className="">Uploading images…</p>}
      {formDataRef?.photos?.map((photo, i) => (
        <div
          key={i}
          style={{ marginBottom: "1rem", width: "20rem", height: "20rem" }}>
          <img src={photo} alt={`Uploaded ${i}`} width="100%" height="100%" />
          {/* <div className={["formGroup", styles.formGroup].join(" ")}> */}
          <div>
            <button
              type="button"
              className=""
              onClick={() => handleDeletePhoto(i)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default StumpPhotosForm;
