import { MAX_STEPS } from "../../../hooks/useMultiStepForm";
import Button from "../../../ui/Button/Button";
import { FormControlls } from "../FormFooter/FormFooter";
import "./MobileControlls.css";

const MobileControlls = ({
  stepIndex,
  goNext,
  goBack,
  handleConfirm,
}: FormControlls) => {
  return (
    <div className="mobileControlls">
      {stepIndex > 0 && (
        <Button variant="normal" type="button" onClick={goBack}>
          Go back
        </Button>
      )}
      {stepIndex < MAX_STEPS && (
        <Button variant="primary" type="button" onClick={goNext}>
          Next Step
        </Button>
      )}
      {stepIndex === MAX_STEPS && (
        <Button variant="primary" type="button" onClick={handleConfirm}>
          Confirm
        </Button>
      )}
    </div>
  );
};

export default MobileControlls;
