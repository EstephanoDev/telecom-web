export interface Formulario {
  id: string;
  Fecha: string;
  Grupo?: string[];
  Observacion: string;
  TipoTrabajo: string;
  Trabajador: string;
  TrabajoRealizado: number;
  Ubicacion: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}
// Define the Ubi type
export interface Ubi {
  id: number;
  latitud: number;
  longitud: number;
  Descripcion: string;
}
