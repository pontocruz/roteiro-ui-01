// FILE: ./src/components/Form/InstrucaoForm.tsx
import {useState} from 'react';
import type {InstrucaoFormData} from '../../types/instrucao';

interface InstrucaoFormProps {
    mode: 'create' | 'edit';
    cenaId: number;
    initialData?: {
        id?: number;
        ordemCronologica?: number;
        tipoDeInstrucao?: string;
        texto?: string;
    };
    onCancel: () => void;
    onSubmit: (data: InstrucaoFormData) => void;
}

export default function InstrucaoForm(
    { mode, cenaId, initialData = {}, onCancel, onSubmit }: InstrucaoFormProps) {

    // Calculate next order for new instructions
    const nextOrder = mode === 'create'
        ? (initialData.ordemCronologica || 0) + 1
        : initialData.ordemCronologica || 1;

    const [formData, setFormData] = useState<InstrucaoFormData>({
        id: initialData.id || 0, // Will be 0 for new instructions
        ordemCronologica: nextOrder,
        cenaId: cenaId,
        tipoDeInstrucao: initialData.tipoDeInstrucao || 'Fala',
        texto: initialData.texto || '',
    });

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <tr className="instrucao-form">
            <td>
                #{formData.ordemCronologica}
                {mode === 'edit' ? (
                    <span className="order-display">(não editável)</span>
                ) : null}
                <br />
                <select
                    value={formData.tipoDeInstrucao}
                    onChange={(e) =>
                        setFormData({...formData, tipoDeInstrucao: e.target.value})
                    }
                    autoFocus
                >
                    <option value="Fala">Fala</option>
                    <option value="Acao">Ação</option>
                    <option value="Nota">Nota</option> {/* Fixed typo here */}
                </select>
            </td>
            <td>
            <textarea
                value={formData.texto}
                onChange={(e) =>
                    setFormData({...formData, texto: e.target.value})
                }
                placeholder="Texto da instrução"
                rows={3} // Added for better text input
            />
            </td>
            <td className="form-actions">
                <button
                    onClick={onCancel}
                    className="cancel-btn"
                    type="button" // Prevent accidental form submission
                >
                    Cancelar
                </button>
                <button
                    onClick={handleSubmit}
                    className="submit-btn"
                    type="button" // Prevent accidental form submission
                >
                    {mode === 'create' ? 'Criar' : 'Salvar'}
                </button>
            </td>
        </tr>
    );
}