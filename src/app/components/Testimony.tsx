"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    body: "A Mavunzuka revolucionou nosso sistema de matrículas veiculares em Luanda. Em 6 meses, reduziram fraudes em 40% com suas chapas de segurança e tecnologia integrada. Parceiros indispensáveis para o MINTRANS.",
    author: {
      name: "Eng. João Baptista",
      handle: "director_mintrans",
      imageUrl:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "Director de Segurança Rodoviária, MINTRANS",
    },
  },
  {
    body: "Como administrador hospitalar, confio nos equipamentos da Mavunzuka há 3 anos. Entregam sempre dentro do prazo, com certificações internacionais que garantem segurança aos nossos pacientes.",
    author: {
      name: "Dra. Teresa Fernandes",
      handle: "draf_fernandes",
      imageUrl:
        "https://images.pexels.com/photos/5668768/pexels-photo-5668768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "Directora Clínica, Hospital Central de Luanda",
    },
  },
  {
    body: "A reabilitação da estrada EN-230 foi concluída 2 meses antes do previsto, com padrões de qualidade superiores. A Mavunzuka é nossa primeira escolha para infraestruturas críticas.",
    author: {
      name: "Arq. Carlos Mendes",
      handle: "carlosmendes_eng",
      imageUrl:
        "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "Gestor de Projectos, Construções Atlântico",
    },
  },
  {
    body: "O sistema de gestão digital que desenvolveram para nossa cadeia de suprimentos economizou 15% nos custos logísticos. Tecnologia adaptada à realidade angolana.",
    author: {
      name: "Sr. Domingos Kiala",
      handle: "kiala_logistics",
      imageUrl:
        "https://images.pexels.com/photos/7648246/pexels-photo-7648246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      role: "CEO, Transportes União Africana",
    },
  },
];

const features = [
  {
    title: "Multissetorialidade com Especialização",
    description: "Oferecemos um leque abrangente de serviços, desde segurança rodoviária a soluções tecnológicas, com equipas especializadas em cada área de atuação."
  },
  {
    title: "Compromisso com Resultados",
    description: "Assumimos cada projeto com seriedade e foco em metas claras, garantindo qualidade, cumprimento de prazos e superação das expectativas dos nossos clientes."
  },
  {
    title: "Capacidade Operacional",
    description: "Estamos equipados com meios técnicos e humanos para atuar em projetos de pequena, média e grande escala, mantendo elevados padrões de eficiência e segurança."
  },
  {
    title: "Parceria e Confiança",
    description: "Construímos relações sólidas com os nossos clientes e parceiros, baseadas em ética, transparência e compromisso mútuo."
  }
];

export default function Example() {
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p 
            variants={itemVariants}
            className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl"
          >
            Por Que Trabalhar Conosco?
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"
        >
          <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.handle}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      width={48}
                      height={48}
                      alt="profile pic"
                      src={testimonial.author.imageUrl}
                      className="size-12 rounded-full object-cover"
                      priority={index < 2} // Prioritize loading first two images
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{testimonial.author.role}</div>
                      <div className="text-blue-600 text-sm mt-1">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.dl 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <dt className="font-semibold text-gray-900 text-lg">
                {feature.title}
              </dt>
              <dd className="mt-3 text-base text-gray-600">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}