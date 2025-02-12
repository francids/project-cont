export default interface RNC {
  rnc: string;
  razonSocial: string;
  nombreComercial: string;
  actividad: string;
  fecha: string;
  estado: "ACTIVO" | "SUSPENDIDO" | "DADO DE BAJA" | "CESE TEMPORAL" | "ANULADO" | "RECHAZADO";
  regimen: string;
}
