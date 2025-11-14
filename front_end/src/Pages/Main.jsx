import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { Categories } from '../Components/Categories/Categories'

export const Main = () => {
  return (
    <div>
        <Hero/>
        <Categories/>
        <NewsLetter/>
    </div>
  )
}
