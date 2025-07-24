// components/Form/InstrucaoForm.tsx
interface InstrucaoFormProps {
    id: number;
    ordemCronologica: number;
    onCancel: () => void;
    onSubmit?: (data: InstrucaoFormData) => void;
}

export default function InstrucaoForm(
    {id, ordemCronologica, onCancel, onSubmit}: InstrucaoFormProps) {
    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit({id, ordemCronologica, cenaId: 0, tipoDeInstrucao: ""});
        }
    };
    return (
        <tr className="instrucao-form">
            <td>
                #{ordemCronologica}
                {/* select tipoDeInstrucao AUTOFOCUS */}
            </td>
            <td>
                ID: {id}
                {/* component <Personagens> */}
                {/* component <Texto> */}
            </td>
            <td className="form-actions">
                <button onClick={onCancel} className="cancel-btn">
                    Cancelar
                </button>
                {onSubmit && (
                    <button onClick={handleSubmit} className="submit-btn">
                        Salvar
                    </button>
                )}
            </td>
        </tr>
    );
}