import React, { useRef } from 'react'
import Fade from 'react-reveal/Fade'
import { Toaster, toast } from 'sonner'
import emailjs from '@emailjs/browser'
import Social from '../../Components/Social'
import { LienConst } from '../../Constants'

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
        <div className="flex flex-col gap-32 w-full">
          <div>
            <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-center text-primary">
              Contactez-moi
            </h2>
            <p className="font-light text-center text-secondary sm:text-xl">
              Une question ? Un projet ? N'hésitez pas à me contacter !
            </p>
          </div>
          <div className="flex md:justify-between md:flex-row sm:flex-col sm:px-10 md:px-0">
            <section className="flex flex-col gap-14 w-[9/12]">
              <h3 className="text-3xl text-white font-medium">
                Une question ? Un projet ? N'hésitez pas à me{' '}
                <span className="text-PrimaryText">contacter</span> !
              </h3>
              <div className="flex flex-col items-start gap-10">
                <div className="flex flex-col items-start gap-3">
                  <a
                    className="flex items-center gap-5 text-[1.2rem] text-white"
                    href="mailto:diasgomes.mehdicours@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-mail text-PrimaryText">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    diasgomes.mehdicours@gmail.com
                  </a>
                  <a
                    className="flex items-center gap-5 text-[1.2rem] text-white"
                    href="tel:+33789626927">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-phone text-PrimaryText">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    +33 7 89 62 69 27
                  </a>
                  <div className="flex gap-3 my-10">
                    {LienConst.map((e, index) => (
                      <Social key={index} lien={e.lien} icon={e.icon} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full">
              <div className="">
                <form
                  ref={form}
                  action="#"
                  className="space-y-8"
                  onSubmit={sendEmail}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary">
                      Nom*
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      onInput={handleInputChange}
                      className="shadow-sm bg-[#1e1e1e] text-primary text-sm border-2 border-secondary rounded-lg focus:ring-primary-500 focus:-primary-500 block w-full p-2.5"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary">
                      Adresse mail*
                    </label>
                    <input
                      type="email"
                      id="mail"
                      name="mail"
                      className="shadow-sm bg-[#1e1e1e] border-2 border-secondary text-primary text-sm rounded-lg focus:ring-primary-500 focus:-primary-500 block w-full p-2.5"
                      placeholder="votre@mail.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-primary">
                      Objet*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm border-2 border-secondary text-primary bg-[#1e1e1e] rounded-lg   shadow-sm focus:ring-primary-500 focus:-primary-500"
                      placeholder="Objet"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-primary">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm border-2 border-secondary text-primary bg-[#1e1e1e] rounded-lg shadow-sm   focus:ring-primary-500 focus:-primary-500"
                      placeholder="Votre message"></textarea>
                  </div>
                  <Toaster />
                  <button
                    type="submit"
                    onClick={sendEmail}
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0EA5E9] w-full duration-200 hover:bg-[#0ea4e9a4]">
                    Envoyer
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </Fade>
    </div>
  )
}
