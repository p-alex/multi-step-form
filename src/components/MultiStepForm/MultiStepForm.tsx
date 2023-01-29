import './MultiStepForm.css';
import StepDisplay from './StepDisplay/StepDisplay';
import FormFooter from './FormFooter/FormFooter';
import useMultiStepForm, { STEP_INFO } from '../../hooks/useMultiStepForm';
import InfoStep from './InfoStep/InfoStep';
import PlanStep from './PlanStep/PlanStep';
import AddonStep from './AddonStep/AddonStep';
import ConfirmStep from './ConfirmStep/ConfirmStep';
import MobileControlls from './MobileControls/MobileControls';
import FinishStep from './FinishStep/FinishStep';

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
    errors,
  } = useMultiStepForm();
  return (
    <>
      <form className="form">
        <StepDisplay stepIndex={stepIndex} />
        <div className="form__container">
          {step !== 'finish' && (
            <header className="form__header" aria-live="assertive">
              <h1 className="form__stepTitle">{STEP_INFO[step].title}</h1>
              <h2 className="form__stepDescription">{STEP_INFO[step].description}</h2>
            </header>
          )}
          {step === 'info' && (
            <InfoStep
              formState={formState}
              handleInputChange={handleInputChange}
              errors={errors}
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
      <MobileControlls
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
