interface ExecutoresProps {
    instrucoesPersonagens: Instrucao['instrucoesPersonagens'];
}

export default function Executores({instrucoesPersonagens}: ExecutoresProps) {
    const executores = instrucoesPersonagens.map(ip => ({
        personagemId: ip.personagemId ?? undefined,
        nome: ip.nome ?? undefined,
        showAll: ip.showAll,
        showAllExcept: ip.showAllExcept
    }));

    return (
        <span className="executores">
            {executores.some(ex => ex.showAll) ? (
                <span className="executor-badge">TODOS</span>
            ) : executores.some(ex => ex.showAllExcept) ? (
                <>
                    <span className="executor-badge">TODOS exceto</span>
                    {executores
                        .filter(ex => ex.showAllExcept)
                        .map(ex => (
                            <span key={ex.personagemId} className="executor-badge">
                                {ex.nome}
                            </span>
                        ))}
                </>
            ) : (executores.map(ex => (
                    <span key={ex.personagemId} className="executor-badge">{ex.nome}</span>
                ))
            )}
        </span>
    );
}