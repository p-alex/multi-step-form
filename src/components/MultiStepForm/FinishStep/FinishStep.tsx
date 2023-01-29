import { STEP_INFO } from "../../../hooks/useMultiStepForm";
import "./FinishStep.css";

const FinishStep = () => {
  return (
    <div className="finishStep">
      <img src="/images/icon-thank-you.svg" alt="" width={80} height={80} />
      <h1 className="finsihStep__title">{STEP_INFO["finish"].title}</h1>
      <p className="finishStep__text">{STEP_INFO["finish"].description}</p>
    </div>
  );
};

export default FinishStep;
