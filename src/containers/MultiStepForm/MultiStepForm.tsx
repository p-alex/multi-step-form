import InputGroup from "../../components/InputGroup/InputGroup";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  return (
    <form className="form">
      <div className="form__fields">
        <InputGroup
          label="name"
          type="text"
          placeholder="e.g. Batman"
          error=""
          value=""
          setValue={() => {}}
        />
        <InputGroup
          label="email address"
          type="email"
          placeholder="e.g. batman@bat.com"
          error=""
          value=""
          setValue={() => {}}
        />
        <InputGroup
          label="phone number"
          type="text"
          placeholder="e.g. +1 234 567 890"
          error=""
          value=""
          setValue={() => {}}
        />
      </div>
    </form>
  );
};

export default MultiStepForm;
