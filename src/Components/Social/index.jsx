import React from 'react'

export default function index({ icon, lien }) {
  return (
    <div className="flex text-primary">
      <a
        className="text-primary rounded-3xl md:text-[1.3rem] sm:text-xl border-2 border-primary md:h-14 md:w-14 sm:h-12 sm:w-12 flex items-center justify-center hover:text-black hover:bg-primary duration-300 sm:text-paragMobile"
        href={lien}
        target="blank"
      >
        <i class={icon}></i>
      </a>
    </div>
  )
}
