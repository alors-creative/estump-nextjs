import styles from "./button.module.scss";

function FormSubmitButton({ color, children }) {
  return (
    <button type="submit" className={[styles.button, styles[color]].join(" ")}>
      {children}
    </button>
  );
}

export default FormSubmitButton;
