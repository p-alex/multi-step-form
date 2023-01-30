import {
  ADDONS,
  AddonsListType,
  PLANS,
  PlansType,
  STEP_TYPE,
} from '../../../../hooks/useMultiStepForm';
import { convertPrice } from '../../../../utils/convertPrice';
import './ConfirmStep.css';

interface ConfirmStep {
  isYearlyBilling: boolean;
  plan: PlansType;
  addons: AddonsListType;
  totalPrice: number;
  handleSkipToStep: (plan: STEP_TYPE) => void;
}

const ConfirmStep = ({
  isYearlyBilling,
  plan,
  addons,
  totalPrice,
  handleSkipToStep,
}: ConfirmStep) => {
  return (
    <div className="form__options">
      <div className="confirmStep">
        <div className="confirmStep__plan">
          <div className="confirmStep__planInfo">
            <p className="confirmStep__planTitle">
              Arcade ({isYearlyBilling ? 'Yearly' : 'Monthly'})
            </p>
            <button
              className="confirmStep__changeBtn"
              onClick={() => handleSkipToStep('plan')}
            >
              Change
            </button>
          </div>
          <p className="confirmStep__planPrice">
            {convertPrice(isYearlyBilling, PLANS[plan])}
          </p>
        </div>
        <div className="confirmStep__addons">
          {addons.map((addon) => {
            return (
              <div className="confirmStep__addon" key={addon}>
                <p className="confirmStep__addonName">{addon.replace('_', ' ')}</p>
                <p className="confirmStepp__addonPrice">
                  +{convertPrice(isYearlyBilling, ADDONS[addon].price)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="confirmStep__total">
        <p className="confirmStep__totalText">
          Total (per {isYearlyBilling ? 'year' : 'month'})
        </p>
        <p className="confirmStep__totalPrice">
          ${totalPrice}/{isYearlyBilling ? 'yr' : 'mo'}
        </p>
      </div>
    </div>
  );
};

export default ConfirmStep;
