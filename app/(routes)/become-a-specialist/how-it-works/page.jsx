import styles from "./page.module.scss";
import SignUpProcess from "@/app/_components/specialist/howItWorks/SignUpProcess";
import ContractorProcess from "@/app/_components/specialist/howItWorks/ContractorProcess";
import TypesOfStumps from "@/app/_components/specialist/howItWorks/TypesOfStumps";
import ContractorFlexibility from "@/app/_components/specialist/howItWorks/ContractorFlexibility";
import JoinTheFamily from "@/app/_components/specialist/howItWorks/JoinTheFamily";

export const metadata = {
  title: "How It Works for Stump Specialists | Get Jobs with eStump",
  description:
    "Learn how eStump connects stump removal pros with real paying jobs—no subscriptions or bidding. See how the process works from signup to payment."
};

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
