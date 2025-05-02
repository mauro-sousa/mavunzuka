"use client";
import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  BeakerIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Equipamentos Médicos:",
    description:
      "Fornecimento de aparelhos de diagnóstico por imagem, monitorização e terapia intensiva",
    icon: HeartIcon,
  },
  {
    name: "Mobiliário Hospitalar:",
    description:
      "Leitos hospitalares ergonômicos, mesas cirúrgicas e mobiliário especializado",
    icon: BeakerIcon,
  },
  {
    name: "Logística Integrada:",
    description:
      "Rede de distribuição nacional com controle de temperatura para produtos sensíveis",
    icon: TruckIcon,
  },
  {
    name: "Certificação e Qualidade:",
    description:
      "Todos os produtos atendem às normas ANIP e regulamentações internacionais",
    icon: ShieldCheckIcon,
  },
];

export default function SaudeHospitalar() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-green-800/70 z-10"></div>
        <Image
          alt="Healthcare"
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
            Saúde e Fornecimentos Hospitalares
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-3xl">
            Soluções completas para o setor de saúde com equipamentos de qualidade internacional
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white">
          <div className="text-sm inline-flex items-center space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/Servicos" className="hover:underline">Serviços</Link>
            <span>&gt;</span>
            <span>Saúde Hospitalar</span>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Excelência em Equipamentos Médicos
          </h2>
          <p className="mx-auto mt-6 text-lg text-gray-600">
            Como parceiro estratégico do setor de saúde em Angola, fornecemos equipamentos 
            hospitalares, mobiliário clínico e consumíveis médicos de alta qualidade, 
            contribuindo para a melhoria contínua dos serviços de saúde no país.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-green-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Nossos Produtos</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tecnologia Médica de Ponta
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
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

      {/* Quality Assurance */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Garantia de Qualidade
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Todos os nossos produtos hospitalares passam por rigorosos controles de qualidade:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Certificação</h3>
                <p className="mt-4 text-gray-600">
                  Produtos com certificados CE, FDA e outras normas internacionais
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Treinamento</h3>
                <p className="mt-4 text-gray-600">
                  Capacitação técnica para equipes médicas e de manutenção
                </p>
              </div>
              <div className="flex flex-col rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">Assistência</h3>
                <p className="mt-4 text-gray-600">
                  Suporte técnico especializado e manutenção preventiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}