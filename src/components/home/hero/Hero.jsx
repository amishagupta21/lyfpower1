import React from 'react'
import Title from '../../common/title/Title'
import './hero.css'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title
              subtitle='WELCOME TO LYFPOWER CONSULTING'
              title='
                     Communicate.
                     Collaborate. Succeed.'
            />
            <p>
              Software Consulting in Brampton is Backed by a team of experienced
              professionals,our strategic services meet the needs of all types
              and sizes of clients from small startups to large firms and
              deliver lasting changes.
            </p>
            <div className='button'>
              <button className='primary-btn'>
                GET IN TOUCH NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
