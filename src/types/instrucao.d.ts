// FILE: ./src/types/instrucao.d.ts
type TipoDeInstrucao = 'Fala' | 'Acao' | 'Nota';

export interface Instrucao {
    id: number;
    cenaId: number;
    ordemCronologica: number;
    tipoDeInstrucao: string;
    texto?: string;
    instrucoesPersonagens: {
        personagemId: number | null;
        showAll: boolean;
        showAllExcept: boolean;
        nome: string | null;
    }[];
}

export interface InstrucaoFormData {
    id: number;
    cenaId: number;
    ordemCronologica: number;
    tipoDeInstrucao: string;
    texto?: string;
}


