import style from "./headerButton.module.css";

const HeaderButton = ({ onClick, isLoading, children }) => {
  return (
    <button className={style.button} onClick={onClick} disabled={isLoading}>
      Connect Wallet
    </button>
  );
};

export default HeaderButton;
