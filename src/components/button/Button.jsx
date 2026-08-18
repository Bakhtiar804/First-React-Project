import React from 'react'
import './Button.css'
// import { Code, Palette, Cpu, Gauge, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { ArrowRight } from 'lucide-react'

const Button = ({btnName}) => {
  return ( 
    <div className='flex'>
        <button className='btn-flex'>
            {btnName}<ArrowRight size={19}/>
        </button>
    </div>
  )
}

export default Button