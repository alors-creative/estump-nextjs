import Link from "next/link";
import styles from "./footer.module.scss";
import LogoBox from "@/app/_ui/LogoBox";
import NavLinksFooter from "@/app/_components/footer/NavLinksFooter";
import LoginButtons from "@/app/_components/nav/LoginButtons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <LogoBox />
        <div>
          <NavLinksFooter />
          <LoginButtons type="footer" />
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.copyright}>
          <p>
            Designed, Developed & Maintained by{" "}
            <Link href="#">Alors Creative</Link> | &copy;{year}
          </p>
        </div>
        <div className={styles.legalNotices}>
          <Link href="#">Privacy Policy</Link>
          &nbsp;&bull;&nbsp;
          <Link href="#">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
