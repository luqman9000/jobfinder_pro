import React from 'react'
import'./howto.css'
import LISTTUTO from './listtuto'

const items = ['1. Click on the upload button', '2. Select your resume(Must be in PDF)', '3. Click on Find me the job! button'];

const Howto = () => {
  return (
    <section id='container howto__container'>
        <h1>How to use it?</h1>
        <h2>Let me show you how</h2>
        <div>
        <LISTTUTO items={items} />
        </div>
    </section>
  )
}

export default Howto