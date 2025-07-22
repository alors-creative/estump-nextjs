function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
  min,
  max,
  minLength,
  maxLength
}) {
  return (
    <div className="formGroup">
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        className=""
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
}

export default Input;
