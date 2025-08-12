import Heading from "@/app/_components/heading/Heading";
import styles from "./page.module.scss";
import Image from "next/image";
import ContactForm from "@/app/_components/forms/contact/ContactForm";

export const metadata = {
  title: "Contact eStump | Get Help with Stump Removal Questions or Sign Up",
  description:
    "Have questions or ready to get started? Contact the eStump team today—we’ll assist with stump removal inquiries or guide you through signing up as a stump specialist."
};

function page() {
  return (
    <section className={styles.section}>
      <div className={styles.heroGallery}>
        <div className={[styles.filler, styles.filler1].join(" ")}>&nbsp;</div>
        <div className={[styles.filler, styles.filler2].join(" ")}>&nbsp;</div>
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer1
          ].join(" ")}>
          <Image
            src="/photos/stump-1.jpg"
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
        <div
          className={[
            styles.heroImageContainer,
            styles.heroImageContainer2
          ].join(" ")}>
          <Image
            src="/photos/stump-and-machine-2.jpg"
            alt="Photo of a tree stump"
            fill
            priority
            sizes="auto"
            style={{
              objectFit: "cover"
            }}
          />
        </div>
      </div>
      <div className="content">
        <Heading type="h1" color="purple">
          Have a Question or Need Assistance?
        </Heading>
        <p>
          We’re here to help! Whether you need more information about stump
          removal, have a specific question, or just want to get in touch, fill
          out the form below, and we’ll get back to you as soon as possible.
        </p>
        <div className="form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default page;
