import styles from "@/app/(routes)/find-a-specialist/job-request/jobRequest.module.scss";
import LinkButton from "@/app/_components/buttons/LinkButton";
import Heading from "@/app/_components/heading/Heading";

function page() {
  return (
    <section className={styles.section}>
      <Heading type="h1" color="">
        A Quick Note On How To Measure Your Stump
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
        feugiat elit. Nunc vestibulum, neque a hendrerit aliquet, lorem libero
        finibus metus, ultrices venenatis nisl felis sit amet tellus. Nulla a
        posuere tortor. Integer posuere ex sed nulla ornare, non condimentum mi
        consectetur. Ut convallis dolor ac est suscipit malesuada. Aliquam
        viverra volutpat semper. Vestibulum non urna ut purus tincidunt finibus
        vitae non erat. In fringilla venenatis orci. Ut vitae fringilla magna.
        Morbi iaculis nulla non odio blandit, a aliquet est fermentum. Sed
        placerat risus felis, a pretium nulla lobortis ut.
      </p>
      <LinkButton
        link="/find-a-specialist/job-request/measurement/disclaimer"
        color="orange">
        Next
      </LinkButton>
    </section>
  );
}

export default page;
