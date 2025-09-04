"use client";
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RAAFormData, CreateRAARequest } from "../../types/raa";
import { createRAA } from "../../lib/api";

const CrearRAA: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RAAFormData>({
    codigo: "",
    nombre: "",
    descripcion: "",
    tipo: "",
    pea: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof RAAFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      // Validación básica
      if (!formData.nombre || !formData.descripcion || !formData.tipo || !formData.pea) {
        setError("Por favor completa todos los campos obligatorios");
        return;
      }

      // Crear el objeto para el API con valores por defecto
      const createRequest: CreateRAARequest = {
        codigo: formData.codigo || "RAA-AUTO", // Si está vacío, usar auto
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        asignaturaId: 1, // Valor por defecto - esto debería venir del contexto o selector
        tipoRaaId: 1, // Valor por defecto - esto debería mapearse del tipo seleccionado
        nivel: "INTERMEDIO", // Valor por defecto
        estadoActivo: true,
        generarCodigoAutomatico: !formData.codigo, // true si no hay código manual
        prefijoPersonalizado: "RAA"
      };

      await createRAA(createRequest);
      
      // Redirigir al listado
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear el RAA");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  const onContainerClick = useCallback(() => {
    // Please sync "Editar RAA" to the project
  }, []);

  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white h-[918px] overflow-hidden text-left text-sm text-dimgray font-inter">
      <div className="absolute top-[64px] left-0 right-0 bg-white h-[802px] flex justify-center">
        <div className="relative w-[1440px] max-w-full h-[802px]">
          <div
            className="absolute top-[0px] left-[0px] bg-white border-gainsboro border-solid border-[1px] box-border w-64 h-[802px] cursor-pointer"
            onClick={onContainerClick}
          >
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
          <div className="absolute top-[0px] left-[256px] bg-gray-100 w-[calc(100%-256px)] h-[802px] overflow-hidden text-xs text-gray-300">
            <div className="absolute top-[40px] left-[256px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-[10px] bg-white w-[672px] h-[722px] transform -translate-x-[256px]">
              <div className="absolute top-[49px] left-[48px] text-2xl tracking-[-1px] leading-8 font-medium">
                Crear Nuevo RAA
              </div>
              <div className="absolute top-[97px] left-[48px] text-sm leading-5 font-medium">
                Código (opcional)
              </div>
              <div className="absolute top-[123.5px] left-[47.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[459.1px] h-10 text-sm text-dimgray">
                <input
                  type="text"
                  className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px] w-[435px] border-none outline-none bg-transparent"
                  placeholder="Deja vacío para generar automáticamente"
                  value={formData.codigo}
                  onChange={(e) => handleInputChange('codigo', e.target.value)}
                />
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
                  Nombre *
                </div>
                <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm text-dimgray">
                  <input
                    type="text"
                    className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px] w-[calc(100%-24px)] border-none outline-none bg-transparent"
                    placeholder="Ingrese el nombre del RAA"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                  />
                </div>
              </div>
              <div className="absolute top-[280px] left-[48px] bg-gray-500 w-[576px] h-[146px]">
                <div className="absolute top-[0px] left-[0px] leading-5 font-medium">
                  Descripción *
                </div>
                <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm text-dimgray">
                  <textarea
                    className="absolute w-[calc(100%_-_23px)] top-[8px] left-[12px] leading-[22px] h-[calc(100%-20px)] border-none outline-none bg-transparent resize-none"
                    placeholder="Describa el RAA"
                    value={formData.descripcion}
                    onChange={(e) => handleInputChange('descripcion', e.target.value)}
                  />
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
                  Tipo *
                </div>
                <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm">
                  <select
                    className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px] w-[calc(100%-40px)] border-none outline-none bg-transparent appearance-none"
                    value={formData.tipo}
                    onChange={(e) => handleInputChange('tipo', e.target.value)}
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="Conceptual">Conceptual</option>
                    <option value="Procedimental">Procedimental</option>
                    <option value="Actitudinal">Actitudinal</option>
                  </select>
                  <Image
                    className="absolute top-[calc(50%_-_7.5px)] right-[11px] w-4 h-4 pointer-events-none"
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
                  PEA *
                </div>
                <div className="absolute h-[calc(100%_-_30px)] w-full top-[29.5px] right-[0.5px] bottom-[0.5px] left-[-0.5px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border text-sm">
                  <select
                    className="absolute top-[calc(50%_-_10.5px)] left-[12px] leading-[22px] w-[calc(100%-40px)] border-none outline-none bg-transparent appearance-none"
                    value={formData.pea}
                    onChange={(e) => handleInputChange('pea', e.target.value)}
                  >
                    <option value="">Seleccione un PEA</option>
                    <option value="PEA-INT101">PEA-INT101</option>
                    <option value="PEA-MAT202">PEA-MAT202</option>
                    <option value="PEA-DIS303">PEA-DIS303</option>
                    <option value="PEA-FIS404">PEA-FIS404</option>
                    <option value="PEA-BIO505">PEA-BIO505</option>
                    <option value="PEA-ING606">PEA-ING606</option>
                  </select>
                  <Image
                    className="absolute top-[calc(50%_-_7.5px)] right-[11px] w-4 h-4 pointer-events-none"
                    width={16}
                    height={16}
                    sizes="100vw"
                    alt=""
                    src="/Chevron-down.svg"
                  />
                </div>
              </div>
              
              {error && (
                <div className="absolute top-[620px] left-[48px] text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <div 
                className="absolute top-[634px] left-[432px] rounded-md bg-white border-gainsboro border-solid border-[1px] box-border w-[93.8px] h-10 overflow-hidden text-center text-sm cursor-pointer hover:bg-gray-50"
                onClick={handleCancel}
              >
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_30px)] leading-[22px] font-medium">
                  Cancelar
                </div>
              </div>
              <div 
                className={`absolute top-[634px] left-[537px] rounded-md w-[86px] h-10 overflow-hidden text-center text-sm text-white cursor-pointer ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-cornflowerblue hover:bg-blue-600'}`}
                onClick={loading ? undefined : handleSubmit}
              >
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_27.5px)] leading-[22px] font-medium">
                  {loading ? 'Guardando...' : 'Guardar'}
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
              src="/Avatar2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearRAA;
