import styles from "@/app/(routes)/become-a-specialist/formPages.module.scss";
import ContractorDisclaimerForm from "@/app/_components/forms/contractor/ContractorDisclaimerForm";
import Image from "next/image";

function page() {
  return (
    <section className={styles.section}>
      <ContractorDisclaimerForm />
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
