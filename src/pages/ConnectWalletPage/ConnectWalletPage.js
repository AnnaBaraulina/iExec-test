import styles from "./ConnectWalletPage.module.css";
import Form from "../../components/Form/Form.js";
import { useNavigate } from "react-router-dom";


const ConnectWalletPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.animatedGradient}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Secret Email Service</h1>
          <p className={styles.subtitle}>
            iExec creates the technologies for individuals and organizations to
            create, protect and develop their digital estate.
          </p>
          <Form size="small" />
        </main>
      </div>
    </div>
  );
};

export default ConnectWalletPage;
