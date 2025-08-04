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
        3 pictures: 1. standard stump (one end of stump to other), 2. rooted
        stump (measure from end of root to end of root). 3. storm damaged stump
        (measure from root ball to root ball, even if it's upended, you're still
        measuring the stump from one side to the other, uproot is more money) $4
        an inch for now -- .20 on the dollar, more inches the more we knock off
        -- minimum of $400 for machine covers up to 100 inches -- minimum 100
        inches -- if stump height is more than 12 inches they're may be an
        additional cost to cutting off the trunk
        <br />2 business days for contractor to respond -- within 5 workings
        days to schedule and complete the job
        <br />
        Add google auth for contractor
        <br />
        Add a way for contractor schedule out job if overwhelmed storm area
        <br />
        Add storm traveler type on contractor model -- add to form -- add how
        far is contractor willing to travel within his city - 25mi - 50mi - 75mi
        (if disclaimer not accepted, they go down to non-storm traveler) -
        100mi+(automatic storm traveler)
        <br />
        Join the eStump family, no fees no dues, you just get sent jobs -- there
        is only a certain amount of contractors per city
        <br />
        Preffered language for contractor and client
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
