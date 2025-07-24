interface ExecutoresProps {
    executores: Executor[];

}

export default function Executores({ executores }: ExecutoresProps) {
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
            ) : (
                executores.map(ex => (
                    <span key={ex.personagemId} className="executor-badge">
                        {ex.nome}
                    </span>
                ))
            )}
        </span>
    );
}