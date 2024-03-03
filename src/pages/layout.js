import Header from '../components/Header/Header.js';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';

export default function Layout() {
    return (
        <>
        <div className={style.container}>
        <Header/>
        <Outlet/>
        </div>
        </>
    )
}