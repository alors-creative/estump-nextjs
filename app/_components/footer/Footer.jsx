import Link from "next/link";
import styles from "./footer.module.scss";
import LogoBox from "@/app/_ui/LogoBox";
import NavLinksFooter from "@/app/_components/footer/NavLinksFooter";
import LoginButtons from "@/app/_components/nav/LoginButtons";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <LogoBox />
        <div className={styles.socials}>
          <Link href="https://www.facebook.com/people/eStump/61578434260927/">
            <FaFacebookSquare />
          </Link>
        </div>
        <div>
          <NavLinksFooter />
          {/* <LoginButtons type="footer" /> */}
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.copyright}>
          <p>
            Designed, Developed & Maintained by{" "}
            <Link href="https://alorscreative.com/">Alors Creative</Link> |
            &copy;{year}
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
