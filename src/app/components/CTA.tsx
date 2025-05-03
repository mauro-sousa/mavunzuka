"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
        stiffness: 300 
      } 
    },
    tap: { 
      scale: 0.98 
    }
  };

  return (
    <section className="relative overflow-hidden  py-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl overflow-hidden"
        >
          {/* Clients CTA */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 sm:p-12 text-center relative"
          >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                Pronto para Transformar o Seu Projecto em Realidade?
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-gray-100 mb-8 text-lg"
              >
                Nossa equipa de especialistas está pronta para ajudar a
                materializar sua visão.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="/Contacto"
                  className="inline-flex items-center justify-center px-8 py-2 border-2 border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-blue-900 transition-all duration-300 group"
                >
                  <motion.span
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center"
                  >
                    Fale com um Especialista Hoje
                    <svg
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Careers CTA */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12 text-center relative"
          >
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                Junte-se a Uma Equipa que Molda Angola
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-gray-200 mb-8 text-lg"
              >
                Faça parte de uma empresa que está a construir o futuro do país.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="mailto:geral@mavunzuka.co.ao"
                  className="inline-flex items-center justify-center px-8 py-2 border-2 border-white text-base font-medium- rounded-lg text-gray-900 bg-white hover:bg-transparent hover:text-white transition-all duration-300 group"
                >
                  <motion.span
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center"
                  >
                    Ver Vagas Disponíveis
                    <svg
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;