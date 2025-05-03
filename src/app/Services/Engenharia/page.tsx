"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Execução de Obras",
    description: "Construção de edifícios administrativos, habitações e infraestruturas diversas",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Reabilitação e Manutenção",
    description: "Serviços de reabilitação urbana e rural com foco na durabilidade e estética",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Gestão de Projetos",
    description: "Coordenação técnica e estratégica para garantir prazos, custos e qualidade",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Fiscalização Técnica",
    description: "Supervisão e apoio técnico a empreendimentos de engenharia civil",
    icon: ShieldCheckIcon,
  },
];

const CTACards = [
  {
    title: "Solicite Orçamento",
    description: "Receba uma proposta personalizada para suas necessidades",
    icon: EnvelopeIcon,
    action: "mailto:contacto@mavunzuka.ao",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Fale com Especialista",
    description: "Converse diretamente com nosso time técnico",
    icon: PhoneIcon,
    action: "tel:+244924072098",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Visite Nossa Sede",
    description: "Centralidade do Kilamba, Rua Rio Longa, Ed Z2, Aprt33",
    icon: MapPinIcon,
    action: "https://maps.google.com",
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

export default function EngenhariaConstrucao() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
        <Image
          alt="Engenharia e Construção"
          src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg"
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
            Engenharia e Construção Civil
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Soluções completas em obras, reabilitação e gestão técnica de empreendimentos
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicos"
              className="px-6 py-3 bg-white text-blue-950 font-medium rounded-lg hover:bg-gray-100 transition-all"
            >
              Conheça Nossos Serviços
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              Fale Conosco
            </motion.a>
          </div>
        </motion.div>
      </div>

      <nav className="bg-gray-100 py-3 px-4">
        <div className="container mx-auto">
          <div className="text-sm inline-flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-blue-900 hover:font-semibold">Home</Link>
            <span>&gt;</span>
            <Link href="/servicos" className="hover:text-blue-900 hover:font-semibold">Serviços</Link>
            <span>&gt;</span>
            <span className="text-blue-900 font-semibold">Engenharia e Construção Civil</span>
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
              Competência Técnica para Grandes Obras
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="prose max-w-none text-gray-600"
            >
              <p>
                Atuamos com excelência na execução de obras públicas e privadas, oferecendo 
                soluções completas para construção, reabilitação e gestão de empreendimentos. 
                Nosso compromisso é garantir qualidade, segurança e cumprimento rigoroso de prazos.
              </p>

              <h3 className="text-xl font-semibold mt-8 text-blue-900">Nossos Diferenciais</h3>
              <p>
                Integrando engenharia, fiscalização e gestão técnica, entregamos projetos que 
                impactam positivamente o ambiente urbano e rural. Trabalhamos com foco na 
                sustentabilidade e inovação, em parceria com órgãos públicos e privados.
              </p>
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
              Nossos Serviços Especializados
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="mb-16 bg-blue-50 p-8 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Confiança que Constrói</h3>
              <p className="text-gray-600 mb-6">
                Com dezenas de projetos entregues com sucesso, somos referência em 
                engenharia civil moderna e responsável.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">20+</p>
                  <p className="text-gray-600">Projetos Finalizados</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">100%</p>
                  <p className="text-gray-600">Satisfação Garantida</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">24h</p>
                  <p className="text-gray-600">Suporte Técnico</p>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Como Podemos Ajudar?</h3>

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
              <h4 className="font-semibold text-gray-900 mb-3">Materiais Informativos</h4>
              <p className="text-gray-600 mb-4">
                Baixe nosso catálogo completo de serviços em engenharia e construção.
              </p>
              <button className="w-full px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
                Download Brochura (PDF)
              </button>
            </div>
          </motion.div>
        </aside>
      </div>

      <section id="contato" className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Pronto para Construir com Excelência?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Nossa equipe está pronta para realizar seu projeto com eficiência, qualidade e responsabilidade técnica.
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
                className=" bg-white inline-flex items-center font-bold justify-center px-8 py-2 border-2 border-white text-base rounded-lg text-blue-950 hover:bg-gray-100 transition-all duration-300 group"
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