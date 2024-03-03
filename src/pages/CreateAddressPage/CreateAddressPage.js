import style from './CreateAddressPage.module.css';
import { useEffect } from 'react';
import Form from '../../components/Form/Form.js';
import { useAuth } from '../../AuthContext.js';
import HeroTitle from '../../components/HeroTitle/HeroTitle.js';
import HeroSubtitle from '../../components/HeroSubtitle/HeroSubtitle.js';

const CreateAddressPage = () => {
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
        <Form size="large" initialFormState="formInputs" />
      </main>
    </div>
  );
  
}

export default CreateAddressPage;