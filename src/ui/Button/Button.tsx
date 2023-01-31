import './Button.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'normal';
  onClick: () => void;
  isSmall?: boolean;
  children: React.ReactNode;
}

const Button = ({ type, variant, onClick, isSmall, children }: Props) => {
  return (
    <button
      type={type}
      className={`button ${variant} ${isSmall ? 'small' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
