import { ADDONS, FormState } from '../../../../hooks/useMultiStepForm';
import AddonCheckbox from '../../../../ui/AddonButton/AddonCheckbox';

const ADDONS_LIST = Object.keys(ADDONS) as [keyof typeof ADDONS];

interface AddonStep {
  formState: FormState;
  handleAddAddon: (addon: keyof typeof ADDONS) => void;
  handleRemoveAddon: (addon: keyof typeof ADDONS) => void;
}

const AddonStep = ({ formState, handleAddAddon, handleRemoveAddon }: AddonStep) => {
  return (
    <div className="form__options">
      {ADDONS_LIST.map((addon, index) => {
        return (
          <AddonCheckbox
            key={addon}
            title={addon.replace('_', ' ')}
            description={ADDONS[addon].description}
            price={ADDONS[addon].price}
            isChecked={formState.addons.findIndex((a) => a === addon) !== -1}
            handleAddAddon={() => handleAddAddon(addon)}
            handleRemoveAddon={() => handleRemoveAddon(addon)}
            autoFocus={index === 0}
          />
        );
      })}
    </div>
  );
};

export default AddonStep;
