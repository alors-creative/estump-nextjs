import Image from "next/image";
import styles from "./forms.module.scss";

function FormImage({ photo }) {
  return (
    <div className={styles.imageContainer} key={photo}>
      <Image
        src={photo}
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
  );
}

export default FormImage;
