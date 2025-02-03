'use client'
import React, { use } from 'react'

const page = ({params}) => {
  const {id} = use(params)
  return (
    <div>Subscription {id}</div>
  )
}

export default page