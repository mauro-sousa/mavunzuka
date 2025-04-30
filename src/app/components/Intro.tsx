"use client";
import { motion } from "framer-motion";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-6 py-32 sm:px-6 sm:py-32 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl"
          >
            Construindo o Futuro de Angola com Excelência e Inovação
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 text-base/6 text-pretty text-gray-600"
          >
            A{" "}
            <span className="text-blue-900 font-semibold">
              MAVUNZUKA & FILHOS LDA
            </span>{" "}
            destaca-se pela sua abordagem multidisciplinar, integrando
            experiência técnica, compromisso com a qualidade e atenção às
            necessidades específicas de cada cliente. O investimento contínuo na
            formação de quadros nacionais e na modernização de seus processos
            reforça sua missão de promover o progresso social e econômico do
            país.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Contacto"
              className="group inline-flex items-center text-sm font-semibold text-gray-900 transition hover:text-blue-900"
            >
              Fale Connosco
              <motion.span
                className="ml-1 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}