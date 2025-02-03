'use client'
import React, { use } from 'react'

const page = ({params}) => {
  const {id} = use(params)
  return (
    <div>Product {id}</div>
  )
}

export default page