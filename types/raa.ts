export interface RAA {
  id?: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  asignaturaId?: number;
  tipoRaaId?: number;
  nivel?: string;
  estadoActivo?: boolean;
  generarCodigoAutomatico?: boolean;
  prefijoPersonalizado?: string;
  creadoEn?: string;
  actualizadoEn?: string;
  tipo?: string; // Para mostrar el nombre del tipo en la UI
  pea?: string; // Para mostrar el PEA en la UI
}

export interface CreateRAARequest {
  codigo: string;
  nombre: string;
  descripcion: string;
  asignaturaId: number;
  tipoRaaId: number;
  nivel: string;
  estadoActivo: boolean;
  generarCodigoAutomatico: boolean;
  prefijoPersonalizado: string;
}

export interface CreateRAAResponse {
  exitoso: boolean;
  mensaje: string;
  raa: RAA;
}

export interface RAAFormData {
  codigo: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  pea: string;
}
