import React from 'react';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar/>
            <main className='min-h-90'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Root;