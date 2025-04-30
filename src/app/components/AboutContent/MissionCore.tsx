"use client";

import {
  ArrowPathIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const features = [
  {
    name: "Multissetorialidade com Especialização",
    description:
      "Oferecemos um leque abrangente de serviços, desde segurança rodoviária a soluções tecnológicas, com equipas especializadas em cada área de atuação.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Compromisso com Resultados",
    description:
      "Assumimos cada projeto com seriedade e foco em metas claras, garantindo qualidade, cumprimento de prazos e superação das expectativas dos nossos clientes.",
    icon: ArrowPathIcon,
  },
  {
    name: "Capacidade Operacional",
    description:
      "Estamos equipados com meios técnicos e humanos para atuar em projetos de pequena, média e grande escala, mantendo elevados padrões de eficiência e segurança.",
    icon: LockClosedIcon,
  },
  {
    name: "Desenvolvimento Humano",
    description:
      "Construímos relações sólidas com os nossos clientes e parceiros, baseadas em ética, transparência e compromisso mútuo.",
    icon: AcademicCapIcon,
  },
];

export default function Example() {
  return (
    <>
      {/* Mission */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center p-4 pb-10"
      >
        <div className="mx-auto max-w-3xl lg:mx-0 text-center">
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl">
            A Nossa Missão
          </h2>
          <p className="mt-6 text-base/7 text-gray-800">
            Prestar serviços de excelência e alta qualidade nas áreas de
            aplicação de chapas de matrícula, películas automotivas, engenharia,
            construção civil, tecnologias aplicadas e fornecimentos diversos,
            assegurando a formação contínua dos seus profissionais e a superação
            das expectativas dos clientes.
          </p>
        </div>
      </motion.div>

      {/* Core Values */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="mx-auto max-w-4xl lg:mx-0 text-center">
              <h2 className="text-base/7 font-medium text-blue-700">
                Valores que Nos Define
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Por que Trabalhar Conosco
              </p>
              <p className="mt-6 text-base/7 text-gray-300">
                Na Mavunzuka & Filhos LDA, oferecemos mais do que serviços —
                entregamos soluções com qualidade, compromisso e visão de
                futuro. Atuamos como parceiros estratégicos dos nossos clientes,
                com uma equipa multidisciplinar, foco em resultados e uma
                abordagem orientada para a inovação, a eficiência e a
                excelência.
              </p>
            </div>
          </motion.div>

          {/* Feature Items with staggered motion */}
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-9"
              >
                <dt className="inline font-semibold text-white">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-blue-700"
                  />
                  {feature.name}
                  <br />
                </dt>
                <dd className="inline">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}