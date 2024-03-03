import styles from "./Header.module.css";
import logo from "../../images/Logo-product.svg";
import HeaderButton from "../headerButtton/headerButton.js";
import { useAuth } from "../../AuthContext.js";
import user from "../../images/Eth-address.svg";
import exit from "../../images/fi_log-out.svg";

const Header = () => {
  const { isAuthorized } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} width={157} height={64} alt="logo"></img>
      </div>
      {!isAuthorized ? (
        <HeaderButton />
      ) : (
        <div className={styles.containerExit}>
          <img alt='user string' src={user} className={styles.userNumber}></img>
          <img src={exit}></img>
        </div>
      )}
    </header>
  );
};

export default Header;
