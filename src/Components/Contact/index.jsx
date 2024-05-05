import React, { useRef } from 'react'
import Fade from 'react-reveal/Fade'
import { Toaster, toast } from 'sonner'
import emailjs from '@emailjs/browser'

export default function Index() {
  const form = useRef()
  const sendEmail = e => {
    e.preventDefault()

    const email = form.current.mail.value
    const nom = form.current.nom.value
    const message = form.current.message.value

    console.log(email, message)

    if (!email || !message || !nom) {
      toast.error('Veuillez renseigner les champs obligatoires !')
      return
    } else {
      toast.success('Votre message a bien été envoyé.')
    }

    emailjs
      .sendForm('service_t9lxowk', 'template_jxzugmp', form.current, {
        publicKey: 'irlDoLoAtQUldFyRJ',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )
  }

  const handleInputChange = e => {
    e.target.value = e.target.value.toUpperCase()
  }

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
            <form
              ref={form}
              action="#"
              className="space-y-8"
              onSubmit={sendEmail}>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary">
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  onInput={handleInputChange}
                  className="shadow-sm bg-[#1E293B] text-primary text-sm rounded-lg focus:ring-primary-500 focus:-primary-500 block w-full p-2.5"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary">
                  Adresse mail
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  className="shadow-sm bg-[#1E293B] text-primary text-sm rounded-lg focus:ring-primary-500 focus:-primary-500 block w-full p-2.5"
                  placeholder="votre@mail.com"
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
                  className="block p-3 w-full text-sm text-primary bg-[#1E293B] rounded-lg   shadow-sm focus:ring-primary-500 focus:-primary-500"
                  placeholder="Dites-moi comment je peux vous aider"
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
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-primary bg-[#1E293B] rounded-lg shadow-sm   focus:ring-primary-500 focus:-primary-500"
                  placeholder="Laissez un commentaire..."></textarea>
              </div>
              <Toaster />
              <button
                type="submit"
                onClick={sendEmail}
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0EA5E9] sm:w-fit duration-200 hover:bg-[#0ea4e9a4]">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </Fade>
    </div>
  )
}
