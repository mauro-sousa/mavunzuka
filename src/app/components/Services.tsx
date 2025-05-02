"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const metrics = [
  {
    id: 1,
    stat: "Segurança Rodoviária",
    ref:"/Services/SegurancaRodoviaria",
    emphasis: "Companies",
    rest: "Fabricação de chapas de matrícula | Películas de segurança para viaturas",
  },
  {
    id: 2,
    stat: "Engenharia e Construção Civil",
    ref:"/Services/Engenharia",
    emphasis: "Countries around the globe",
    rest: "Execução de obras públicas e privadas | Reabilitação e manutenção de infraestruturas urbanas e rurais",
  },
  {
    id: 3,
    stat: "Saúde e Fornecimentos Hospitalares",
    ref:"/Services/FornecimentoHospitalares",
    emphasis: "Customer satisfaction",
    rest: "Importação e distribuição de equipamentos médicos e hospitalares | Fornecimento de consumíveis",
  },
  {
    id: 4,
    stat: "Comércio e Fornecimento Geral",
    ref:"/Services/FornecimentoGeral",
    emphasis: "Issues resolved",
    rest: "Fornecimento de bens e serviços a entidades públicas e privadas | Gestão logística e distribuição",
  },
];

export default function Serve() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="size-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.25 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              alt="People working on laptops"
              src="https://images.pexels.com/photos/12274282/pexels-photo-12274282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="size-full object-cover xl:absolute xl:inset-0"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-base font-light text-blue-800"
          >
            Parceiros Estratégicos
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="mt-3 text-3xl font-bold tracking-tight text-pretty text-white"
          >
            Conheça Nossos Serviços
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="mt-5 text-base/6 text-gray-300"
          >
            Oferecemos um portfólio diversificado de serviços, cuidadosamente
            estruturado para responder às exigências de um mercado dinâmico e em
            constante evolução. Com foco na excelência operacional e na
            personalização de soluções, a empresa atua em múltiplos setores
            estratégicos, com competência técnica e compromisso com a qualidade.
            O nosso objetivo é garantir que cada cliente, seja institucional ou
            privado, encontre em nós um parceiro confiável, inovador e orientado
            para resultados.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2"
          >
            {metrics.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-700/30"
              ><Link href={item.ref}>
                <span className="block text-lg font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-2 block text-base text-gray-300">
                  {item.rest.split('|').map((point, i) => (
                    <span key={i} className="block mt-1">
                      • {point.trim()}
                    </span>
                  ))}
                </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}