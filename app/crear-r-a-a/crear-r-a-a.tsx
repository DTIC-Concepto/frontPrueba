"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";

const CrearRAA: NextPage = () => {
  const onContainerClick = useCallback(() => {
    // Please sync "Editar RAA" to the project
  }, []);

  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white h-[918px] overflow-hidden text-left text-sm text-dimgray font-inter">
      <div
        className="absolute top-[64px] left-[0px] bg-white w-[1440px] h-[802px] cursor-pointer"
        onClick={onContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] bg-white border-gainsboro border-solid border-[1px] box-border w-64 h-[802px]">
          <div className="absolute top-[1px] left-[1px] bg-gray-500 w-[254px] h-[800px] overflow-hidden">
            <div className="absolute top-[8px] left-[8px] bg-gray-500 w-[238px] h-40">
              <div className="absolute top-[40px] left-[0px] rounded-md bg-whitesmoke w-[238px] h-10 overflow-hidden text-gray-200">
                <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                  RAA
                </div>
              </div>
              <div className="absolute top-[120px] left-[0px] rounded-md bg-gray-500 w-[238px] h-10 overflow-hidden">
                <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                  Ajustes
                </div>
              </div>
              <div className="absolute top-[80px] left-[0px] rounded-md bg-gray-500 w-[238px] h-10 overflow-hidden">
                <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                  PEA
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-500 w-[238px] h-10 overflow-hidden">
                <div className="absolute top-[calc(50%_-_11px)] left-[8px] leading-[22px] font-medium inline-block w-[222px]">
                  Materias
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[256px] bg-gray-100 w-[1184px] h-[802px] overflow-hidden text-xs text-gray-300">
          <div className="absolute top-[40px] left-[256px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-[10px] bg-white w-[672px] h-[722px]">
            <div className="absolute top-[49px] left-[48px] text-2xl tracking-[-1px] leading-8 font-medium">
              Crear Nuevo RAA
            </div>
            <div className="absolute top-[97px] left-[48px] text-sm leading-5 font-medium">
              Código
            </div>
            <div className="absolute top-[123.5px] left-[47.5px] rounded-md bg-whitesmoke border-gainsboro border-solid border-[1px] box-border w-[459.1px] h-10 text-sm text-dimgray">
              <div className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px]">
                Autogenerado
              </div>
            </div>
            <div className="absolute top-[133px] left-[519px] bg-gray-500 w-[105px] h-[22px] text-dimgray">
              <div className="absolute top-[0px] left-[0px] rounded-[11px] bg-whitesmoke w-[105px] h-[22px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_41.5px)] leading-5 font-medium">
                  Autogenerado
                </div>
              </div>
            </div>
            <div className="absolute top-[188px] left-[48px] bg-gray-500 w-[576px] h-[68px]">
              <div className="absolute top-[0px] left-[0px] leading-5 font-medium">
                Nombre
              </div>
              <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm text-dimgray">
                <div className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px]">
                  Ingrese el nombre del RAA
                </div>
              </div>
            </div>
            <div className="absolute top-[280px] left-[48px] bg-gray-500 w-[576px] h-[146px]">
              <div className="absolute top-[0px] left-[0px] leading-5 font-medium">
                Descripción
              </div>
              <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm text-dimgray">
                <div className="absolute w-[calc(100%_-_23px)] top-[8px] left-[12px] leading-[22px] inline-block">
                  Describa el RAA
                </div>
                <Image
                  className="absolute right-[2px] bottom-[2px] w-3 h-3"
                  width={12}
                  height={12}
                  sizes="100vw"
                  alt=""
                  src="/Resizing-handle.svg"
                />
              </div>
            </div>
            <div className="absolute top-[450px] left-[48px] bg-gray-500 w-[576px] h-[68px]">
              <div className="absolute top-[0px] left-[0px] leading-5 font-medium">
                Tipo
              </div>
              <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm">
                <div className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px]">
                  Seleccione un tipo
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
            </div>
            <div className="absolute top-[542px] left-[48px] bg-gray-500 w-[576px] h-[68px]">
              <div className="absolute top-[0px] left-[0px] leading-5 font-medium">
                PEA
              </div>
              <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm">
                <div className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px]">
                  Seleccione un PEA
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
            </div>
            <div className="absolute top-[634px] left-[432px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[93.8px] h-10 overflow-hidden text-center text-sm">
              <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_30px)] leading-[22px] font-medium">
                Cancelar
              </div>
            </div>
            <div className="absolute top-[634px] left-[537px] rounded-md bg-cornflowerblue w-[86px] h-10 overflow-hidden text-center text-sm text-white">
              <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_27.5px)] leading-[22px] font-medium">
                Guardar
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[866px] left-[0px] bg-gray-500 w-[1440px] h-[52px] text-gray-300">
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
      <div className="absolute top-[0px] left-[0px] bg-gray-500 w-[1440px] h-16">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white w-[1440px] h-16">
          <Image
            className="absolute top-[16px] left-[24px] w-8 h-8"
            width={32}
            height={32}
            sizes="100vw"
            alt=""
            src="/Image.svg"
          />
          <i className="absolute top-[19px] left-[56px] text-[25px] leading-[25px] inline-block font-bold font-noto-sans text-cornflowerblue w-14">
            logo
          </i>
          <div className="absolute top-[12px] left-[1225px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-center">
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
          <div className="absolute top-[12px] left-[1273px] rounded-md bg-gray-500 w-[91px] h-10 overflow-hidden text-center">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_45.5px)] leading-[22px] font-medium">
              Cerrar sesión
            </div>
          </div>
          <div className="absolute top-[13.5px] left-[952.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-64 h-9 text-gray-400">
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
            src="/Avatar2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CrearRAA;
