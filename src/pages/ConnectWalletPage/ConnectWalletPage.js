import styles from "./ConnectWalletPage.module.css";
import Form from "../../components/Form/Form.js";
import { useNavigate } from "react-router-dom";
import HeroTitle from "../../components/HeroTitle/HeroTitle.js";
import HeroSubtitle from "../../components/HeroSubtitle/HeroSubtitle.js";

const ConnectWalletPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.animatedGradient}>
      <div className={styles.container}>
        <main className={styles.main}>
          <HeroTitle/>
          <HeroSubtitle/>
          <Form size="small" />
        </main>
      </div>
    </div>
  );
};

export default ConnectWalletPage;
