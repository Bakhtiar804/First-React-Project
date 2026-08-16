import React from 'react'
import './Service.css'
import { Code, Palette, Cpu, Gauge } from 'lucide-react';


import NavBar from '../../components/navBar/NavBar'
import Heading from '../../components/heading/Heading'
import ParaGraph from '../../components/paraGraph/ParaGraph'
import Button from '../../components/button/Button';
import Container from '../../components/container/Container';
import ToastHeading from '../../components/toastHeading/ToastHeading';

const Home = () => {
  const values = [
    {
      icon: <Code className="service-icon" />,
      title: 'Full-Stack Web Launch',
      tag: 'Development',
      description: 'Building ultra-fast, responsive web applications engineered with modern frameworks and clean architecture.',
      features: ['React & Next.js Apps', 'Responsive Glass Interfaces', 'Custom API Integration'],
    },
    {
      icon: <Palette className="service-icon" />,
      title: 'Space-Age UI/UX Design',
      tag: 'Design',
      description: 'Crafting high-tech dark mode themes, interactive prototypes, and cohesive design systems for immersive digital experiences.',
      features: ['Dark & Space Aesthetics', 'Design Systems', 'Interactive Prototyping'],
    },
    {
      icon: <Cpu className="service-icon" />,
      title: 'Backend Architecture',
      tag: 'Infrastructure',
      description: 'Engineering secure data pipelines and scalable server-side solutions to power your web applications.',
      features: ['REST & GraphQL APIs', 'Database Optimization', 'Authentication & Security'],
    },
    {
      icon: <Gauge className="service-icon" />,
      title: 'Speed & Performance',
      tag: 'Optimization',
      description: 'Optimizing codebases and assets to reduce load times, boost SEO rankings, and deliver smooth 60fps animations.',
      features: ['Lighthouse Audits', 'Asset Compression', 'Code Refactoring'],
    },
  ];
  return (
    <div>
      <NavBar />
      <div>
        <ToastHeading text={'ORBITAL CAPABILITIES'} />
      </div>
      <div className='main-h1'>
        <Heading heading={'Services & Operations'} />
      </div>
      <div className='main-para'>
        <ParaGraph mainPara={'From initial blueprint to final orbital launch, we provide end-to-end digital solutions designed to propel your mission forward.'} />
      </div>
      <div className='main-container'>
        <Container services={values} />
      </div>
      <section className="cta-banner">
        <Heading heading={'Need a Custom Solution?'} />
        <div className='para'>
          <ParaGraph mainPara={"Let's align your specs and launch a tailored mission suited to your exact needs."} />
        </div>
        <div className='contact-redirect-btn'>
          <Button btnName={'Request Proposal'} />
        </div>
      </section>
    </div>
  )
}

export default Home