import "./Switch.css";

interface Switch {
  isOn: boolean;
  onClick: () => void;
}

const Switch = ({ isOn, onClick }: Switch) => {
  return (
    <button
      className="switch"
      type="button"
      onClick={onClick}
      aria-label={`${
        isOn ? "Yearly" : "Monthly"
      } billing is currently selected`}
    >
      <div className={`switch__dot ${isOn && "on"}`}></div>
    </button>
  );
};

export default Switch;
