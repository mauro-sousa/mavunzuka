import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Clients CTA */}
          <div className="bg-blue-950 p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-50 mb-4">
              Pronto para Transformar o Seu Projecto em Realidade?
            </h3>
            <p className="text-gray-50 mb-6">
              Nossa equipa de especialistas está pronta para ajudar a
              materializar sua visão.
            </p>
            <Link
              href="/Contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-blue-50 hover:text-gray-900 transition-colors duration-200"
            >
              Fale com um Especialista Hoje
            </Link>
          </div>

          {/* Careers CTA */}
          <div className="bg-gray-900 p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-50 mb-4">
              Junte-se a Uma Equipa que Molda Angola
            </h3>
            <p className="text-gray-100 mb-6">
              Faça parte de uma empresa que está a construir o futuro do país.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gray-50 hover:bg-blue-900 transition-colors duration-200 hover:text-white"
            >
              Ver Vagas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
