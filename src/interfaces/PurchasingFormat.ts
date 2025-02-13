export interface PurchasingFormat {
  documentNumber?: string;              // RNC o Cédula
  documentType?: string;                // Tipo Id
  purchaseType?: string;                // Tipo Bienes y Servicios Comprados
  taxReceiptNumber?: string;            // NCF
  modifiedTaxReceiptNumber?: string;    // NCF ó Documento Modificado
  receiptDate?: Date;                   // Fecha Comprobante
  paymentDate?: Date;                   // Fecha Pago
  serviceAmount?: number;               // Monto Facturado en Servicios
  goodsAmount?: number;                 // Monto Facturado en Bienes
  totalAmount?: number;                 // Total Monto Facturado
  billedITBIS?: number;                 // ITBIS Facturado
  withheldITBIS?: number;               // ITBIS Retenido
  proportionalITBIS?: number;           // ITBIS sujeto a Proporcionalidad
  costITBIS?: number;                   // ITBIS llevado al Costo
  advanceITBIS?: number;                // ITBIS por Adelantar
  perceivedITBIS?: number;              // ITBIS percibido en compras
  incomeWithholdingType?: string;       // Tipo de Retención en ISR
  incomeWithholdingAmount?: number;     // Monto Retención Renta
  perceivedIncomeTax?: number;          // ISR Percibido en compras
  selectiveConsumptionTax?: number;     // Impuesto Selectivo al Consumo
  otherTaxes?: number;                  // Otros Impuesto/Tasas
  legalTip?: number;                    // Monto Propina Legal
  paymentMethod?: string;               // Forma de Pago
}
