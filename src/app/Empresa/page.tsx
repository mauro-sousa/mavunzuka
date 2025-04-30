"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import MissionMain from "../components/AboutContent/MissionCore";
import Meta from "../components/AboutContent/Meta";

export default function Contact() {
  return (
    <div className="relative py-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/7964494/pexels-photo-7964494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-gray-700 bg-blend-multiply"
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
          >
            Quem Somos?
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 text-lg text-gray-300 sm:px-16 lg:px-48"
          >
            Consolidamos-nos como um Agente de Transformação, Alicerçado em
            Competência Técnica, Integridade e Visão Estratégica...
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#About"
              className="inline-flex justify-center items-center p-4 text-white rounded-full border border-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 transition-all duration-300 group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("About")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-label="Scroll to contact form"
            >
              <ArrowDownIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-y-1 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="About"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="overflow-hidden bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:max-w-none lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-12"
            >
              <header className="lg:max-w-lg">
                <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Quem Somos?
                </h3>
                <h2 className="text-sm font-medium text-blue-800 uppercase tracking-wide">
                  Comprometidos a Prestar Serviços Premium
                </h2>
              </header>

              <div className="mt-6 space-y-6 text-gray-700">
                <p>
                  Somos uma empresa angolana de direito privado que atua nos
                  setores de trânsito e segurança rodoviária, engenharia,
                  construção civil, tecnologias aplicadas, saúde e fornecimentos
                  diversos. Fundada com o propósito de atender às crescentes
                  demandas do mercado nacional, a empresa posiciona-se como uma
                  parceira estratégica para o desenvolvimento de soluções
                  inovadoras, eficazes e sustentáveis.
                </p>
                <p className="text-gray-600">
                  A Mavunzuka destaca-se pela sua abordagem multidisciplinar,
                  integrando experiência técnica, compromisso com a qualidade e
                  atenção às necessidades específicas de cada cliente. O
                  investimento contínuo na formação de quadros nacionais e na
                  modernização de seus processos reforça sua missão de promover
                  o progresso social e econômico do país.
                </p>
              </div>

              <Link
                href="/Contacto"
                className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-5 py-3 mt-8 text-sm font-semibold text-white shadow-md transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                Fale Connosco
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-80 sm:h-96 md:h-[32rem] lg:h-[36rem]"
            >
              <Image
                src="https://images.pexels.com/photos/18451252/pexels-photo-18451252/free-photo-of-monument-in-x-shape-in-luanda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Monumento em forma de X em Luanda"
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Meta />
      <MissionMain />
    </div>
  );
}
