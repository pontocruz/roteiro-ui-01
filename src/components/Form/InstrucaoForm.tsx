// FILE: ./src/components/Form/InstrucaoForm.tsx
import {useState} from 'react';
import type {InstrucaoFormData} from '../../types/instrucao';

interface InstrucaoFormProps {
    id: number;
    ordemCronologica: number;
    onCancel: () => void;
    onSubmit?: (data: InstrucaoFormData) => void;
}

export default function InstrucaoForm(
    {id, ordemCronologica, onCancel, onSubmit}: InstrucaoFormProps) {
    const [formData, setFormData] = useState<InstrucaoFormData>({
        id,
        ordemCronologica,
        cenaId: 1,
        tipoDeInstrucao: 'Fala',
        texto: '',
    });

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <tr className="instrucao-form">
            <td>
                #{ordemCronologica}
                <br/>
                <select
                    value={formData.tipoDeInstrucao}
                    onChange={(e) => setFormData({...formData, tipoDeInstrucao: e.target.value})} autoFocus>
                    <option value="Fala">Fala</option>
                    <option value="Acao">Ação</option>
                    <option value="Fala">Nota</option>
                </select>
            </td>
            <td>
                <textarea
                    value={formData.texto}
                    onChange={(e) =>
                        setFormData({...formData, texto: e.target.value})
                    }
                    placeholder="Texto da instrução"
                />
            </td>
            <td className="form-actions">
                <button onClick={onCancel} className="cancel-btn">
                    Cancelar
                </button>
                {onSubmit && (
                    <button onClick={handleSubmit} className="submit-btn">
                        salvar
                    </button>
                )}
            </td>
        </tr>
    );
}