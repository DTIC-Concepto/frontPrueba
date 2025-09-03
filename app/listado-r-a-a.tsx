"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ListadoRAA: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/crear-r-a-a");
  }, [router]);

  const onTrash2IconClick = useCallback(() => {
    // Please sync "Confirmar Eliminación RAA" to the project
  }, []);

  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white h-[973px] overflow-hidden text-left text-sm text-gray-300 font-inter">
      <div className="absolute top-[64px] left-[0px] bg-white border-gainsboro border-solid border-[1px] box-border w-64 h-[857px] text-dimgray">
        <div className="absolute top-[1px] left-[1px] bg-gray-500 w-[254px] h-[855px] overflow-hidden">
          <div className="absolute top-[8px] left-[8px] bg-gray-500 w-[238px] h-40">
            <div className="absolute top-[120px] left-[0px] rounded-md bg-gray-500 w-[238px] h-10 overflow-hidden">
              <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                Ajustes
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-500 w-[238px] h-10 overflow-hidden">
              <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                Materias
              </div>
            </div>
            <div className="absolute top-[40px] left-[0px] rounded-md bg-whitesmoke w-[238px] h-10 overflow-hidden text-gray-200">
              <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                RAA
              </div>
            </div>
            <div className="absolute top-[80px] left-[0px] rounded-md bg-gray-500 w-[238px] h-10 overflow-hidden">
              <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                PEA
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[64px] left-[256px] bg-gray-100 w-[1184px] h-[857px] overflow-hidden">
        <b className="absolute top-[30px] left-[32px] text-4xl leading-10">
          Gestión de RAAs
        </b>
        <div className="absolute top-[96px] left-[32px] rounded-[10px] bg-white border-gainsboro border-solid border-[1px] box-border w-[1120px] h-[74px]">
          <div className="absolute top-[16.5px] left-[16.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[200px] h-10">
            <div className="absolute top-[calc(50%_-_12.5px)] left-[12px] leading-[22px]">
              Todas las Materias
            </div>
            <Image
              className="absolute top-[calc(50%_-_7.5px)] right-[11px] w-4 h-4"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/Chevron-down.svg"
            />
          </div>
          <div className="absolute top-[16.5px] left-[232.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-96 h-10 text-dimgray">
            <div className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px]">
              Buscar por código o nombre...
            </div>
          </div>
          <div className="absolute top-[16.5px] left-[632.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[150px] h-10">
            <div className="absolute top-[calc(50%_-_12.5px)] left-[12px] leading-[22px]">
              Todos
            </div>
            <Image
              className="absolute top-[calc(50%_-_7.5px)] right-[11px] w-4 h-4"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/Chevron-down.svg"
            />
          </div>
          <div
            className="absolute top-[17px] left-[977px] rounded-md bg-cornflowerblue w-[125.2px] h-10 overflow-hidden cursor-pointer text-center text-white"
            onClick={onButtonContainerClick}
          >
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_47px)] leading-[22px] font-medium">
              Registrar RAA
            </div>
          </div>
        </div>
        <div className="absolute top-[194px] left-[32px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[1120px] h-[631px] text-center">
          <div className="absolute top-[564px] left-[1px] bg-gray-500 w-[1118px] h-[65px]">
            <Image
              className="absolute top-[0px] left-[0px] max-h-full w-[1118px]"
              width={1118}
              height={1}
              sizes="100vw"
              alt=""
              src="/Line.svg"
            />
            <div className="absolute top-[24px] left-[824px] leading-5 font-medium text-left">
              Página 1 de 2
            </div>
            <div className="absolute top-[17px] left-[990px] rounded-md bg-cornflowerblue w-8 h-8 overflow-hidden text-white">
              <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_3px)] leading-[22px] font-medium">
                1
              </div>
            </div>
            <div className="absolute top-[17px] left-[1030px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-8 h-8 overflow-hidden">
              <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_4.5px)] leading-[22px] font-medium">
                2
              </div>
            </div>
            <div className="absolute top-[17px] left-[1070px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-8 h-8 overflow-hidden">
              <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
              <Image
                className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/Chevron-right.svg"
              />
            </div>
            <div className="absolute top-[17px] left-[950px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-8 h-8 overflow-hidden opacity-[0.5]">
              <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
              <Image
                className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/Chevron-left.svg"
              />
            </div>
          </div>
          <div className="absolute top-[1px] left-[1px] bg-gray-500 w-[1118px] h-[564px] overflow-hidden text-left">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-500 w-[1119px] h-[788px] overflow-hidden">
              <div className="absolute h-[6.09%] w-full top-[0%] right-[0%] bottom-[93.91%] left-[0%] bg-gray-500 text-dimgray">
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-gray-500 overflow-hidden text-right">
                  <div className="absolute top-[calc(50%_-_10px)] right-[8px] leading-5 uppercase font-medium inline-block w-[101px]">
                    Acciones
                  </div>
                </div>
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-gray-500 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 uppercase font-medium inline-block w-[277px]">
                    Nombre
                  </div>
                </div>
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-gray-500 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 uppercase font-medium inline-block w-[141px]">
                    Código
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-gray-500 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 uppercase font-medium inline-block w-[103px]">
                    PEA
                  </div>
                </div>
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-gray-500 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 uppercase font-medium inline-block w-[191px]">
                    Descripción
                  </div>
                </div>
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-gray-500 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 uppercase font-medium inline-block w-[122px]">
                    Tipo
                  </div>
                </div>
              </div>
              <div className="absolute h-[17.77%] w-full top-[6.09%] right-[0%] bottom-[76.14%] left-[0%] bg-gray-500">
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[141px]">
                    RAA-INT101-001
                  </div>
                </div>
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-white overflow-hidden text-dimgray">
                  <div className="absolute top-[calc(50%_-_70px)] left-[16px] leading-5 inline-block w-[191px]">
                    Comprende los principios fundamentales de la programación
                    estructurada y orientada a objetos, aplicando la lógica para
                    resolver problemas computacionales.
                  </div>
                </div>
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[277px]">
                    Introducción a la Programación
                  </div>
                </div>
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-white overflow-hidden text-center">
                  <div className="absolute top-[calc(50%_-_20px)] right-[56px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Square-pen.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] right-[8px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-brown">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4 cursor-pointer"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Trash-2.svg"
                      onClick={onTrash2IconClick}
                    />
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[103px]">
                    PEA-INT101
                  </div>
                </div>
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-white overflow-hidden text-xs text-white">
                  <div className="absolute top-[calc(50%_-_11px)] left-[16px] bg-gray-500 w-[89px] h-[22px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-cornflowerblue w-[89px] h-[22px] overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_33.5px)] leading-5 font-medium">
                        Conceptual
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[15.23%] w-full top-[23.86%] right-[0%] bottom-[60.91%] left-[0%] bg-gray-500">
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-gray-100 overflow-hidden text-xs text-white">
                  <div className="absolute top-[calc(50%_-_11px)] left-[16px] bg-gray-500 w-[106px] h-[22px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-cornflowerblue w-[106px] h-[22px] overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] leading-5 font-medium">
                        Procedimental
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[103px]">
                    PEA-MAT202
                  </div>
                </div>
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-gray-100 overflow-hidden text-center">
                  <div className="absolute top-[calc(50%_-_20px)] right-[56px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Square-pen.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] right-[8px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-brown">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Trash-2.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-gray-100 overflow-hidden text-dimgray">
                  <div className="absolute top-[calc(50%_-_60px)] left-[16px] leading-5 inline-block w-[191px]">
                    Utiliza bibliotecas de Python como Pandas y Matplotlib para
                    el procesamiento, análisis y visualización de conjuntos de
                    datos complejos.
                  </div>
                </div>
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[277px]">
                    Análisis de Datos con Python
                  </div>
                </div>
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[141px]">
                    RAA-MAT202-002
                  </div>
                </div>
              </div>
              <div className="absolute h-[17.77%] w-full top-[39.09%] right-[0%] bottom-[43.15%] left-[0%] bg-gray-500">
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-white overflow-hidden text-xs text-white">
                  <div className="absolute top-[calc(50%_-_11px)] left-[16px] bg-gray-500 w-[85px] h-[22px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-cornflowerblue w-[85px] h-[22px] overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_31.5px)] leading-5 font-medium">
                        Actitudinal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-white overflow-hidden text-center">
                  <div className="absolute top-[calc(50%_-_20px)] right-[56px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Square-pen.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] right-[8px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-brown">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Trash-2.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[277px]">
                    Diseño UX/UI Centrado en el Usuario
                  </div>
                </div>
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[141px]">
                    RAA-DIS303-003
                  </div>
                </div>
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-white overflow-hidden text-dimgray">
                  <div className="absolute top-[calc(50%_-_70px)] left-[16px] leading-5 inline-block w-[191px]">
                    Aplica metodologías de diseño centrado en el usuario para
                    crear interfaces intuitivas y estéticamente agradables,
                    mejorando la experiencia del usuario.
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[103px]">
                    PEA-DIS303
                  </div>
                </div>
              </div>
              <div className="absolute h-[15.23%] w-full top-[56.85%] right-[0%] bottom-[27.92%] left-[0%] bg-gray-500">
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[277px]">
                    Fundamentos de Física Cuántica
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[103px]">
                    PEA-FIS404
                  </div>
                </div>
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-gray-100 overflow-hidden text-dimgray">
                  <div className="absolute top-[calc(50%_-_60px)] left-[16px] leading-5 inline-block w-[191px]">
                    Examina los postulados y aplicaciones de la mecánica
                    cuántica en sistemas atómicos y subatómicos, resolviendo
                    ecuaciones de Schrödinger.
                  </div>
                </div>
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[141px]">
                    RAA-FIS404-004
                  </div>
                </div>
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-gray-100 overflow-hidden text-xs text-white">
                  <div className="absolute top-[calc(50%_-_11px)] left-[16px] bg-gray-500 w-[89px] h-[22px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-cornflowerblue w-[89px] h-[22px] overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_33.5px)] leading-5 font-medium">
                        Conceptual
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-gray-100 overflow-hidden text-center">
                  <div className="absolute top-[calc(50%_-_20px)] right-[56px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Square-pen.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] right-[8px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-brown">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Trash-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute h-[12.69%] w-full top-[72.08%] right-[0%] bottom-[15.23%] left-[0%] bg-gray-500">
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-white overflow-hidden text-center">
                  <div className="absolute top-[calc(50%_-_20px)] right-[56px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Square-pen.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] right-[8px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-brown">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Trash-2.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-white overflow-hidden text-xs text-white">
                  <div className="absolute top-[calc(50%_-_11px)] left-[16px] bg-gray-500 w-[89px] h-[22px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-cornflowerblue w-[89px] h-[22px] overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_33.5px)] leading-5 font-medium">
                        Conceptual
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[141px]">
                    RAA-BIO505-005
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[103px]">
                    PEA-BIO505
                  </div>
                </div>
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-white overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[277px]">
                    Biología Molecular Avanzada
                  </div>
                </div>
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-white overflow-hidden text-dimgray">
                  <div className="absolute top-[calc(50%_-_50px)] left-[16px] leading-5 inline-block w-[191px]">
                    Describe los mecanismos de replicación, transcripción y
                    traducción del ADN, y analiza técnicas modernas de edición
                    genética.
                  </div>
                </div>
              </div>
              <div className="absolute h-[15.23%] w-full top-[84.77%] right-[0%] bottom-[0%] left-[0%] bg-gray-500">
                <div className="absolute h-full w-[19.93%] top-[0%] right-[37%] bottom-[0%] left-[43.07%] bg-gray-100 overflow-hidden text-dimgray">
                  <div className="absolute top-[calc(50%_-_60px)] left-[16px] leading-5 inline-block w-[191px]">
                    Planifica, ejecuta y controla proyectos de ingeniería
                    utilizando herramientas de gestión, asegurando el
                    cumplimiento de plazos y presupuestos.
                  </div>
                </div>
                <div className="absolute h-full w-[15.46%] top-[0%] right-[84.54%] bottom-[0%] left-[0%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[141px]">
                    RAA-ING606-006
                  </div>
                </div>
                <div className="absolute h-full w-[13.76%] top-[0%] right-[23.24%] bottom-[0%] left-[63%] bg-gray-100 overflow-hidden text-xs text-white">
                  <div className="absolute top-[calc(50%_-_11px)] left-[16px] bg-gray-500 w-[106px] h-[22px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-cornflowerblue w-[106px] h-[22px] overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_42px)] leading-5 font-medium">
                        Procedimental
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-full w-[27.61%] top-[0%] right-[56.93%] bottom-[0%] left-[15.46%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[277px]">
                    Gestión de Proyectos de Ingeniería
                  </div>
                </div>
                <div className="absolute h-full w-[11.17%] top-[0%] right-[0%] bottom-[0%] left-[88.83%] bg-gray-100 overflow-hidden text-center">
                  <div className="absolute top-[calc(50%_-_20px)] right-[56px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Square-pen.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_20px)] right-[8px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-brown">
                    <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Trash-2.svg"
                    />
                  </div>
                </div>
                <div className="absolute h-full w-[12.06%] top-[0%] right-[11.17%] bottom-[0%] left-[76.76%] bg-gray-100 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[16px] leading-5 inline-block w-[103px]">
                    PEA-ING606
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[921px] left-[0px] bg-gray-500 w-[1440px] h-[52px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[52px]">
          <div className="absolute top-[16px] left-[176px] bg-gray-500 w-[63px] h-5 overflow-hidden">
            <div className="absolute top-[1px] left-[0px] leading-5 font-medium">
              Recursos
            </div>
          </div>
          <div className="absolute top-[16px] left-[262px] bg-gray-500 w-[37px] h-5 overflow-hidden">
            <div className="absolute top-[1px] left-[0px] leading-5 font-medium">
              Legal
            </div>
          </div>
          <div className="absolute top-[16px] left-[322px] bg-gray-500 w-[62px] h-5 overflow-hidden">
            <div className="absolute top-[1px] left-[0px] leading-5 font-medium">
              Contacto
            </div>
          </div>
          <Image
            className="absolute top-[16px] left-[1144px] w-5 h-5"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/facebook.svg"
          />
          <Image
            className="absolute top-[16px] left-[1188px] w-5 h-5"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/twitter.svg"
          />
          <Image
            className="absolute top-[16px] left-[1232px] w-5 h-5"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/linkedin.svg"
          />
          <Image
            className="absolute top-[16px] left-[1276px] w-5 h-5"
            width={20}
            height={20}
            sizes="100vw"
            alt=""
            src="/github.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[1440px] h-16 text-cornflowerblue">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white w-[1440px] h-16">
          <Image
            className="absolute top-[16px] left-[24px] w-8 h-8"
            width={32}
            height={32}
            sizes="100vw"
            alt=""
            src="/Image.svg"
          />
          <i className="absolute top-[19px] left-[56px] text-[25px] leading-[25px] inline-block font-bold font-noto-sans w-14">
            logo
          </i>
          <div className="absolute top-[12px] left-[1324px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-center text-dimgray">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_+_8px)] leading-[22px] font-medium" />
            <Image
              className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/Search.svg"
            />
          </div>
          <div className="absolute top-[13.5px] left-[1051.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-64 h-9 text-gray-400">
            <div className="absolute top-[calc(50%_-_10.5px)] left-[34px] leading-[22px]">
              Buscar por código o nombre...
            </div>
            <Image
              className="absolute top-[calc(50%_-_7.5px)] left-[12px] w-4 h-4"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/Search2.svg"
            />
          </div>
          <Image
            className="absolute top-[14px] left-[1380px] rounded-[18px] w-9 h-9 object-cover"
            width={36}
            height={36}
            sizes="100vw"
            alt=""
            src="/Avatar@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ListadoRAA;
