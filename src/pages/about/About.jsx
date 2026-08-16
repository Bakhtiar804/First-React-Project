import React from 'react'
import './About.css'
import {  Compass, ShieldCheck, Zap } from 'lucide-react';


import NavBar from '../../components/navBar/NavBar'
import Heading from '../../components/heading/Heading'
import ParaGraph from '../../components/paraGraph/ParaGraph'
import CommonCard from '../../components/commonCard/CommonCard'
import ContainerCards from '../../components/containerCards/ContainerCards'
import Button from '../../components/button/Button';
import ToastHeading from  '../../components/toastHeading/ToastHeading';


const Home = () => {
  const states = [
    { value: '50+', label: 'Missions Completed' },
    { value: '99.9%', label: 'Signal Reliability' },
    { value: '10+', label: 'Star Navigators' },
    { value: '5+', label: 'Years in Orbit' },
  ];


  const values = [
    {
      icon: <Compass className="value-icon" />,
      title: 'Precision Navigation',
      description: 'We craft high-precision code and UI, ensuring smooth transit across all devices and screen sizes.',
    },
    {
      icon: <Zap className="value-icon" />,
      title: 'Continuous Exploration',
      description: 'Constantly adapting cutting-edge frameworks and web technologies to push past traditional boundaries.',
    },
    {
      icon: <ShieldCheck className="value-icon" />,
      title: 'Signal Clarity',
      description: 'Clear, transparent communication at every phase of the project mission from launch to deployment.',
    },
  ];

  return (
    <div>
      <NavBar />
      <ToastHeading text={'DEEP SPACE OPERATIONS'}/>
      <div className='main-heading'>
        <Heading heading={'Unveiling the Cosmos'} />
      </div>

      <div className='d-flex'>
        <div className='main-para'>
          <ParaGraph mainPara={'We are a team of digital explorers navigating the vast universe of web development. From crafting seamless user interfaces to building powerful architectures, we turn complex challenges into elegant solutions—one light-year at a time.'} />
        </div>
      </div>
      <div>
        <CommonCard stats={states} />
      </div>
      <div className='sub-heading'>
        <Heading heading={'Core Directives'} />
      </div>
      <div>
        <ContainerCards values={values} />
      </div>
      <section className="cta-banner">
        <Heading heading={'Ready to Launch Your Next Project?'} />
        <div className='para'>
          <ParaGraph mainPara={"Set your coordinates and let's build something extraordinary together."} />
        </div>
        <div className='contact-redirect-btn'>
          <Button btnName={'Initiate Contact'} />
        </div>
      </section>
    </div>
  )
}

export default Home