import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

export default function ScrollToTopButton() {
  const [backToTop, setBackToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
        {backToTop && (
        <Fade>
          <button
            className="p-5 bg-[#191919] hover:bg-[#242424] duration-100 flex justify-center items-center rounded-xl fixed bottom-10 right-10"
            onClick={scrollToTop}>
            <FaArrowUp className="text-white" />
          </button>
        </Fade>
        )}
      </div>
  )
}
