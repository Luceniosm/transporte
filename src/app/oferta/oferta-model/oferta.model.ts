export interface Oferta {
  id: string
  tenantId: string
  tipoOferta: number
  pagaPedagio: boolean
  compativel: any
  produto: string
  transportadoraLogoUrl: string
  unidadeOrganizacionalId: string
  loteEmbarcadorId: string
  aprovacaoAutomatica: boolean
  localColeta: LocalColeta
  localDescarga: LocalDescarga
  modalidadePagamento: any
  informacoesAgendamento: InformacoesAgendamento
}

export interface LocalColeta {
  id: string
  uf: string
  cidade: string
  local: string
}

export interface LocalDescarga {
  id: string
  uf: string
  cidade: string
  local: string
}

export interface InformacoesAgendamento {
  permiteSolicitarHoje: boolean
  datasAgendamentoPermitido: DatasAgendamentoPermitido[]
  periodoAntecedenciaOcAgendamento: number
}

export interface DatasAgendamentoPermitido {
  dataAgendamento: string
  dataLiberacaoOc: string
}
