"use client";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RAA } from "../types/raa";
import { fetchRAAs } from "../lib/api";

const ListadoRAA: NextPage = () => {
  const router = useRouter();
  const [raas, setRaas] = useState<RAA[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRAAs = async () => {
      try {
        setLoading(true);
        const data = await fetchRAAs();
        setRaas(data);
      } catch (err) {
        setError('Error al cargar los RAAs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRAAs();
    
    // Escuchar cuando la página se enfoca de nuevo (ej: volver de otra página)
    const handleFocus = () => {
      loadRAAs();
    };
    
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    router.push("/crear-r-a-a");
  }, [router]);

  const onTrash2IconClick = useCallback(() => {
    // Please sync "Confirmar Eliminación RAA" to the project
  }, []);

  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white h-[918px] overflow-hidden text-left text-sm text-gray-300 font-inter">
      <div className="absolute top-[64px] left-0 right-0 bg-white h-[802px] flex justify-center">
        <div className="relative w-[1440px] max-w-full h-[802px]">
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
          <div className="absolute top-[0px] left-[256px] bg-gray-100 w-[calc(100%-256px)] h-[802px] overflow-hidden">
            <div className="absolute top-[40px] left-[64px] text-4xl leading-10 font-bold inline-block w-[375px]">
              <b>Gestión de RAAs</b>
            </div>
            <div className="absolute top-[120px] left-[64px] rounded-[10px] bg-white border-gainsboro border-solid border-[1px] box-border w-[calc(100%-128px)] h-[88px]">
              <div className="absolute top-[24px] left-[24px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[173px] h-10 overflow-hidden">
                <div className="absolute top-[calc(50%_-_11px)] left-[12px] leading-[22px] inline-block w-[137px]">
                  Todas las Materias
                </div>
                <Image
                  className="absolute top-[calc(50%_-_8px)] right-[12px] w-4 h-4 overflow-hidden"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/Chevron-down.svg"
                />
              </div>
              <div className="absolute top-[24px] left-[209px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[173px] h-10 overflow-hidden">
                <div className="absolute top-[calc(50%_-_11px)] left-[12px] leading-[22px] inline-block w-[137px]">
                  Todos
                </div>
                <Image
                  className="absolute top-[calc(50%_-_8px)] right-[12px] w-4 h-4 overflow-hidden"
                  width={16}
                  height={16}
                  sizes="100vw"
                  alt=""
                  src="/Chevron-down.svg"
                />
              </div>
              <div className="absolute top-[24px] left-[394px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[462px] h-10 overflow-hidden text-dimgray">
                <input
                  type="text"
                  className="absolute top-[calc(50%_-_11px)] left-[12px] leading-[22px] w-[438px] border-none outline-none bg-transparent"
                  placeholder="Buscar por código o nombre..."
                />
              </div>
              <div
                className="absolute top-[24px] right-[24px] rounded-md bg-cornflowerblue w-[164px] h-10 overflow-hidden text-center text-white cursor-pointer"
                onClick={onButtonContainerClick}
              >
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_67.5px)] leading-[22px] font-medium">
                  Registrar RAA
                </div>
              </div>
            </div>
            <div className="absolute top-[232px] left-[64px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[calc(100%-128px)] h-[538px] overflow-hidden text-xs text-dimgray">
              <div className="absolute top-[0px] left-[0px] bg-gray-500 w-full h-12 border-b-gainsboro border-b border-solid">
                <div className="absolute top-[16px] left-[24px] uppercase font-medium inline-block w-[134px]">
                  Código
                </div>
                <div className="absolute top-[16px] left-[182px] uppercase font-medium inline-block w-[189px]">
                  Nombre
                </div>
                <div className="absolute top-[16px] left-[395px] uppercase font-medium inline-block w-[189px]">
                  Descripción
                </div>
                <div className="absolute top-[16px] left-[608px] uppercase font-medium inline-block w-[90px]">
                  Tipo
                </div>
                <div className="absolute top-[16px] left-[722px] uppercase font-medium inline-block w-[90px]">
                  PEA
                </div>
                <div className="absolute top-[16px] right-[24px] uppercase font-medium inline-block w-[196px] text-right">
                  Acciones
                </div>
              </div>
              
              {loading && (
                <div className="absolute top-[48px] left-[0px] w-full h-[490px] flex items-center justify-center">
                  <div className="text-dimgray">Cargando RAAs...</div>
                </div>
              )}
              
              {error && (
                <div className="absolute top-[48px] left-[0px] w-full h-[490px] flex items-center justify-center">
                  <div className="text-red-500">{error}</div>
                </div>
              )}
              
              {!loading && !error && raas.length === 0 && (
                <div className="absolute top-[48px] left-[0px] w-full h-[490px] flex items-center justify-center">
                  <div className="text-dimgray">No hay RAAs registrados</div>
                </div>
              )}
              
              {!loading && !error && raas.map((raa, index) => (
                <div
                  key={raa.id || index}
                  className={`absolute top-[${48 + index * 56}px] left-[0px] w-full h-14 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  } border-b-gainsboro border-b border-solid`}
                >
                  <div className="absolute top-[16px] left-[24px] font-medium inline-block w-[134px] text-gray-300">
                    {raa.codigo}
                  </div>
                  <div className="absolute top-[16px] left-[182px] font-medium inline-block w-[189px] text-gray-300">
                    {raa.nombre}
                  </div>
                  <div className="absolute top-[16px] left-[395px] inline-block w-[189px] text-dimgray">
                    {raa.descripcion}
                  </div>
                  <div className="absolute top-[12px] left-[608px] w-[90px] h-6">
                    <div className="absolute top-[0px] left-[0px] rounded-[12px] bg-cornflowerblue w-[90px] h-6 overflow-hidden text-center text-white text-xs">
                      <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_12px)] font-medium">
                        {raa.tipo || 'N/A'}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[16px] left-[722px] inline-block w-[90px] text-gray-300">
                    {raa.pea || 'N/A'}
                  </div>
                  <div className="absolute top-[12px] right-[88px] w-16 h-8">
                    <div className="absolute top-[0px] left-[0px] rounded-md bg-gray-500 w-8 h-8 overflow-hidden">
                      <Image
                        className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4 overflow-hidden"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/Square-pen.svg"
                      />
                    </div>
                    <div
                      className="absolute top-[0px] left-[32px] rounded-md bg-gray-500 w-8 h-8 overflow-hidden cursor-pointer"
                      onClick={onTrash2IconClick}
                    >
                      <Image
                        className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4 overflow-hidden"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/Trash-2.svg"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="absolute top-[490px] left-[0px] bg-gray-500 w-full h-12 border-t-gainsboro border-t border-solid">
                <div className="absolute top-[16px] left-[24px] font-medium inline-block w-[79px]">
                  Página 1 de 2
                </div>
                <div className="absolute top-[8px] right-[24px] w-[108px] h-8">
                  <div className="absolute top-[0px] left-[0px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-8 h-8 overflow-hidden opacity-50">
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4 overflow-hidden"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Chevron-left.svg"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[36px] rounded-md bg-cornflowerblue w-8 h-8 overflow-hidden text-center text-white">
                    <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)] font-medium">
                      1
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[72px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-8 h-8 overflow-hidden text-center">
                    <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_4px)] font-medium">
                      2
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[108px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-8 h-8 overflow-hidden">
                    <Image
                      className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] w-4 h-4 overflow-hidden"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
                      src="/Chevron-right.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[866px] left-0 right-0 bg-gray-500 h-[52px] text-gray-300 flex justify-center">
        <div className="relative w-[1440px] max-w-full h-[52px]">
          <div className="absolute top-[0px] left-[0px] bg-white w-full h-[52px]">
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
              className="absolute top-[16px] right-[296px] w-5 h-5"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/facebook.svg"
            />
            <Image
              className="absolute top-[16px] right-[252px] w-5 h-5"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/twitter.svg"
            />
            <Image
              className="absolute top-[16px] right-[208px] w-5 h-5"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/linkedin.svg"
            />
            <Image
              className="absolute top-[16px] right-[164px] w-5 h-5"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/github.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-0 right-0 bg-gray-500 h-16 flex justify-center">
        <div className="relative w-[1440px] max-w-full h-16">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white w-full h-16">
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
            <div className="absolute top-[12px] right-[215px] rounded-md bg-gray-500 w-10 h-10 overflow-hidden text-center">
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
            <div className="absolute top-[12px] right-[167px] rounded-md bg-gray-500 w-[91px] h-10 overflow-hidden text-center">
            </div>
            <div className="absolute top-[13.5px] right-[427.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-64 h-9 text-gray-400">
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
              className="absolute top-[14px] right-[60px] rounded-[18px] w-9 h-9 object-cover"
              width={36}
              height={36}
              sizes="100vw"
              alt=""
              src="/Avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoRAA;
