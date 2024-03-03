import style from './CreateAddressPage.module.css';
import { useEffect } from 'react';
import Form from '../../components/Form/Form.js';
import { useAuth } from '../../AuthContext.js';

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
        <h1 className={style.title}>Secret Email Service</h1>
        <p className={style.subtitle}>
          iExec creates the technologies for individuals and organizations to
          create, protect and develop their digital estate.
        </p>
        <Form size="large" initialFormState="formInputs" />
      </main>
    </div>
  );
  
}

export default CreateAddressPage;