const metrics = [
  {
    id: 1,
    stat: "Segurança Rodoviária",
    emphasis: "Companies",
    rest: "Fabricação de chapas de matrícula | Películas de segurança para viaturas",
  },
  {
    id: 2,
    stat: "Engenharia e Construção Civil",
    emphasis: "Countries around the globe",
    rest: "Execução de obras públicas e privadas | Reabilitação e manutenção de infraestruturas urbanas e rurais",
  },
  {
    id: 3,
    stat: "Saúde e Fornecimentos Hospitalares",
    emphasis: "Customer satisfaction",
    rest: "Importação e distribuição de equipamentos médicos e hospitalares. | Fornecimento de consumíveis",
  },
  {
    id: 4,
    stat: "Comércio e Fornecimento Geral",
    emphasis: "Issues resolved",
    rest: "Fornecimento de bens e serviços a entidades públicas e privadas. | Gestão logística e distribuição",
  },
];

export default function Serve() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="size-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              alt="People working on laptops"
              src="https://images.pexels.com/photos/12274282/pexels-photo-12274282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="size-full object-cover opacity-25 xl:absolute xl:inset-0"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-linear-to-r"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-base font-light text-blue-800">
            Parceiros Estratégicos
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-pretty text-white">
          Conheça Nossos Serviços
          </p>
          <p className="mt-5 text-base/6 text-gray-50">
            Oferecemos um portfólio diversificado de serviços, cuidadosamente
            estruturado para responder às exigências de um mercado dinâmico e em
            constante evolução. Com foco na excelência operacional e na
            personalização de soluções, a empresa atua em múltiplos setores
            estratégicos, com competência técnica e compromisso com a qualidade.
            O nosso objetivo é garantir que cada cliente, seja institucional ou
            privado, encontre em nós um parceiro confiável, inovador e orientado
            para resultados.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-lg font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-50">
                  {/* <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{" "} */}
                  {item.rest}<span className="text-blue-800">...</span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
