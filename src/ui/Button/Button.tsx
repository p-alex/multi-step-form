import "./Button.css";

interface Props {
  type: "button" | "submit" | "reset";
  variant: "primary" | "normal";
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ type, variant, onClick, children }: Props) => {
  return (
    <button type={type} className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
