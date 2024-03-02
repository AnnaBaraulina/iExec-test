import styles from "./Header.module.css";
import logo from "../../images/Logo-product.svg";
import HeaderButton from "../headerButtton/headerButton";

const Header = () => {
  const isLoading = false;
  const handleClick = () => {
    console.log("Кнопка нажата");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} width={157} height={64} alt="logo"></img>
      </div>
      <HeaderButton/>
    </header>
  );
};

export default Header;
