import React from 'react'
import './intro.css'
import bg from '../../assets 2/img.jpeg'
import { Link } from 'react-scroll'
import btnImg from '../../assets 2/hireme.png'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hiiii :),</span>
        <span className='introText'>I'm <span className='introName'>Jennifer</span>
        <br/>Fullstack Developer</span>
        <p className='introPara'>I am a skilled Fullstack developer with<br/> experience in creating appealing and user friendly websites </p>
        <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'></img>Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro