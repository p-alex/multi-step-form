import { PLANS, PlansType } from "../../hooks/useMultiStepForm";
import "./PlanButton.css";

interface Props {
  isSelected: boolean;
  plan: PlansType;
  isYearlyBilling: boolean;
  onClick: () => void;
  autoFocus?: boolean;
}

const PlanButton = ({
  isSelected,
  plan,
  isYearlyBilling,
  onClick,
  autoFocus,
}: Props) => {
  return (
    <button
      type="button"
      role={"checkbox"}
      aria-checked={isSelected}
      aria-label={`${plan} plan $${
        !isYearlyBilling ? PLANS[plan] : PLANS[plan] * 10
      } per ${isYearlyBilling ? "year with 2 months free" : "month"}`}
      onClick={onClick}
      className={`planButton ${isSelected && "selected"}`}
      autoFocus={autoFocus}
    >
      <img
        className="planButton__logo"
        src={`/images/icon-${plan}.svg`}
        width={40}
        height={40}
        alt=""
      />
      <div className="planButton__text">
        <p className="planButton__title">{plan}</p>
        <p className="planButton__price">
          ${!isYearlyBilling ? `${PLANS[plan]}/mo` : `${PLANS[plan] * 10}/yr`}
        </p>
        {isYearlyBilling && (
          <small className="planButton__offer">2 months free</small>
        )}
      </div>
    </button>
  );
};

export default PlanButton;
