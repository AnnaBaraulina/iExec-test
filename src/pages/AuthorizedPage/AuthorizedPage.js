import style from './AuthorizedPage.module.css';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form'


const AuthorizedPage = () => {


    return (
        <div className={style.container}>
        <main className={style.main}>
          <Header />
          <h1 className={style.title}>Secret Email Service</h1>
          <p className={style.subtitle}>
            iExec creates the technologies for individuals and organizations to
            create, protect and develop their digital estate.
          </p>
          <Form size="small" initialFormState='createAddress'/>
        </main>
      </div>
    )
}

export default AuthorizedPage;