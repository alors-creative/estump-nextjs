import styles from "./forms.module.scss";

function Form({ type, submitFunc, children }) {
  return (
    <>
      {type === "partial" && (
        <form onSubmit={submitFunc} className="form">
          {children}
        </form>
      )}
      {type === "submit" && (
        <form action={submitFunc} className="form">
          {children}
        </form>
      )}
    </>
  );
}

export default Form;
