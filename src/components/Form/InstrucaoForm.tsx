// components/Form/InstrucaoForm.tsx
interface InstrucaoFormProps {
    id: number;
    ordemCronologica: number;
    onCancel: () => void;
    onSubmit?: (data: InstrucaoFormData) => void;
}

export default function InstrucaoForm({
                                          id,
                                          ordemCronologica,
                                          onCancel,
                                          onSubmit
                                      }: InstrucaoFormProps) {
    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit({
                id,
                ordemCronologica,
                cenaId: 0,
                tipoDeInstrucao: ""
            });
        }
    };

    return (
        <div className="instrucao-form">
            <h3>Editing Instruction #{ordemCronologica}</h3>
            <div>ID: {id}</div>
            {/* Form fields will go here */}
            <div className="form-actions">
                <button onClick={onCancel} className="cancel-btn">
                    Cancelar
                </button>
                {onSubmit && (
                    <button onClick={handleSubmit} className="submit-btn">
                        Salvar
                    </button>
                )}
            </div>
        </div>
    );
}