import React from 'react'
import './Faqs.scss'
import FAQ from './Faq';

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is AVOCET waste to wealth platform?',
      answer: 'A waste to wealth platform is an online marketplace or platform that aims to facilitate the conversion of waste materials into valuable resources. It connects waste generators with waste processors, recyclers, and other entities involved in the waste management and recycling industry. The platform promotes sustainability by encouraging the recycling and repurposing of waste materials, ultimately reducing their impact on the environment.'
    },
    {
      id: 2,
      question: 'How does the waste to wealth platform work?',
      answer: `The waste to wealth platform operates by providing a digital space where waste generators can list and describe their waste materials. Waste processors and recyclers can then browse and select the waste materials they are interested in acquiring. Once a transaction is agreed upon, the waste materials are transferred to the waste processor's facility for further processing, recycling, or repurposing. The platform may also facilitate the logistics and payment processes associated with the waste transactions.`
    },
    {
      id: 3,
      question: 'How can I join the waste to wealth platform?',
      answer: `To join the waste to wealth platform, you will need to sign up for an account on our website. Registration typically requires providing some basic information about yourself or your organization. Once your account is created, you can start listing waste materials or browse and transact with available waste listings.`
    },
    {
      id: 4,
      question: 'Can I track the progress of my waste materials after the transaction?',
      answer: `Yes, we offer tracking features that allow users to monitor the progress of their waste materials after a transaction`
    },
  ];

  return (
    <section className="faqs container" id="faqs">
      <h1>FAQs</h1>
      <div className="faqsWrapper">
        {faqs.map(({ question, answer, id }) => (
          <FAQ key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  )
}

export default Faqs