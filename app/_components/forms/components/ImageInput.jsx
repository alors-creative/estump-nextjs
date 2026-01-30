"use client";

import { useForm } from "@/app/_context/FormContext";
import styles from "./forms.module.scss";
import { useState } from "react";
import Image from "next/image";

function ImageInput({ name, documentType = "stump" }) {
  const [isUploadingLocal, setIsUploadingLocal] = useState(false);
  const { setIsUploading, setFormDataRef, isUploading, formDataRef } =
    useForm();

  const handleMultipleUploads = async files => {
    const preset = "estump_preset";
    const cloudName = "dzuj8vnrr";

    setIsUploading(true);
    setIsUploadingLocal(true);

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

    setFormDataRef(prev => {
      if (documentType === "Truck" || documentType === "Machine") {
        return {
          ...prev,
          equipmentPhotos: [
            ...(prev.equipmentPhotos || []).filter(
              p => p.type !== documentType
            ),
            ...uploadedUrls.map(url => ({
              type: documentType,
              photo_url: url
            }))
          ]
        };
      }

      if (documentType && documentType !== "stump") {
        return {
          ...prev,
          complianceDocs: [
            ...(prev.complianceDocs || []).filter(
              d => d.document_type !== documentType
            ),
            ...uploadedUrls.map(url => ({
              document_type: documentType,
              photo_url: url,
              status: "pending"
            }))
          ]
        };
      }

      return {
        ...prev,
        photos: [...(prev.photos ?? []), ...uploadedUrls]
      };
    });

    setIsUploading(false);
    setIsUploadingLocal(false);
  };

  return (
    <div className={styles.formGroup}>
      <input
        type="file"
        id={name}
        className=""
        accept="image/*"
        multiple={documentType === "stump" ? true : false}
        onChange={e => {
          const files = Array.from(e.target.files ?? []);
          if (files.length > 0) handleMultipleUploads(files);
        }}
        required
      />
      {isUploadingLocal && (
        <p className={styles.uploading}>Uploading more images…</p>
      )}
      <div className={styles.loadedPhotos}>
        {formDataRef?.complianceDocs?.map(
          photo =>
            documentType === photo?.document_type && (
              <div className={styles.imageContainer} key={photo?.photo_url}>
                <Image
                  src={photo?.photo_url}
                  alt="Photo of compliance document"
                  fill
                  priority
                  sizes="auto"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                />
              </div>
            )
        )}
        {formDataRef?.equipmentPhotos?.map(
          photo =>
            documentType === photo?.document_type &&
            photo?.equipmentPhotos?.photo_url
        )}
      </div>
    </div>
  );
}

export default ImageInput;
