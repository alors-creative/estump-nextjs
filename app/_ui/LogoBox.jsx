import Link from "next/link";
import styles from "./logoBox.module.scss";
import Image from "next/image";

function LogoBox() {
  return (
    <div className={styles.logoBox}>
      <Link href="/">
        <div className={styles.logo}>
          <Image
            src="/logos/ESTUMP_Primary_Logo_RGB_Orange.png"
            alt="eStump Logo"
            fill
            priority
            sizes="auto"
          />
        </div>
      </Link>
    </div>
  );
}

export default LogoBox;
