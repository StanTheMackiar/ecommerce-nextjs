import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout/Layout'

const Error404 = () => {
  return (
    <Layout>
        <h1 style={{marginTop: "3rem"}}>Error 404</h1>
        <p style={{fontSize: "17px"}}>Sorry, this page was not found :(</p>
        <Link href='/'><a><Button style={{fontSize: "18px"}} variant="outlined">Go to Home</Button></a></Link>
    </Layout>
  )
}

export default Error404