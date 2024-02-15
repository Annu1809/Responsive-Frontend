import React, { useState } from 'react';

function FAQ() {
  
  const faqs = [
    {
      question: 'What services does your social media agency offer?',
      answer: 'Our agency offers a wide range of services including social media strategy development, content creation, community management, paid advertising, influencer marketing, analytics, and more.',
    },   
    {
      question: 'How do I get started with your social media agency?',
      answer: "Getting started is easy! Simply reach out to us through our website or contact information provided, and we'll schedule a consultation to discuss your needs and how we can help you achieve your social media goals",
    }, 
    {
      question:"How do you measure the success of social media campaigns?",
      answer: "We track key performance indicators (KPIs) such as reach, engagement, conversions, website traffic, and ROI to evaluate the effectiveness of our social media campaigns. We provide regular reports and analytics to keep you informed of your campaign's progress and performance."
    },
    {
      question:"How involved will I be in the social media content creation process?",
      answer: "We value collaboration and transparency, so we encourage our clients to be involved in the content creation process. We'll work closely with you to understand your brand voice, messaging preferences, and content goals to ensure that we create content that resonates with your audience."
    },
    
    {
      question: 'How do you determine which social media platforms are best for my business?',
      answer: 'We conduct a thorough analysis of your target audience, industry, and business objectives to identify the most relevant social media platforms for your brand. We consider factors such as demographics, engagement metrics, and platform capabilities to make data-driven recommendations.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col mx-6 py-6 sm:px-16 md:mx-16 lg:px-28'>
      <h1 className=' font-sans text-sm font-bold mt-2 mb-4 md:text-md'>FAQs</h1>
      <div className="accordion flex flex-col  gap-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item ">
          <button
            className="accordion-title flex justify-between items-center py-3 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-bold">{faq.question}</span>
            <svg
              className={`w-4 h-4 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''
                }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="accordion-content bg-white p-4">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>


  );
}

export default FAQ;
