interface Instrucao {
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
interface InstrucaoFormData {
    id: number;
    cenaId: number;
    ordemCronologica: number;
    tipoDeInstrucao: string;
    texto?: string;
}