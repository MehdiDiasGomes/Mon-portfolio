import React from 'react'

export default function index({ icon, lien }) {
  return (
    <div className="flex text-primary">
      <a
        className="text-primary dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-black rounded-3xl md:text-[1.3rem] sm:text-xl border-2 dark:border-primaryDark border-[#1e1e1e] hover:text-white  md:h-14 md:w-14 sm:h-12 sm:w-12 flex items-center justify-center hover:bg-[#1e1e1e] duration-300 sm:text-paragMobile"
        href={lien}
        target="blank"
      >
        <i class={icon}></i>
      </a>
    </div>
  )
}
