import ClientDetails from "@/app/_components/forms/client/ClientDetailsForm";
import styles from "../jobRequest.module.scss";
import { JobFormProvider } from "@/app/_context/JobFormContext";

function page() {
  return (
    <section className={styles.section}>
      <h1>Enter the information below</h1>

      <ClientDetails />
    </section>
  );
}

export default page;
