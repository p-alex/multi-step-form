import { ADDONS } from "../../hooks/useMultiStepForm";
import "./AddonCheckbox.css";

interface AddonCheckbox {
  title: string;
  description: string;
  price: number;
  isChecked: boolean;
  handleAddAddon: () => void;
  handleRemoveAddon: () => void;
}

const AddonCheckbox = ({
  title,
  description,
  price,
  isChecked,
  handleAddAddon,
  handleRemoveAddon,
}: AddonCheckbox) => {
  return (
    <button
      className={`addonCheckbox ${isChecked && "checked"}`}
      role={"checkbox"}
      type="button"
      aria-checked={isChecked}
      aria-label={`${title}. ${description} for ${price} dollars per month.`}
      onClick={isChecked ? handleRemoveAddon : handleAddAddon}
    >
      <div className={`addonCheckbox__checkbox ${isChecked && "checked"}`}>
        <img src="/images/icon-checkmark.svg" alt="" />
      </div>
      <div className="addonCheckbox__info">
        <p className="addonCheckbox__title">{title}</p>
        <small className="addonCheckbox__description">{description}</small>
      </div>
      <p className="addonCheckbox__price">+${price}/mo</p>
    </button>
  );
};

export default AddonCheckbox;
