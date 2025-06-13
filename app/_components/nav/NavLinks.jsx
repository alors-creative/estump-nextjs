import Link from "next/link";
import styles from "./navLinks.module.scss";

function NavLinks() {
  return (
    <div className={styles.navLinks}>
      <Link href="#" className={styles.link}>
        About
      </Link>
      <Link href="#" className={styles.link}>
        How eStump Works
      </Link>
      <Link href="#" className={styles.link}>
        Contact Us
      </Link>
    </div>
  );
}

export default NavLinks;
