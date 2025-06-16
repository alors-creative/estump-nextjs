import Heading from "@/app/_components/heading/Heading";
import styles from "./cardWithIcon.module.scss";

function CardWithIcon({ icon, content, styling }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.overview}>
        <Heading type={styling.headingType} color={styling.color}>
          {content?.heading}
        </Heading>
        <p className={styles.text}>{content?.text}</p>
      </div>
    </div>
  );
}

export default CardWithIcon;
