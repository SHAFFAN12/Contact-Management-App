import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSeeContactsClick = () => {
    navigate('/auth');
  };

  return (
    <>
      <div className='text-center pt-10'>
        <h1 className='text-3xl font-bold mx-auto'>
          MANAGE YOUR CONTACTS <br /> WITH <span className='text-[#22c55e]'>CONTACT Dashboard</span>
        </h1>
        <p className='text-lg  mx-auto mt-4 md:w-[30rem] lg:w-[40rem]'>
          Welcome to Contact Management – your all-in-one solution for effortlessly organizing, updating, and staying connected with your network. Experience streamlined contact management that adapts to your needs, helping you build and nurture meaningful connections.
        </p>
        <button className="home-btn mt-6" onClick={handleSeeContactsClick}>
          See Contacts
        </button>
      </div>
    </>
  );
};

export default Home;
