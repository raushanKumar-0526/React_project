import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();
  return (
    <>
      <h1 className='text-3xl text-center bg-orange-500 p-4 rounded-md' >Github Followers : {data.followers} </h1>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/raushanKumar-0526")
    return response.json()
}
