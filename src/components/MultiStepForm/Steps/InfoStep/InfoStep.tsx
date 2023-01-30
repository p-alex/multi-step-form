import { FormState } from '../../../../hooks/useMultiStepForm';
import { ZodVerifyFormErrors } from '../../../../hooks/useVerifyZodSchema';
import InputGroup from '../../../../ui/InputGroup/InputGroup';

interface InfoStep {
  formState: FormState;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fieldErrors: ZodVerifyFormErrors<{ name: string; email: string; phone: string }>;
}

const InfoStep = ({ formState, handleInputChange, fieldErrors }: InfoStep) => {
  return (
    <div className="form__options">
      <InputGroup
        label="name"
        type="text"
        placeholder="e.g. Batman"
        error={fieldErrors?.name && fieldErrors.name[0]}
        value={formState.name}
        setValue={handleInputChange}
      />
      <InputGroup
        label="email address"
        type="email"
        placeholder="e.g. batman@bat.com"
        error={fieldErrors?.email && fieldErrors.email[0]}
        value={formState.email}
        setValue={handleInputChange}
      />
      <InputGroup
        label="phone number"
        type="text"
        placeholder="e.g. +1 234 567 890"
        error={fieldErrors?.phone && fieldErrors.phone[0]}
        value={formState.phone}
        setValue={handleInputChange}
      />
    </div>
  );
};

export default InfoStep;
