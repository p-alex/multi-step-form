import { FormState, PLANS, PLANS_LIST } from '../../../../hooks/useMultiStepForm';
import PlanButton from '../../../../ui/PlanButton/PlanButton';
import Switch from '../../../../ui/Switch/Switch';
import './PlanStep.css';

interface PlanStep {
  formState: FormState;
  handleChangePlan: (plan: keyof typeof PLANS) => void;
  handleSwitchBilling: () => void;
}

const PlanStep = ({ formState, handleChangePlan, handleSwitchBilling }: PlanStep) => {
  return (
    <div className="form__options">
      <div
        className={
          formState.isYearlyBilling ? 'planStep__plans yearly' : 'planStep__plans'
        }
      >
        {PLANS_LIST.map((plan, index) => {
          return (
            <PlanButton
              key={plan}
              isSelected={formState.plan === plan}
              plan={plan}
              isYearlyBilling={formState.isYearlyBilling}
              onClick={() => handleChangePlan(plan)}
              autoFocus={index === 0}
            />
          );
        })}
      </div>
      <div className="planStep__billing">
        <p className={`planStep__billingType ${!formState.isYearlyBilling && 'active'}`}>
          Monthly
        </p>
        <Switch isOn={formState.isYearlyBilling} onClick={handleSwitchBilling} />
        <p className={`planStep__billingType ${formState.isYearlyBilling && 'active'}`}>
          Yearly
        </p>
      </div>
    </div>
  );
};

export default PlanStep;
