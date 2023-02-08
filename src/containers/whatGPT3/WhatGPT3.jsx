import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='lorem ipsum dasd ijf asjeuf auigfc cfaiusg aosihdfef asdfveyfa feuiasgfe efuigaisfba asjfiaujsdf askfhaouigf '/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Chatbots are chatbots'/>
        <Feature title='Knowledgebase' text='Knowledgebase lorem ipsum then i was an ant at the battlefield'/>
        <Feature title='Education' text='Education plays an important part of our community'/>
      </div>
    </div>
  )
}

export default WhatGPT3