import "./InputGroup.css";

interface Props {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  setValue: () => void;
  error: string;
  required?: boolean;
}

const InputGroup = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  error,
  required: boolean,
}: Props) => {
  return (
    <div className="inputGroup">
      <div className="inputGroup__header">
        <label htmlFor={label} className="inputGroup__label">
          {label}
        </label>
        {error && <p className="inputGroup__error">{error}</p>}
      </div>
      <input
        type={type}
        id={label.split(" ").join("-")}
        name={label.split(" ").join("-")}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className={`inputGroup__input ${error && "error"}`}
      />
    </div>
  );
};

export default InputGroup;
