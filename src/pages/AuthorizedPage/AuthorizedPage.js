import style from "./AuthorizedPage.module.css";
import Form from "../../components/Form/Form.js";
import { useAuth } from "../../AuthContext.js";
import { useEffect } from "react";

const AuthorizedPage = () => {
  const { setIsAuthorized } = useAuth();

  useEffect(() => {
    const userWallet = localStorage.getItem('userWallet');
    if (userWallet) {
      setIsAuthorized(true);
    }
  })


  return (
    <div className={style.container}>
      <main className={style.main}>
        <h1 className={style.title}>Secret Email Service</h1>
        <p className={style.subtitle}>
          iExec creates the technologies for individuals and organizations to
          create, protect and develop their digital estate.
        </p>
        <Form size="small" initialFormState="createAddress" />
      </main>
    </div>
  );
};

export default AuthorizedPage;
