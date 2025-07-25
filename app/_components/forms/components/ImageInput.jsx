"use client";

import { useForm } from "@/app/_context/FormContext";

function ImageInput({ name }) {
  const { setIsUploading, setFormDataRef } = useForm();

  const handleMultipleUploads = async files => {
    const preset = "estump_preset";
    const cloudName = "dzuj8vnrr";

    setIsUploading(true);

    const uploadedUrls = [];

    for (const file of files) {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", preset);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: form
          }
        );

        const data = await res.json();
        if (data.secure_url) {
          uploadedUrls.push(data.secure_url);
        } else {
          console.error("Upload failed:", data);
        }
      } catch (err) {
        console.error("Upload error:", err);
      }
    }

    setFormDataRef(prev => ({
      ...prev,
      photos: [...(prev.photos ?? []), ...uploadedUrls]
    }));

    setIsUploading(false);
  };

  return (
    <div className="formGroup">
      <input
        type="file"
        id={name}
        className=""
        accept="image/*"
        multiple
        onChange={e => {
          const files = Array.from(e.target.files ?? []);
          if (files.length > 0) handleMultipleUploads(files);
        }}
      />
    </div>
  );
}

export default ImageInput;
