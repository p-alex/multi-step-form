import "./StepDisplay.css";

interface StepDisplay {
  stepIndex: number;
}

const STEPS = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const StepDisplay = ({ stepIndex }: StepDisplay) => {
  return (
    <div className="stepDisplay">
      <picture className="stepDisplay__bg">
        <source
          media="(min-width:801px)"
          srcSet="/images/bg-sidebar-desktop.svg"
        />
        <source
          media="(max-width:800px)"
          srcSet="/images/bg-sidebar-mobile.svg"
        />
        <img src="img_orange_flowers.jpg" alt="" />
      </picture>
      {STEPS.map((step, index) => {
        return (
          <div className="stepDisplay__step" key={step + index}>
            <div
              className={`stepDisplay__index ${
                stepIndex === index && "currentIndex"
              }`}
            >
              {index + 1}
            </div>
            <div className="stepDisplay__info">
              <small className="stepDisplay__indexText">STEP {index + 1}</small>
              <p className="stepDisplay__title">{step}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepDisplay;
