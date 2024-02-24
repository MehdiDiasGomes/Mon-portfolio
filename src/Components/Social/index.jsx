import React from 'react'

export default function index({ icon, lien }) {
  return (
    <div className="flex text-primary">
      <a
        className="text-primary md:text-4xl sm:text-2xl border-2 border-primary p-3 flex items-center justify-center hover:text-black hover:bg-primary duration-300 sm:text-paragMobile"
        href={lien}
        target="blank"
      >
        <i class={icon}></i>
      </a>
    </div>
  )
}
