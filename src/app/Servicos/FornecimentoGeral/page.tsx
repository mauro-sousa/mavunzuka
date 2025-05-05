"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingStorefrontIcon,
  CubeIcon,
  WrenchIcon,
  TruckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Materiais de Construção",
    description: "Cimento, aço, blocos e outros materiais de alta resistência",
    icon: CubeIcon,
  },
  {
    name: "Ferramentas e Equipamentos",
    description: "Ferramentas manuais e elétricas para diversos setores",
    icon: WrenchIcon,
  },
  {
    name: "Produtos de Escritório",
    description: "Mobiliário, papelaria e equipamentos eletrônicos",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Logística e Entrega",
    description: "Transporte seguro e ágil em todo território nacional",
    icon: TruckIcon,
  },
];

const CTACards = [
  {
    title: "Solicitar Catálogo",
    description: "Receba uma lista atualizada dos nossos produtos comerciais",
    icon: EnvelopeIcon,
    action: "mailto:contacto@mavunzuka.ao",
    color: "bg-yellow-600 hover:bg-yellow-700",
  },
  {
    title: "Fale com um Consultor",
    description: "Saiba mais sobre condições de fornecimento e prazos",
    icon: PhoneIcon,
    action: "tel:+244924072098",
    color: "bg-amber-600 hover:bg-amber-700",
  },
  {
    title: "Localização",
    description: "Centralidade do Kilamba, Rua Rio Longa, Ed Z2, Aprt33",
    icon: MapPinIcon,
    action: "https://maps.app.goo.gl/iYYV3cs6mwGuxb9T8",
    color: "bg-orange-600 hover:bg-orange-700",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export default function ComercioFornecimento() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-yellow-900/70 z-10"></div>
        <Image
          alt="Comércio e Fornecimento Geral"
          src="https://images.pexels.com/photos/2530918/pexels-photo-2530918.jpeg"
          fill
          className="object-cover"
          priority
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Comércio e Fornecimento Geral
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Soluções completas em suprimentos, equipamentos e logística para
            todos os setores
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicos"
              className="px-6 py-3 bg-white text-yellow-900 font-medium rounded-lg hover:bg-gray-100 transition-all"
            >
              Conheça Nossos Produtos
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Solicitar Catálogo
            </motion.a>
          </div>
        </motion.div>
      </div>

      <nav className="bg-gray-100 py-3 px-4">
        <div className="container mx-auto">
          <div className="text-sm inline-flex items-center space-x-2 text-gray-600">
            <Link
              href="/"
              className="hover:text-yellow-700 hover:font-semibold"
            >
              Home
            </Link>
            <span>&gt;</span>
            <Link
              href="/Servicos"
              className="hover:text-yellow-700 hover:font-semibold"
            >
              Serviços
            </Link>
            <span>&gt;</span>
            <span className="text-yellow-700 font-semibold">
              Comércio e Fornecimento Geral
            </span>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row bg-white">
        <main className="w-full lg:w-2/3 p-8 lg:p-12">
          <section id="servicos" className="mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Fornecimento de Produtos Essenciais para Todos os Setores
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="prose max-w-none text-gray-600"
            >
              <p>
                Atuamos com um portfólio diversificado de produtos e
                equipamentos para construção civil, setor empresarial, educação,
                entre outros. Nossas parcerias garantem entrega rápida, preços
                competitivos e qualidade assegurada.
              </p>

              <h3 className="text-xl font-semibold mt-8 text-yellow-900">
                Segmentos Atendidos
              </h3>
              <ul className="list-disc ml-6">
                <li>Empresas públicas e privadas</li>
                <li>Empreiteiras e construtoras</li>
                <li>Escolas e universidades</li>
                <li>Comércio de varejo e atacado</li>
              </ul>
            </motion.div>
          </section>

          <section className="mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Nossos Produtos
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  whileHover={{ y: -5 }}
                  className="bg-yellow-50 p-6 rounded-lg border border-yellow-200"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mb-16 bg-yellow-50 p-8 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Soluções sob Medida
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa estrutura logística e experiência de mercado garantem
                fornecimento seguro e adaptado às necessidades de cada cliente.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-800">300+</p>
                  <p className="text-gray-600">Produtos em Catálogo</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-800">99%</p>
                  <p className="text-gray-600">Clientes Satisfeitos</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-800">72h</p>
                  <p className="text-gray-600">Entrega Média</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <aside className="w-full lg:w-1/3 p-8 lg:p-12 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="sticky top-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Precisa de um Orçamento?
            </h3>

            <div className="space-y-6">
              {CTACards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`${card.color} text-white p-6 rounded-lg shadow-md transition-all`}
                >
                  <div className="flex items-start">
                    <card.icon className="h-6 w-6 text-white mr-3 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">{card.title}</h4>
                      <p className="mt-1 text-white/90">{card.description}</p>
                      <a
                        href={card.action}
                        className="inline-block mt-3 px-4 py-2 bg-white/20 rounded hover:bg-white/30 transition-colors"
                      >
                        Saiba Mais
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">
                Catálogo Completo
              </h4>
              <p className="text-gray-600 mb-4">
                Faça o descarregamento do nosso catálogo de fornecimento geral.
              </p>
              <a href="/Mavunzuka.pdf" target="_blank" download>
                <button className="w-full px-4 py-2 bg-blue-900 text-white rounded hover:bg-gray-900 transition-colors hover:cursor-pointer">
                  Descarregar PDF
                </button>
              </a>
            </div>
          </motion.div>
        </aside>
      </div>

      <section id="contacto" className="bg-yellow-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Pronto para Fornecer com Qualidade?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Oferecemos uma linha completa de suprimentos e suporte logístico
            para impulsionar o seu negócio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div variants={itemVariants}>
              <Link
                href="mailto:contacto@mavunzuka.co.ao"
                className=" bg-white inline-flex items-center font-bold justify-center px-8 py-2 border-2 border-white text-base rounded-lg text-yellow-800 hover:bg-gray-100 transition-all duration-300 group"
              >
                <motion.span
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center"
                >
                  Enviar Mensagem
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                    />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="tel:+244924072098"
                className="inline-flex items-center justify-center px-8 py-2 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-300 group"
              >
                <motion.span
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center"
                >
                  Ligar Agora
                  <svg
                    className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.6a1 1 0 01.95.68l1.4 4.2a1 1 0 01-.26 1.06l-2.2 2.2a16 16 0 006.4 6.4l2.2-2.2a1 1 0 011.06-.26l4.2 1.4a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
                    />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
