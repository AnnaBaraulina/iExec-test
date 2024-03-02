import Header from "../../components/Header/Header";
import styles from "./ConnectWalletPage.module.css";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ConnectWalletPage = () => {
 const navigate = useNavigate();
 {/*const [formState, setFormState] = useState('initial')*/}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <h1 className={styles.title}>Secret Email Service</h1>
        <p className={styles.subtitle}>
          iExec creates the technologies for individuals and organizations to
          create, protect and develop their digital estate.
        </p>
        <Form size="small"/>
      </main>
    </div>
  );
};

export default ConnectWalletPage;




