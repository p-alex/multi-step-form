import './MultiStepForm.css';
import StepDisplay from './StepDisplay/StepDisplay';
import FormFooter from './FormFooter/FormFooter';
import useMultiStepForm, { MAX_STEPS, STEP_INFO } from '../../hooks/useMultiStepForm';
import InfoStep from './Steps/InfoStep/InfoStep';
import PlanStep from './Steps/PlanStep/PlanStep';
import AddonStep from './Steps/AddonStep/AddonStep';
import ConfirmStep from './Steps/ConfirmStep/ConfirmStep';
import MobileControls from './MobileControls/MobileControls';
import FinishStep from './Steps/FinishStep/FinishStep';

const MultiStepForm = () => {
  const {
    step,
    stepIndex,
    formState,
    goBack,
    goNext,
    handleInputChange,
    handleChangePlan,
    handleSwitchBilling,
    handleAddAddon,
    handleRemoveAddon,
    handleSkipToStep,
    handleResetForm,
    fieldErrors,
  } = useMultiStepForm();
  return (
    <>
      <form className="form">
        <StepDisplay stepIndex={stepIndex} />
        <div className="form__container">
          {stepIndex < MAX_STEPS && (
            <header className="form__header" aria-live="assertive">
              <h1 className="form__stepTitle">{STEP_INFO[step].title}</h1>
              <h2 className="form__stepDescription">{STEP_INFO[step].description}</h2>
            </header>
          )}
          {step === 'info' && (
            <InfoStep
              formState={formState}
              handleInputChange={handleInputChange}
              fieldErrors={fieldErrors}
            />
          )}
          {step === 'plan' && (
            <PlanStep
              formState={formState}
              handleChangePlan={handleChangePlan}
              handleSwitchBilling={handleSwitchBilling}
            />
          )}
          {step === 'addons' && (
            <AddonStep
              formState={formState}
              handleAddAddon={handleAddAddon}
              handleRemoveAddon={handleRemoveAddon}
            />
          )}
          {step === 'confirm' && (
            <ConfirmStep
              plan={formState.plan}
              addons={formState.addons}
              isYearlyBilling={formState.isYearlyBilling}
              totalPrice={formState.price}
              handleSkipToStep={handleSkipToStep}
            />
          )}
          {step === 'finish' && <FinishStep />}
          <FormFooter
            step={step}
            stepIndex={stepIndex}
            goBack={goBack}
            goNext={goNext}
            handleReset={handleResetForm}
          />
        </div>
      </form>
      <MobileControls
        step={step}
        stepIndex={stepIndex}
        goBack={goBack}
        goNext={goNext}
        handleReset={handleResetForm}
      />
    </>
  );
};

export default MultiStepForm;
