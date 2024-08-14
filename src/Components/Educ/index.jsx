import React from 'react'

const index = ({ img, titre, date, parag }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex md:justify-between md:flex-row sm:items-center sm:flex-col sm:gap-4">
        <div className="flex md:flex-row sm:items-center sm:justify-center gap-4 sm:flex-col">
          <img className="w-educImg" src={img} alt="" />
          <h3 className="md:text-2xl dark:text-white sm:text-xl sm:text-center text-primary font-bold">
            {titre}
          </h3>
        </div>
        <span className="text-gray-900 dark:text-secondaryDark">{date}</span>
      </div>
      <div>
        <p className="dark:text-secondary text-gray-900 sm:text-center sm:text-paragMobile md:text-xl md:text-justify">
          {parag}
        </p>
      </div>
    </div>
  )
}

export default index
