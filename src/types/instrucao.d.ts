// instrucao.d.ts
interface Instrucao {
    id: number;
    cenaId: number;
    tipoDeInstrucao: string;
    texto?: string;
    ordemCronologica: number;
    instrucoesPersonagens: {
        personagemId: number | null;
        showAll: boolean;
        showAllExcept: boolean;
        nome: string | null;
    }[];
}
