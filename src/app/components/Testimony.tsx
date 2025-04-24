import Image from "next/image";

const testimonials = [
  {
    body: "A Mavunzuka revolucionou nosso sistema de matrículas veiculares em Luanda. Em 6 meses, reduziram fraudes em 40% com suas chapas de segurança e tecnologia integrada. Parceiros indispensáveis para o MINTRANS.",
    author: {
      name: "Eng. João Baptista",
      handle: "director_mintrans",
      imageUrl:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // (Image: Angolan official in uniform)
      role: "Director de Segurança Rodoviária, MINTRANS",
    },
  },
  {
    body: "Como administrador hospitalar, confio nos equipamentos da Mavunzuka há 3 anos. Entregam sempre dentro do prazo, com certificações internacionais que garantem segurança aos nossos pacientes.",
    author: {
      name: "Dra. Teresa Fernandes",
      handle: "draf_fernandes",
      imageUrl:
        "https://images.pexels.com/photos/5668768/pexels-photo-5668768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // (Image: Female doctor in scrubs)
      role: "Directora Clínica, Hospital Central de Luanda",
    },
  },
  {
    body: "A reabilitação da estrada EN-230 foi concluída 2 meses antes do previsto, com padrões de qualidade superiores. A Mavunzuka é nossa primeira escolha para infraestruturas críticas.",
    author: {
      name: "Arq. Carlos Mendes",
      handle: "carlosmendes_eng",
      imageUrl:
        "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // (Image: Construction manager at site)
      role: "Gestor de Projectos, Construções Atlântico",
    },
  },
  {
    body: "O sistema de gestão digital que desenvolveram para nossa cadeia de suprimentos economizou 15% nos custos logísticos. Tecnologia adaptada à realidade angolana.",
    author: {
      name: "Sr. Domingos Kiala",
      handle: "kiala_logistics",
      imageUrl:
        "https://images.pexels.com/photos/7648246/pexels-photo-7648246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // (Image: Suit-clad executive)
      role: "CEO, Transportes União Africana",
    },
  },
];

export default function Example() {
  return (
    <div className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-base/7 font-semibold text-indigo-600">Testimonials</h2> */}
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Por Que Trabalhar Conosco?
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                    width={500}
                    height={500}
                      alt="profile pic"
                      property="fit"
                      src={testimonial.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div className="hover:bg-gray-50 p-2 rounded-md">
            <dt className="font-semibold text-gray-900">
              Multissetorialidade com Especialização
            </dt>
            <dd className="mt-1 text-gray-600">
              Oferecemos um leque abrangente de serviços, desde segurança
              rodoviária a soluções tecnológicas, com equipas especializadas em
              cada área de atuação.
            </dd>
          </div>

          <div className="hover:bg-gray-50 p-2 rounded-md">
            <dt className="font-semibold text-gray-900">
              Compromisso com Resultados
            </dt>
            <dd className="mt-1 text-gray-600">
              Assumimos cada projeto com seriedade e foco em metas claras,
              garantindo qualidade, cumprimento de prazos e superação das
              expectativas dos nossos clientes.
            </dd>
          </div>

          <div className="hover:bg-gray-50 p-2 rounded-md">
            <dt className="font-semibold text-gray-900">
              Capacidade Operacional
            </dt>
            <dd className="mt-1 text-gray-600">
              Estamos equipados com meios técnicos e humanos para atuar em
              projetos de pequena, média e grande escala, mantendo elevados
              padrões de eficiência e segurança.
            </dd>
          </div>

          <div className="hover:bg-gray-50 p-2 rounded-md">
            <dt className="font-semibold text-gray-900">
              Parceria e Confiança
            </dt>
            <dd className="mt-1 text-gray-600">
              Construímos relações sólidas com os nossos clientes e parceiros,
              baseadas em ética, transparência e compromisso mútuo.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
