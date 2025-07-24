interface Instrucao {
    id: number;
    cenaId: number;
    tipoDeInstrucao: string;
    texto?: string;
    ordemCronologica: number;
    executores: Executor[];
}

interface Executor {
    personagemId?: number;
    nome?: string;
    showAll: boolean;
    showAllExcept: boolean;
}

interface RawInstrucaoFromAPI {
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