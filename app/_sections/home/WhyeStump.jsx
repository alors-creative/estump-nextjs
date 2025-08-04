import Heading from "@/app/_components/heading/Heading";
import styles from "./whyeStump.module.scss";
import CardWithIcon from "@/app/_components/cards/CardWithIcon";
import { IoSpeedometer, IoPricetags } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa6";
import LinkButton from "@/app/_components/buttons/LinkButton";

const content = [
  {
    heading: "Quick & Easy",
    text: "Simply enter your stump measurements, a stump specialist will reach out to you within 48 hours to schedule your removal. We make the process effortless, so you can sit back and let us handle the rest, whether it's a small stump or a larger job.",
    icon: IoSpeedometer
  },
  {
    heading: "Local Experts",
    text: "We connect you with trusted, vetted professionals in your area. Our specialists bring years of experience and are dedicated to providing reliable, efficient stump removal services.",
    icon: FaMapPin
  },
  {
    heading: "Transparent Pricing",
    text: "No surprises! Just clear, upfront pricing based on your stump’s size. We believe in honesty, so you’ll always know exactly what to expect before the job begins.",
    icon: IoPricetags
  }
];

function WhyeStump({ includeBtn }) {
  return (
    <section className={styles.whyeStump}>
      <div className={styles.overview}>
        <Heading type="h2" color="purple">
          Why Choose eStump?
        </Heading>
        <p className={styles.text}>
          At eStump, we believe stump removal should be simple. No more endless
          phone calls or waiting for a quote. Here's why homeowners trust
          eStump:
        </p>
      </div>
      <div className={styles.cards}>
        {content.map((c, index) => (
          <CardWithIcon
            key={`whyeStumpCard-${index}`}
            icon={c?.icon ? <c.icon /> : null}
            content={c}
            styling={{ headingType: "h6", color: "orange" }}
          />
        ))}
      </div>
      {includeBtn && (
        <div className={styles.buttons}>
          <LinkButton link="#" color="orange">
            Learn More
          </LinkButton>
        </div>
      )}
    </section>
  );
}

export default WhyeStump;
