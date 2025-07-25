"use client";

import Link from "next/link";
import styles from "./button.module.scss";
import { usePathname } from "next/navigation";

function AsideLinkButton({ link, color, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={[
        styles.asideLinkBtn,
        styles[color],
        pathname === link ? styles.activeBtn : ""
      ].join(" ")}>
      {children}
    </Link>
  );
}

export default AsideLinkButton;
