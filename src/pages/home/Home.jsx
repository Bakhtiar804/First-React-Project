import React from 'react'
import './Home.css'
import {  Shield, Cpu, Globe} from 'lucide-react';


import NavBar from '../../components/navBar/NavBar'
import ToastHeading from '../../components/toastHeading/ToastHeading'
import Heading from '../../components/heading/Heading'
import ParaGraph from '../../components/paraGraph/ParaGraph'
import Button from '../../components/button/Button'
import ContainerCards from '../../components/containerCards/ContainerCards'
import TitleCards from '../../components/titleCards/TitleCards';

const Home = () => {
    const highlights = [
        {
            icon: <Globe className="highlight-icon" />,
            title: 'Global Reach',
            description: 'Deploying high-speed web solutions accessible from anywhere across the globe.',
        },
        {
            icon: <Cpu className="highlight-icon" />,
            title: 'Modern Tech Stack',
            description: 'Built with React, Ant Design, and cutting-edge web architecture.',
        },
        {
            icon: <Shield className="highlight-icon" />,
            title: 'Secure Systems',
            description: 'Robust protocols ensuring your data remains safe and encrypted in transit.',
        },
    ];


    const featuredProjects = [
        {
            title: 'Astra Protocol',
            category: 'Web Application',
            description: 'Real-time dashboard monitoring orbital telemetry and system performance.',
        },
        {
            title: 'Nebula UI Kit',
            category: 'Design System',
            description: 'Comprehensive component library tailored for dark-mode glassmorphism aesthetics.',
        },
        {
            title: 'Starlight Engine',
            category: 'Backend Platform',
            description: 'High-throughput API microservice built for scalable cloud communications.',
        },
    ];

    return (
        <div>
            <NavBar />

            <ToastHeading text={'Welcome To The Future'} />
            <div className='home-heading'>
                <Heading heading={"Building Digital Solutions Across the Cosmos"} />
            </div>
            <div className='home-para'>
                <ParaGraph mainPara={'We combine space-age design with modern web engineering to launch unforgettable digital experiences.'} />
            </div>
            <div className='btn-d-flex'>
                <div className='service-btn'>
                    <Button btnName={'Explore Services'} />
                </div>
                <div className='contact-btn'>
                    <Button btnName={'Initiate Contact'} />
                </div>
            </div>
            <div className='home-container'>
                <ContainerCards values={highlights} />
            </div>
            <div>
                <ToastHeading text={'RECENT MISSIONS'} />
            </div>
            <div className='home-sub-title'>
                <Heading heading={"Featured Projects"} />
            </div>
            <div className='home-container'>
                <TitleCards featuredProjects={featuredProjects} />
            </div>
            <div>
                <section className="cta-banner">
                    <Heading heading={'Ready to Launch Your Next Project?'} />
                    <div className='para'>
                        <ParaGraph mainPara={"Connect with Mission Control today and turn your vision into reality."} />
                    </div>
                    <div className='contact-redirect-btn'>
                        <Button btnName={'Get Started'} />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home