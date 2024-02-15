import React from 'react'

function Services() {
  return (
    <div className=' text-slate-900  mx-6 py-6 sm:px-16'>
      <h1 className=' font-sans text-sm font-bold mt-2 mb-4 md:text-md lg:mx-12'>SERVICES</h1>
      <p className=' font-sans text-sm font-bold mt-2 mb-4 md:text-lg lg:mx-12'>It is not about limitations, but this is something about what we focus on.</p>

      <section className='flex flex-col gap-y-6 md:gap-y-10 lg:gap-y-16 xl:flex-row xl:py-8 '>
        <div className=' bg-blue-100 p-3  rounded-xl flex flex-col gap-y-4 sm:p-8 md:px-16 lg:mx-12 lg:py-12 lg:px-24 xl:px-16 xl:m-2 '>
          <h1 className=' font-semibold text-md sm:text-xl sm:font-bold'>Community Building and Engagement</h1>
          <p className=' sm:font-semibold xl:text-lg'>Building a community involves creating a loyal following around your brand on social media by fostering connections and interactions. Engagement refers to the level of interaction between your brand and its audience, including likes, comments, and shares. Both are crucial for fostering brand loyalty and increasing brand visibility.</p>
          <ul className='text-sm list-disc ml-4 lg:text-md xl:font-bold '>
            <li>Building and nurturing online communities</li>
            <li>Facilitating conversations</li>
            <li>responding to inquiries</li>
            <li>addressing customer concerns</li>
          </ul>
        </div>

        <div className=' bg-red-100 p-3  rounded-xl flex flex-col gap-y-4 sm:p-8 md:px-16 lg:mx-12 lg:py-12 lg:px-24 xl:px-16 xl:m-2'>
          <h1 className=' font-semibold text-md sm:text-xl sm:font-bold'>Social Media Strategy Development</h1>
          <p className=' sm:font-semibold xl:text-lg'>This entails creating a roadmap for achieving your business goals through social media. It involves analyzing your target audience, defining objectives, selecting appropriate platforms, planning content, and determining metrics for success. A solid strategy guides your social media efforts and ensures they align with your overall business objectives.</p>
          <ul className='text-sm list-disc ml-4 lg:text-md xl:font-bold '>
            <li>Audience research </li>
            <li>Content plannings</li>
            <li>calendar scheduling</li>
            <li>consistent posting</li>
          </ul>
        </div>


        <div className=' bg-purple-100 p-3 rounded-xl flex flex-col gap-y-4 sm:p-8 md:px-16 lg:mx-12 lg:py-12 lg:px-24 xl:px-16 xl:m-2 '>
          <h1 className=' font-semibold text-md sm:text-xl sm:font-bold'>Training and Consultation</h1>
          <p className=' sm:font-semibold xl:text-lg'>Social media agencies provide training to clients to equip them with the skills and knowledge needed to manage their social media effectively. Consultation involves offering expert advice and guidance on optimizing social media strategies, addressing challenges, and maximizing results. These services help clients make informed decisions and improve their social media presence.</p>
          <ul className='text-sm list-disc ml-4 lg:text-md xl:font-bold '>
            <li>Providing training sessions for internal teams</li>
            <li>Staying up-to-date with the latest trends</li>
            <li>advisory services to help clients</li>
            <li>optimize their social media efforts</li>
          </ul>
        </div>
      </section>



    </div>
  )
}

export default Services
