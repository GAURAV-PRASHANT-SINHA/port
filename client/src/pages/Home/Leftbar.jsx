import React from 'react'

const Leftbar = () => {
  return (
    <div className='fixed left-0 bottom-0 pb-5 pl-10 sm:hidden'>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-line text-3xl"></i>
          </a>
          <a href="mailto:your-email@example.com">
            <i className="ri-mail-line text-3xl"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-3xl"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-fill text-3xl"></i>
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-fill text-3xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 bg-[#125f63]"></div>
      </div>
    </div>
  )
}

export default Leftbar
