import style from "./Button.module.css";

const Button = ({ onClick, isLoading, children }) => {
  return (
    <button className={style.button} onClick={onClick} disabled={isLoading}>
      {children}
    </button>
  );
};

export default Button;
