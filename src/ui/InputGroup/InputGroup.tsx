import { ErrorsType } from '../../hooks/useMultiStepForm';
import './InputGroup.css';

interface Props {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  autoFocus?: boolean;
}

const InputGroup = ({
  label,
  type,
  placeholder,
  value,
  setValue,
  error,
  autoFocus,
}: Props) => {
  const formatedLabel = label.split(' ')[0];
  return (
    <div className="inputGroup">
      <div className="inputGroup__header">
        <label htmlFor={formatedLabel} className="inputGroup__label">
          {label}
        </label>
        {error && <p className="inputGroup__error">{error}</p>}
      </div>
      <input
        type={type}
        id={formatedLabel}
        name={formatedLabel}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className={`inputGroup__input ${error && 'error'}`}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default InputGroup;
