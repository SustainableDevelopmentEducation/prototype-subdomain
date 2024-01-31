import React from 'react'
import placeholder from '../assets/placeholder.png'
import nsde from '../assets/nsde.png'
import background from '../assets/background.png'

const Footer = () => {
    const listsData = [
        {
          title: 'Product',
          items: ['Diam orci', 'Mi feugat', 'Netus fermentum', 'Suspendisse viverra', 'Id dolor', 'Erat mattis'],
        },
        {
          title: 'Information',
          items: ['Nibh', 'Egestas', 'Dictum'],
        },
        {
          title: 'Company',
          items: ['Id maecenas', 'Id orci', 'Magna ultricies', 'Quis risus'],
        },
      ];

  return (
    <>
    <div className='relative bg-[#003477] overflow-hidden'>
  <img src={background} alt='background' className='w-full h-full object-cover absolute inset-0 z-0' />
  <div className='absolute inset-0 bg-[#003477] opacity-80 z-1'></div>
  
  <div className='mx-auto flex lg:space-x-20 md:space-x-10 sm:space-x-5 justify-center items-center p-20 relative z-2'>
    <div className='hidden justify-center items-center lg:block'>
      <img src={placeholder} alt="placeholder" />
    </div>
    <div className='inline-block justify-center items-center text-white'>
      <h1 className='text-5xl font-bold'>Subscribe To Our <br/>Newsletter</h1>
      <p className='text-gray-400 pt-2 pb-8'>Fringilla non proin nec in in lorem amet eget ac. Mauris.</p>
      <form method='POST' className='flex space-x-3'>
        <input className='h-10 w-80 rounded-md text-center' type='email' placeholder='Email Address' />
        <button className='bg-amber-500 text-white py-auto px-6 rounded-md basis-1/3'>Sign Up</button>
      </form>
    </div>
  </div>
</div>

    <div className='flex flex-row space-x-20 justify-center items-center p-20'>
    <div className='flex flex-row ml-20 space-x-20'>
    {listsData.map((list, index) => (
        <ul key={index}>
          <p className='font-bold mb-2'>{list.title}</p>
          {list.items.map((item, itemIndex) => (
            <li key={itemIndex} className='text-gray-500 text-nowrap mb-2 hover:underline'>
                <a href='#'>{item}</a>
            </li>
          ))}
        </ul>
      ))}
      </div>
      <div>
    <img src={nsde} alt='nsde logo' className='h-[160px] hidden xl:block' />
    </div>
    </div>
    <div className='flex mx-auto space-x-10 justify-center items-center mb-4'>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Cookies</a>
    </div>
    </>
  )
}

export default Footer