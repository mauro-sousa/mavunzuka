"use client";
import Image from "next/image";
import Link from "next/link";
import {
  BuildingStorefrontIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Materiais para Construção:",
    description:
      "Distribuição de cimento, ferro, tinta e outros materiais essenciais para obras",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Equipamentos Industriais:",
    description:
      "Fornecimento de máquinas, ferramentas e componentes para diversos setores",
    icon: GlobeAltIcon,
  },
  {
    name: "Gestão de Stocks:",
    description:
      "Soluções personalizadas para controle de inventário e reposição automática",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Distribuição Nacional:",
    description:
      "Rede logística cobrindo todo território angolano com entrega rápida",
    icon: TruckIcon,
  },
];

export default function ComercioFornecimento() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-orange-600/70 z-10"></div>
        <Image
          alt="Commerce"
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Comércio e Fornecimento Geral
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Soluções integradas de abastecimento para empresas e instituições
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white">
          <div className="text-sm inline-flex items-center space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/Servicos" className="hover:underline">Serviços</Link>
            <span>&gt;</span>
            <span>Comércio e Fornecimento</span>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Parceiro Confiável em Abastecimento
          </h2>
          <p className="mx-auto mt-6 text-lg text-gray-600">
            Como distribuidor autorizado de diversas marcas internacionais, oferecemos 
            uma ampla gama de produtos e materiais para atender às necessidades de 
            empresas públicas e privadas em Angola, garantindo qualidade, preço 
            competitivo e entrega pontual.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-orange-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">Nossas Soluções</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cadeia de Suprimentos Completa
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
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

      {/* Logistics */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Vantagens Competitivas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Diferenciais que nos destacam no mercado de fornecimento geral:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Rede de Fornecedores</h3>
                <p className="mt-4 text-gray-600">
                  Parcerias com fabricantes globais para melhores condições
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Armazenamento</h3>
                <p className="mt-4 text-gray-600">
                  Centros de distribuição estrategicamente localizados
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Customização</h3>
                <p className="mt-4 text-gray-600">
                  Soluções adaptadas às necessidades específicas de cada cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}