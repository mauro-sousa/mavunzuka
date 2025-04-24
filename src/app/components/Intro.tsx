export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-6 py-42 sm:px-6 sm:py-42 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Construindo o Futuro de Angola com Excelência e Inovação
          </h2>
          <p className="mx-auto mt-6 text-base/6 text-pretty text-gray-600">
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
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contacto"
              className="group inline-flex items-center text-sm font-semibold text-gray-900 transition hover:text-blue-900"
            >
              Fale Connosco
              <span
                className="ml-1 inline-block transform transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
