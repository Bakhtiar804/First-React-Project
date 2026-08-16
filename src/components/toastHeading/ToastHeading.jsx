import React from 'react'
import './ToastHeading.css'

import { Rocket, Compass, ShieldCheck, Zap, ArrowRight } from 'lucide-react';


const ToastHeading = ({ text , num }) => {
    return (
        <div>
            <div className="space-badge">
                <Rocket size={num} /> {text}
            </div>
        </div>
    )
}

export default ToastHeading