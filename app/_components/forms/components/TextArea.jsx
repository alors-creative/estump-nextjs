import styles from "./forms.module.scss";

function TextArea({ name, placeholder, onChange }) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{placeholder}</label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows="10"
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
