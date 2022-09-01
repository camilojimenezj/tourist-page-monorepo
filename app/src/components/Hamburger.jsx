import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/hamburger.css'
import handleHam from '../utils/hamburger'

export default function Hamburger() {
  return (
    <button className="hamburger hamburger--elastic" type="button">
      <span className="hamburger-box" onClick={handleHam}>
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}
