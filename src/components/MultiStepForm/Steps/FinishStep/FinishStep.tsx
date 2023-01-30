import './FinishStep.css';

const FinishStep = () => {
  return (
    <div className="finishStep">
      <img src="/images/icon-thank-you.svg" alt="" width={80} height={80} />
      <h1 className="finsihStep__title">Thank you!</h1>
      <p className="finishStep__text">
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default FinishStep;
