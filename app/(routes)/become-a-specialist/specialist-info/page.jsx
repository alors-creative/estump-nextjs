import styles from "@/app/(routes)/become-a-specialist/formPages.module.scss";
import InfoForm from "@/app/_components/forms/contractor/InfoForm";
import Image from "next/image";

function page() {
  return (
    <section className={styles.section}>
      <InfoForm />
      <div className={styles.imageContainer}>
        <Image
          src="/photos/stump-9-vapproved.JPG"
          alt="Photo of a tree stump"
          fill
          priority
          sizes="auto"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </div>
    </section>
  );
}

export default page;
