import style from './ShareAccessPage.module.css';
import { useEffect } from 'react';
import Form from '../../components/Form/Form.js';
import { useAuth } from '../../AuthContext.js';
import { useState } from 'react';

const ShareAccessPage = () => {
    const { setIsAuthorized } = useAuth();

    useEffect(() => {
        const userWallet = localStorage.getItem('userWallet');
        if (userWallet) {
          setIsAuthorized(true);
        }
      });
    
     
      const protectedData = JSON.parse(localStorage.getItem('protectedEmail'));

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
         <Form size='medium' initialFormState='shareAccess' protectedEmail={protectedData ? protectedData.address : null}/>
        </main>
      </div>
    );
    
}

export default ShareAccessPage;