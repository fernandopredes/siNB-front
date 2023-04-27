declare module "jspdf-autotable" {
  import { jsPDF } from "jspdf";

  interface AutoTableOptions {
    head: string[][];
    body: any[][];
    startY?: number;
    // Adicione outras opções conforme necessário
  }

  export function setAutoTable(doc: jsPDF, options: AutoTableOptions): void;
}
