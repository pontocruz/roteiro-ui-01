// components/Form/InstrucaoForm.tsx
interface InstrucaoFormProps {
    id: number;
    ordemCronologica: number;
    onCancel: () => void;
    onSubmit?: (data: any) => void;
}

export default function InstrucaoForm({
                                          id,
                                          ordemCronologica,
                                          onCancel
                                      }: InstrucaoFormProps) {
    return (
        <div className="instrucao-form">
            <h3>Editing Instruction #{ordemCronologica}</h3>
            <div>ID: {id}</div>
            {/* Add your form fields here */}
            <button onClick={onCancel} className="cancel-btn">
                Cancelar
            </button>
        </div>
    );
}