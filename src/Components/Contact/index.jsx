import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Index() {
  return (
    <div id="contact">
      <Fade>
        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary">
              Contactez-moi
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-secondary sm:text-xl">
              Une question ? Un projet ? N'hésitez pas à me contacter !
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-primary">
                  Adresse mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-[#1e1e1e] border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="votre@mail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-primary">
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-primary bg-[#1e1e1e] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Dites-moi comment je peux vous aider"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-primary bg-[#1e1e1e] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Laissez un commentaire..."></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#7C3AED] sm:w-fit duration-200 hover:bg-[#7c3aede3] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </Fade>
    </div>
  )
}
