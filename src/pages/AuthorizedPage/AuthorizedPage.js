import style from "./AuthorizedPage.module.css";
import Form from "../../components/Form/Form.js";
import { useAuth } from "../../AuthContext.js";
import { useEffect } from "react";
import HeroTitle from "../../components/HeroTitle/HeroTitle.js";
import HeroSubtitle from "../../components/HeroSubtitle/HeroSubtitle.js";

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
        <HeroTitle/>
        <HeroSubtitle/>
        <Form size="small" initialFormState="createAddress" />
      </main>
    </div>
  );
};

export default AuthorizedPage;
