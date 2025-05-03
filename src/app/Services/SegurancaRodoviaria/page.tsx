"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheckIcon,
  IdentificationIcon,
  FilmIcon,
  ClipboardDocumentCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Fabricação de Chapas",
    description: "Produção de chapas de matrícula normalizadas conforme regulamentações nacionais",
    icon: IdentificationIcon,
  },
  {
    name: "Películas de Segurança",
    description: "Fornecimento e aplicação profissional de películas automotivas de alta qualidade",
    icon: FilmIcon,
  },
  {
    name: "Consultoria Técnica",
    description: "Análise e recomendações para melhorias nos sistemas de trânsito",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Parcerias Institucionais",
    description: "Colaboração com órgãos governamentais para modernização viária",
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

export default function SegurancaRodoviaria() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Flexible Height */}
      <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
        <Image
          alt="Road Safety"
          src="https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg"
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
            Segurança Rodoviária
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Soluções integradas para identificação veicular e segurança no trânsito
          </p>
          
          {/* Flexible CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicos"
              className="px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-all"
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

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3 px-4">
        <div className="container mx-auto">
          <div className="text-sm inline-flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>&gt;</span>
            <Link href="/servicos" className="hover:text-blue-600">Serviços</Link>
            <span>&gt;</span>
            <span className="text-blue-600">Segurança Rodoviária</span>
          </div>
        </div>
      </nav>

      {/* Flexible Content Sections */}
      <div className="flex flex-col lg:flex-row bg-white">
        {/* Main Content - Can adjust width as needed */}
        <main className="w-full lg:w-2/3 p-8 lg:p-12">
          {/* Overview Section */}
          <section id="servicos" className="mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Soluções Completas para Segurança Viária
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="prose max-w-none text-gray-600"
            >
              <p>
                Nossos serviços de segurança rodoviária combinam tecnologia avançada com 
                conformidade regulatória para oferecer soluções abrangentes que protegem 
                motoristas, passageiros e pedestres. Desde a fabricação de chapas de matrícula 
                até sistemas completos de gestão de tráfego, nossa abordagem integrada garante 
                máxima segurança e eficiência.
              </p>
              
              <h3 className="text-xl font-semibold mt-8">Nossa Abordagem</h3>
              <p>
                Trabalhamos com órgãos governamentais e empresas privadas para desenvolver 
                soluções personalizadas que atendam às necessidades específicas de cada cliente, 
                sempre com foco na qualidade e conformidade com as regulamentações angolanas.
              </p>
            </motion.div>
          </section>

          {/* Features Section - Can be grid or stacked layout */}
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
                      <feature.icon className="h-6 w-6 text-blue-600" />
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

          {/* Testimonial/Stats Section - Optional */}
          <section className="mb-16 bg-blue-50 p-8 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impacto Positivo</h3>
              <p className="text-gray-600 mb-6">
                Nossas soluções já contribuíram para redução de 40% em fraudes de matrículas
                e aumento de 30% na eficiência da fiscalização em projetos implementados.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">100%</p>
                  <p className="text-gray-600">Conformidade Regulatória</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">24h</p>
                  <p className="text-gray-600">Suporte Técnico</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600">18+</p>
                  <p className="text-gray-600">Municípios Atendidos</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Sidebar/Aside - Can be repositioned or made sticky */}
        <aside className="w-full lg:w-1/3 p-8 lg:p-12 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="sticky top-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Como Podemos Ajudar?</h3>
            
            {/* Flexible CTA Cards */}
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

            {/* Download Brochure - Optional */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Materiais Informativos</h4>
              <p className="text-gray-600 mb-4">
                Baixe nosso catálogo completo de soluções para segurança rodoviária.
              </p>
              <button className="w-full px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">
                Download Brochura (PDF)
              </button>
            </div>
          </motion.div>
        </aside>
      </div>

      {/* Full-width CTA Section */}
      <section id="contato" className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Pronto para Melhorar a Segurança Rodoviária?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Nossa equipe está pronta para discutir suas necessidades e propor soluções personalizadas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:contacto@mavunzuka.ao"
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              Enviar Mensagem
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+244924072098"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              Ligar Agora
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}