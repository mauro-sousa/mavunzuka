"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheckIcon,
  IdentificationIcon,
  FilmIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fabricação de Chapas:",
    description:
      "Produção de chapas de matrícula em conformidade com os padrões nacionais e internacionais de segurança",
    icon: IdentificationIcon,
  },
  {
    name: "Películas de Segurança:",
    description:
      "Fornecimento e aplicação profissional de películas que melhoram a privacidade e proteção contra estilhaços",
    icon: FilmIcon,
  },
  {
    name: "Consultoria Especializada:",
    description:
      "Análise técnica e recomendações para melhorias nos sistemas de identificação veicular",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Parcerias Institucionais:",
    description:
      "Colaboração com órgãos governamentais para modernização dos sistemas de trânsito",
    icon: ShieldCheckIcon,
  },
];

export default function SegurancaRodoviaria() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
        <Image
          alt="Road Safety"
          src="https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Segurança Rodoviária
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Soluções integradas para identificação veicular e segurança no trânsito
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white">
          <div className="text-sm inline-flex items-center space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/Servicos" className="hover:underline">Serviços</Link>
            <span>&gt;</span>
            <span>Segurança Rodoviária</span>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Soluções Completas para Segurança Viária
          </h2>
          <p className="mx-auto mt-6 text-lg text-gray-600">
            Nossos serviços de segurança rodoviária combinam tecnologia avançada com 
            conformidade regulatória para oferecer soluções abrangentes que protegem 
            motoristas, passageiros e pedestres. Desde a fabricação de chapas de matrícula 
            até sistemas completos de gestão de tráfego, nossa abordagem integrada garante 
            máxima segurança e eficiência.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Nossos Serviços</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tecnologia e Segurança Integradas
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
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

      {/* Additional Info */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Padrões de Qualidade
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Todos os nossos produtos e serviços de segurança rodoviária são desenvolvidos 
              em conformidade com as normas angolanas e internacionais, garantindo durabilidade, 
              visibilidade e resistência às condições climáticas locais.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Certificações</h3>
                <p className="mt-4 text-gray-600">
                  Produtos certificados pelo INACOP e outras entidades reguladoras
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Cobertura Nacional</h3>
                <p className="mt-4 text-gray-600">
                  Serviços disponíveis em todas as províncias de Angola
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Suporte Técnico</h3>
                <p className="mt-4 text-gray-600">
                  Equipe especializada disponível 24/7 para emergências
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}