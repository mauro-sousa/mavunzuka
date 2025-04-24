"use client";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShieldCheckIcon, ServerIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // Store the token

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any, event: any) => {
    event.preventDefault();
    if (!isVerified || !recaptchaToken) {
      alert(
        "Please verify that you are not a robot. / Verifique se você não é um robô."
      );
      return;
    }
    setIsLoading(true); // Start loading

    const templateParams = {
      fullname: data?.fullname,
      email: data?.email,
      message: data?.message,
      entity: data?.entity,
      phone: data?.phone,
      purpose: data?.purpose,
      "g-recaptcha-response": recaptchaToken, // Include reCAPTCHA token
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_00ommps",
        "template_13wgyoc",
        templateParams,
        "TMoulio-vOzKirP9h"
      )
      .then(
        function (response) {
          setIsLoading(false);
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Inquiry sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
              background: "#16a34a", // green-600
            },
          });
          event.target.reset();
        },
        function (error) {
          setIsLoading(false);
          console.log("FAILED...", error);
          toast.error(
            "Submission failed. Please try again or contact geral@mavunzuka.co.ao",
            {
              position: "top-center",
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              style: {
                background: "#dc2626", // red-600
              },
            }
          );
        }
      );
  };

  const form = useRef<HTMLFormElement>(null);

  return (
    <>
      <div className="relative py-10">
        {/* Full-screen image with dark overlay */}
        <section className="bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/7964494/pexels-photo-7964494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Excelência que Constrói Confiança.
            </h1>
            <p className="mb-8 text-lg text-gray-300 sm:px-16 lg:px-48">
              Entre em contacto com a nossa equipa através dos canais abaixo e
              descubra como podemos colaborar para transformar ideias em
              soluções reais.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="cont"
                className="inline-flex justify-center items-center p-4 text-white rounded-full border border-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 transition-all duration-300 group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("cont")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                aria-label="Scroll to contact form"
              >
                <ArrowDownIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-y-1 animate-bounce outline-0" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact form and details section */}
        <div className="relative py-10" id="cont">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-900" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            {/* left side */}
            <div className="bg-gray-900 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-50 sm:text-3xl">
                  Get in touch
                </h2>
                <h3 className="text-gray-50">
                  A{" "}
                  <span className="font-semibold">Mavunzuka & Filhos LDA</span>{" "}
                  acredita que a proximidade com o cliente é um dos pilares para
                  relações duradouras e de confiança. Estamos à sua disposição
                  para atender solicitações, partilhar informações sobre os
                  nossos serviços, estabelecer parcerias estratégicas e
                  responder a quaisquer dúvidas. A sua mensagem é importante
                  para nós.
                </h3>
                <dl className="mt-8 text-base text-gray-50">
                  <div>
                    <dt className="sr-only">Endereço</dt>
                    <dd>
                      <p>Centralidade do Kilamba, Rua Rio Longa,</p>
                      <p>Ed Z2, Aprt33</p>
                    </dd>
                  </div>
                  <div className="mt-6 text-gray-50">
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <PhoneIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-50"
                      />
                      <span className="ml-3">+(244) 924 072 098</span>
                    </dd>
                  </div>
                  <div className="mt-3">
                    <dt className="sr-only">Email</dt>
                    <dd className="flex">
                      <EnvelopeIcon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-50"
                      />
                      <a className="ml-3" href="mailto:geral@mavunzuka.ao">
                        geral@mavunzuka.ao
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12 shadow-lg">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  ref={form}
                  className="grid grid-cols-1 gap-y-6"
                >
                  {/* Full name */}
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Nome
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      placeholder="Nome"
                      autoComplete="name"
                      {...register("fullname", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-blue-900 focus:ring-blue-900"
                    />
                    {errors.fullname && (
                      <p className="mt-1 text-sm text-red-600">
                        Por favor digite seu nome
                      </p>
                    )}
                  </div>

                  {/* Entity */}
                  <div>
                    <label htmlFor="Entity" className="sr-only">
                      Organização
                    </label>
                    <input
                      id="Entity"
                      type="text"
                      placeholder="Organização"
                      autoComplete="organization"
                      {...register("entity", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-blue-900 focus:ring-blue-900"
                    />
                    {errors.entity && (
                      <p className="mt-1 text-sm text-red-600">
                        Por favor insira sua organização
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="sr-only">
                      E-mail comercial
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="E-mail comercial"
                      autoComplete="email"
                      {...register("email", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-blue-900 focus:ring-blue-900"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        Por favor, insira um endereço de e-mail comercial
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Número de telefone válido"
                      autoComplete="tel"
                      {...register("phone", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-blue-900 focus:ring-blue-900"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        Por favor insira um número de telefone válido
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Detalhes da consulta
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Como podemos o ajudar?"
                      {...register("message", { required: true })}
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-xs focus:border-blue-900 focus:ring-blue-900"
                      defaultValue={""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        Por favor, escreva como podemos o ajudar
                      </p>
                    )}
                  </div>

                  {/* Purpose of Communication */}
                  <div className="mx-0 mb-1 sm:mb-3">
                    <label className="block pb-1 text-xs uppercase tracking-wider text-gray-700">
                      Objetivo da Comunicação *
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        {
                          id: "executive",
                          value: "Consulta Executiva",
                          description:
                            "Discussões estratégicas e consultas de alto nível",
                        },
                        {
                          id: "technical",
                          value: "Consulta Técnica",
                          description:
                            "Especificações de produtos e suporte técnico",
                        },
                        {
                          id: "partnership",
                          value: "Proposta de Parceria",
                          description:
                            "Oportunidades de colaboração empresarial",
                        },
                        {
                          id: "procurement",
                          value: "Consulta de Aquisições",
                          description:
                            "Questões sobre compras e cadeia de suprimentos",
                        },
                      ].map((option) => (
                        <div key={option.id} className="flex items-start">
                          <input
                            id={option.id}
                            type="radio"
                            value={option.value}
                            {...register("purpose", { required: true })}
                            className="h-4 w-4 mt-1 cursor-pointer text-green-600 focus:ring-blue-900"
                          />
                          <label
                            htmlFor={option.id}
                            className="ml-2 text-sm text-gray-700"
                          >
                            <span className="font-medium">{option.value}</span>
                            {/* <p className="text-xs text-gray-500 mt-1">
                              {option.description}
                            </p> */}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.purpose && (
                      <p className="mt-1 text-sm text-red-600">
                        Selecione uma finalidade
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <div>
                    {/* reCAPTCHA component */}
                    <ReCAPTCHA
                      sitekey={"6LfSfSIrAAAAAAmFmTd9v2-rSALduGmWCYEUYBsR"}
                      onChange={(value) => {
                        setVerified(true);
                        setRecaptchaToken(value); // Save the reCAPTCHA token
                      }}
                      className="py-2"
                      data-size="invisible"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`inline-flex justify-center items-center rounded-md border border-transparent px-6 py-2 text-base font-medium text-white shadow-xs focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:outline-none transform transition-all duration-300  active:scale-95 ${
                        isLoading
                          ? "bg-blue-900 cursor-not-allowed"
                          : "bg-gray-900 hover:bg-blue-900"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                    <div className="mt-4 text-xs text-gray-500">
                      <p>
                        🔒 Suas informações são mantidas em sigilo e usadas
                        apenas para responder à sua consulta.
                      </p>
                      {/* Optional: Link to Privacy Policy */}
                      {/* <p className="mt-1">
                      Read our{" "}
                      <Link href="/privacy-policy" className="text-green-600 hover:underline">
      Privacy Policy
    </Link>
                    </p> */}
                    </div>
                  </div>
                  <div className=" flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <ShieldCheckIcon className="h-4 w-4 text-blue-900" />
                      <span>SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ServerIcon className="h-4 w-4 text-blue-900" />
                      <span>AO Data Centers</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
