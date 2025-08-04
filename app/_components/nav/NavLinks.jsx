import Link from "next/link";
import styles from "./navLinks.module.scss";

function NavLinks() {
  return (
    <div className={styles.navLinks}>
      <Link href="/about-us" className={styles.link}>
        About
      </Link>
      <Link href="/how-estump-works" className={styles.link}>
        How eStump Works
      </Link>
      <Link href="/contact-us" className={styles.link}>
        Contact Us
      </Link>
    </div>
  );
}

export default NavLinks;
