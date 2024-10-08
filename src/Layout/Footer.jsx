import React from 'react'
import Logo from '../../public/logo.svg'

const Footer = () => {
  return (
    <footer class="bg-transparent rounded-lg">
      <div class="w-full max-w-screen-xl mx-auto md:py-8">
        <div class="sm:flex sm:items-center sm:flex-col md:flex-row sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src={Logo}
              class="h-8"
            />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#contact" class="hover:text-interactiveColor">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-secondary sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center">
          © 2024{' '}
          <a href="#" class="hover:underline">
            Mehdi DIAS GOMES™
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
