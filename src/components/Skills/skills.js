import React from 'react'
import './skills.css' 
import UIDesign from '../../assets 2/ui-design.png'
import WebDesign from '../../assets 2/website-design.png'
import AppDesign from '../../assets 2/app-design.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span> <br/>
        <span className='skillDesc'>Dedicated full-stack developer, passionate about bringing creative front-end visions to life. Proficient in the fundamentals with a quick learning pace, eagerly seeking hands-on opportunities to grow and contribute effectively</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>React</h2>
                    <p>I specialize in front-end development using React, creating interactive and user-friendly interfaces. Leveraging the power of this JavaScript library, I build dynamic web applications with a focus on modular and reusable components, providing a seamless and engaging user experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Ruby on Rails</h2>
                    <p>
I have basic skills in Ruby on Rails, with an understanding of its fundamentals. I can handle simple tasks within the framework but am working towards improving and gaining more experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>AppDesign</h2>
                    <p>Demo Message</p>
                </div>
            </div>
        </div>
    
    </section>
  )
}

export default Skills