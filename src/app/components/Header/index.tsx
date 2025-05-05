"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  // PhoneIcon,
  // PlayCircleIcon,
  // RectangleGroupIcon
} from "@heroicons/react/20/solid";

const products = [
  {
    title: "Segurança Rodoviária",
    desc: "Soluções integradas para identificação veicular, sinalização e segurança no trânsito.",
    link: "/Servicos/SegurancaRodoviaria",
    icon: "🛣️",
  },
  {
    title: "Engenharia & Construção Civil",
    desc: "Execução de obras e gestão técnica de projetos públicos e privados, com foco em qualidade e eficiência.",
    link: "/Servicos/Engenharia",
    icon: "🏗️",
  },
  {
    title: "Saúde & Fornecimentos Hospitalares",
    desc: "Distribuição de equipamentos médicos e hospitalares, com foco em qualidade assistencial e normas internacionais.",
    link: "/Servicos/FornecimentoHospitalares",
    icon: "🏥",
  },
  {
    title: "Comércio & Fornecimento Geral",
    desc: "Abastecimento estratégico de bens e materiais para obras, indústrias e entidades em todo o território nacional.",
    link: "/Servicos/FornecimentoGeral",
    icon: "📦",
  },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick = () => {} }) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative text-sm font-medium text-gray-900 group transition-colors duration-200 hover:text-blue-800"
  >
    <span className="relative z-10 py-2">{children}</span>
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full" />
  </Link>
);

const ContactLink = ({ onClick = () => {}, mobile = false }) => (
  <Link
    href="/Contacto"
    onClick={onClick}
    className={`relative group flex items-center gap-1 ${
      mobile ? "text-base" : "text-sm"
    } font-medium text-gray-900 hover:text-blue-800`}
  >
    <span className="relative z-10">Contate-nos</span>
    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
      →
    </span>
    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:w-full" />
  </Link>
);


// const callsToAction = [
//   { title: 'Watch demo', link: '#', icon: PlayCircleIcon },
//   { title: 'Contact sales', link: '#', icon: PhoneIcon },
//   { title: 'View all products', link: '#', icon: RectangleGroupIcon },
// ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm" // Glass-like effect when scrolled
          : "bg-white" // Solid background when not scrolled
      } transition-all duration-300`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={"/Primary.svg"}
              height={200}
              width={200}
              alt="Logo Image"
              className="object-center h-auto w-13"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>{" "}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-10">
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-auto">
            <Link
              href="/Empresa"
              className="relative inline-block text-sm font-semibold text-gray-900 group hover:bg-gray-100 rounded-md py-1 px-2 transition-all duration-300 delay-75"
            >
              <span className="relative z-10">Quem Somos</span>
              {/* <span className="absolute left-0 bottom-0 h-1 w-0 bg-blue-900 transition-all duration-300 group-hover:w-full" /> */}
            </Link>
            <Popover>
              <PopoverButton className="relative flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 group outline-none hover:bg-gray-100 rounded-md py-1 px-2 transition-all duration-300 delay-75">
                <span className="relative z-10">Serviços</span>
                {/* <span className="absolute left-0 bottom-0 h-1 w-0 bg-blue-900 transition-all duration-300 group-hover:w-full" /> */}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute inset-x-0 top-0 -z-10 bg-white pt-8 ring-1 shadow-lg ring-gray-900/5 transition data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className="group -m-3 flex items-start rounded-lg p-4 transition-colors hover:bg-gray-50/80"
                    >
                      <span className="text-2xl flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 p-2">
                        {item.icon}
                      </span>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          <Link
            href="/Contacto"
            className="text-sm/6 font-semibold text-gray-900 relative group hover:bg-gray-100 rounded-md py-1 px-3 transition-all duration-300 delay-75"
          >
            <span className="relative z-10">Contate-nos</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            >
              →
            </span>
            {/* <span className="absolute left-0 bottom-0 h-1 w-0 bg-blue-900 transition-all duration-300 group-hover:w-full" /> */}
          </Link>
        </div>
      </nav>


      {/* Mobile menu */}
      <Transition show={mobileMenuOpen}>
        <Dialog
          as="div"
          onClose={setMobileMenuOpen}
          className="lg:hidden"
          static
        >
          <TransitionChild
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/Primary.svg"
                    height={40}
                    width={160}
                    alt="Company Logo"
                    className="h-auto w-1"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md mt-8 p-2.5 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="size-6" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-4 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50/80">
                            <span>Serviços</span>
                            <ChevronDownIcon
                              className={`size-5 flex-none transition-transform ${
                                open ? "rotate-180" : ""
                              }`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2 pl-4">
                            {products.map((item) => (
                              <Link
                                key={item.title}
                                href={item.link}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50/80"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-lg">{item.icon}</span>
                                  <div>
                                    <div>{item.title}</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      {item.desc}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <NavLink
                      href="/Empresa"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Quem Somos
                    </NavLink>
                  </div>

                  <div className="py-6">
                    <ContactLink
                      onClick={() => setMobileMenuOpen(false)}
                      mobile={true}
                    />
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  );
}
