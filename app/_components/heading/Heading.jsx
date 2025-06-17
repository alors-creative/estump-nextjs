import styles from "./heading.module.scss";
import colors from "@/app/_styles/textColor.module.scss";

function Heading({ type, color, children }) {
  return (
    <>
      {type === "h1" && (
        <h1 className={[styles.heading1, colors[color]].join(" ")}>
          {children}
        </h1>
      )}
      {type === "h2" && (
        <h2 className={[styles.heading2, colors[color]].join(" ")}>
          {children}
        </h2>
      )}
      {type === "h3" && (
        <h3 className={[styles.heading3, colors[color]].join(" ")}>
          {children}
        </h3>
      )}
      {type === "h4" && (
        <h4 className={[styles.heading4, colors[color]].join(" ")}>
          {children}
        </h4>
      )}
      {type === "h5" && (
        <h5 className={[styles.heading5, colors[color]].join(" ")}>
          {children}
        </h5>
      )}
      {type === "h6" && (
        <h6 className={[styles.heading6, colors[color]].join(" ")}>
          {children}
        </h6>
      )}
    </>
  );
}

export default Heading;
