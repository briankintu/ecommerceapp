import React from 'react'
import {useState} from 'react'
import Layout from '../../components/Layout'
import Login from '../Auth/Login'

const Dashboard = () => {
    const [token, setToken] = useState()
    if(!token){
        {return <Login setToken={setToken}/>}
    }
  return (
    <Layout>
        <h1 className='text-black font-bold text-2xl'>Dashboard</h1>
    </Layout>
  )
}

export default Dashboard