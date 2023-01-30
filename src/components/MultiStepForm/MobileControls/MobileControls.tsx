import { MAX_STEPS } from '../../../hooks/useMultiStepForm';
import Button from '../../../ui/Button/Button';
import { FormControls } from '../FormFooter/FormFooter';
import './MobileControls.css';

const MobileControls = ({ stepIndex, goNext, goBack, handleReset }: FormControls) => {
  return (
    <div className="mobileControlls">
      {stepIndex > 0 && stepIndex < MAX_STEPS && (
        <Button variant="normal" type="button" onClick={goBack}>
          Go back
        </Button>
      )}
      {stepIndex < MAX_STEPS && (
        <Button variant="primary" type="button" onClick={goNext}>
          {stepIndex === MAX_STEPS - 1 ? 'Confirm' : 'Next Step'}
        </Button>
      )}
      {stepIndex === MAX_STEPS && (
        <Button variant="primary" type="button" onClick={handleReset}>
          Finish
        </Button>
      )}
    </div>
  );
};

export default MobileControls;
