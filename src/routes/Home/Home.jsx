import React from 'react'
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/Directory';

const Home = () => {

  


  return (
    <>
    <Directory categories={categories}/>
    <Outlet/>
    </>
  )
}

export default Home


