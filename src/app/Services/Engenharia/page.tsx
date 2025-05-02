"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingOfficeIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Obras Públicas:",
    description:
      "Construção de infraestruturas governamentais com padrões internacionais de qualidade",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Projetos Habitacionais:",
    description:
      "Desenvolvimento de complexos residenciais com foco em sustentabilidade e conforto",
    icon: HomeModernIcon,
  },
  {
    name: "Reabilitação Urbana:",
    description:
      "Restauração de edifícios históricos e modernização de infraestruturas urbanas",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Gestão de Projetos:",
    description:
      "Planejamento completo desde a concepção até a entrega final da obra",
    icon: ClipboardDocumentListIcon,
  },
];

export default function EngenhariaConstrucao() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
        <Image
          alt="Construction"
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Engenharia e Construção Civil
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Excelência na execução de obras públicas e privadas em todo território nacional
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white">
          <div className="text-sm inline-flex items-center space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/Servicos" className="hover:underline">Serviços</Link>
            <span>&gt;</span>
            <span>Engenharia e Construção</span>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Construindo o Futuro de Angola
          </h2>
          <p className="mx-auto mt-6 text-lg text-gray-600">
            Combinamos expertise técnica com inovação para entregar projetos de construção 
            que atendem aos mais altos padrões de qualidade e segurança. Nossa abordagem 
            integrada abrange desde pequenas reformas até grandes empreendimentos 
            infraestruturais, sempre com compromisso com prazos e orçamentos.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Áreas de Atuação</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Soluções Completas em Construção
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nossa Metodologia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Adotamos processos construtivos modernos e tecnologias inovadoras para garantir 
              eficiência, segurança e qualidade em todas as etapas do projeto:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Planejamento</h3>
                <p className="mt-4 text-gray-600">
                  Estudos preliminares detalhados e cronogramas realistas
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Execução</h3>
                <p className="mt-4 text-gray-600">
                  Equipes especializadas e equipamentos modernos
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Controle</h3>
                <p className="mt-4 text-gray-600">
                  Monitoramento constante de qualidade e segurança
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}