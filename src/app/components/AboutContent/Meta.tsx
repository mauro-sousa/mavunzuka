"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-6 pb-20 px-6">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-10">
          
          {/* Clients CTA */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10"
          >
            <Image
              src={"/strategy.gif"}
              height={242}
              width={232}
              className="h-25 w-auto"
              alt="Board with strategy"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Objetivos Estratégicos
            </h3>
            <ul className="text-gray-700 mb-6 list-disc pl-5">
              <li>Consolidar-se como referência no setor da segurança rodoviária.</li>
              <li>Expandir serviços nas áreas de construção, tecnologia e saúde.</li>
              <li>
                Promover a digitalização dos processos internos e das plataformas de atendimento ao cliente.
              </li>
              <li>
                Fortalecer a marca por meio da excelência operacional e inovação constante.
              </li>
            </ul>
            <Link
              href="/Contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-blue-900 hover:text-gray-50 transition-colors duration-200"
            >
              Fale com um Especialista Hoje
            </Link>
          </motion.div>

          {/* Careers CTA */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10"
          >
            <Image
              src={"/goals.gif"}
              height={242}
              width={232}
              className="h-25 w-auto"
              alt="bulls eye"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Metas</h3>
            <ul className="text-gray-700 mb-6 list-disc pl-5">
              <li>Elevar a satisfação do cliente através de serviços personalizados.</li>
              <li>Otimizar os custos operacionais com foco em sustentabilidade.</li>
              <li>Aumentar a rentabilidade com foco em inovação e diferenciação.</li>
              <li>Desenvolver competências técnicas e humanas da equipa.</li>
              <li>Fortalecer a presença digital e institucional da marca.</li>
            </ul>
            <Link
              href="/Servicos"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-50 bg-blue-900 hover:bg-gray-900 transition-colors duration-200 hover:text-white"
            >
              Explore nossos serviços
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;