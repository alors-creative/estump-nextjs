import styles from "./page.module.scss";
import SignUpProcess from "@/app/_components/specialist/howItWorks/SignUpProcess";
import ContractorProcess from "@/app/_components/specialist/howItWorks/ContractorProcess";
import TypesOfStumps from "@/app/_components/specialist/howItWorks/TypesOfStumps";
import ContractorFlexibility from "@/app/_components/specialist/howItWorks/ContractorFlexibility";
import JoinTheFamily from "@/app/_components/specialist/howItWorks/JoinTheFamily";

function page() {
  return (
    <section className={styles.section}>
      <SignUpProcess />
      <ContractorProcess />
      <TypesOfStumps />
      <ContractorFlexibility />
      <JoinTheFamily />
    </section>
  );
}

export default page;
