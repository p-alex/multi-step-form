import { MAX_STEPS, STEP_TYPE } from "../../../hooks/useMultiStepForm";
import Button from "../../../ui/Button/Button";
import "./FormFooter.css";

export interface FormControlls {
  step: STEP_TYPE;
  stepIndex: number;
  goBack: () => void;
  goNext: () => void;
  handleConfirm: () => void;
}

const FormFooter = ({
  step,
  stepIndex,
  goBack,
  goNext,
  handleConfirm,
}: FormControlls) => {
  return (
    <footer className={`formFooter`}>
      <div className="formFooter__container">
        {stepIndex > 0 && stepIndex < MAX_STEPS && (
          <Button type="button" variant="normal" onClick={goBack}>
            Go Back
          </Button>
        )}
        {stepIndex < MAX_STEPS - 1 && (
          <Button type="button" variant="primary" onClick={goNext}>
            Next step
          </Button>
        )}
        {step === "confirm" && (
          <Button type="button" variant="primary" onClick={goNext}>
            Confirm
          </Button>
        )}
      </div>
    </footer>
  );
};

export default FormFooter;
