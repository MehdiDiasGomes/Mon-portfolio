import React from 'react'
import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

const index = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme' || 'light'))

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <button
        className="border-2 dark:border-secondary border-[#1e1e1e] text-[#1e1e1e] dark:text-white rounded-md p-2 duration-200 dark:hover:bg-[#494949] hover:bg-[#cfcfcf]"
        onClick={toggleTheme}>
        {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  )
}

export default index
