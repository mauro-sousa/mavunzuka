"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Services from "./components/Services";
import Intro from "./components/Intro";
import Testimony from "./components/Testimony";
import CTA from "./components/CTA";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Segurança Rodoviária",
    text: "Especialistas no fabrico e aplicação de chapas de matrícula, películas de segurança e modernização do sistema de identificação veicular em parceria com entidades públicas.",
    image:
      "https://images.pexels.com/photos/12274282/pexels-photo-12274282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Comércio e Fornecimento Geral",
    text: "Abastecimento estratégico de bens e equipamentos industriais, com logística eficiente e cobertura nacional para o setor público e privado.",
    image:
      "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Por Que Trabalhar Connosco",
    text: "Assumimos cada projeto com seriedade, entregamos resultados com eficiência e cultivamos relações baseadas em confiança, ética e excelência técnica. Somos parceiros estratégicos para soluções de impacto real.",
    image:
      "https://images.pexels.com/photos/9870144/pexels-photo-9870144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6"
            >
              <div className="mx-auto max-w-lg lg:mx-0">
                {/* <img alt="Logo" src={slide.logo} className="h-11" /> */}
                <h1 className="mt-24 text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-8 text-lg text-gray-600 sm:text-lg/6">
                  {slide.text}
                </p>

                {/* CTA */}
                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6">
                  <Link
                    href="/Contacto"
                    className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  >
                    <PhoneIcon className="h-5 w-5 text-white" />
                    Fale Connosco
                  </Link>
                  <Link
                    href="/servicos"
                    className="group inline-flex items-center text-sm font-semibold text-gray-900 transition hover:text-blue-900"
                  >
                    Conheça os Nossos Serviços
                    <span
                      className="ml-1 inline-block transform transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${slide.id}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
            >
              <Image
                alt="Homepage"
                src={slide.image}
                width={900}
                height={900}
                className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Intro />
      <Services />
      <Testimony />
      <CTA />
    </>
  );
}
