import styles from "./Header.module.css";
import logo from "../../images/Logo-product.svg";
import HeaderButton from "../headerButtton/headerButton";
import { useAuth } from "../../AuthContext";
import user from '../../images/Eth-address.svg';
import exit from '../../images/fi_log-out.svg';

const Header = () => {
 const { isAuthorized } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} width={157} height={64} alt="logo"></img>
      </div>
      {!isAuthorized ? <HeaderButton/> : <div className={styles.containerExit}><img src={user}></img><img src={exit}></img></div>}
      </div>
    </header>
  );
};

export default Header;
