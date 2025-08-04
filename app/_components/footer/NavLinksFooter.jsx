import Link from "next/link";
import styles from "./navLinksFooter.module.scss";

function NavLinksFooter() {
  return (
    <div className={styles.navLinks}>
      <Link href="/about-us" className={styles.link}>
        About
      </Link>
      <Link href="/how-estump-works" className={styles.link}>
        How eStump Works
      </Link>
      {/* <Link href="#" className={styles.link}>
        How We Measure Stumps
      </Link> */}
      <Link href="/contact-us" className={styles.link}>
        Contact Us
      </Link>
      {/* <Link href="#" className={styles.link}>
        FAQ
      </Link> */}
    </div>
  );
}

export default NavLinksFooter;
