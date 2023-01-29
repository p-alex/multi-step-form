import { ErrorsType, FormState } from "../../../hooks/useMultiStepForm";
import InputGroup from "../../../ui/InputGroup/InputGroup";

interface InfoStep {
  formState: FormState;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: ErrorsType;
}

const InfoStep = ({ formState, handleInputChange, errors }: InfoStep) => {
  return (
    <div className="form__options">
      <InputGroup
        label="name"
        type="text"
        placeholder="e.g. Batman"
        error={errors["name"] && errors["name"][0]}
        value={formState.name}
        setValue={handleInputChange}
      />
      <InputGroup
        label="email address"
        type="email"
        placeholder="e.g. batman@bat.com"
        error={errors["email"] && errors["email"][0]}
        value={formState.email}
        setValue={handleInputChange}
      />
      <InputGroup
        label="phone number"
        type="text"
        placeholder="e.g. +1 234 567 890"
        error={errors["phone"] && errors["phone"][0]}
        value={formState.phone}
        setValue={handleInputChange}
      />
    </div>
  );
};

export default InfoStep;
