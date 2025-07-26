// FILE: ./src/components/Table/InstrucoesTable.tsx
import {useState, useEffect, Fragment} from 'react';
import api from '../../api/client.ts';
import type {AppState} from '../../types/state';
import type {Instrucao, InstrucaoFormData} from '../../types/instrucao';
import InstrucaoForm from '../Form/InstrucaoForm.tsx';
import InstrucaoRow from "../Row/InstrucaoRow.tsx";

export default function InstrucoesTable() {
    const [instrucoes, setInstrucoes] = useState<Instrucao[]>([]);
    const [appState, setAppState] = useState<AppState>({mode: 'IDLE', editingId: null,});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await api.get('api/roteiros/instrucoes/1');
                setInstrucoes(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (formData: InstrucaoFormData) => {
        try {
            // Make API call to update instruction
            const response = await api.put(`api/roteiros/${formData.id}`, formData);

            // Update local state with the updated instruction
            setInstrucoes(prev =>
                prev.map(inst =>
                    inst.id === formData.id ? response.data : inst
                )
            );

            // Return to idle state
            setAppState({mode: 'IDLE', editingId: null});

        } catch (error) {
            console.error('Error updating instruction:', error);
            // We'll add proper error handling later
        }
    };

    return (
        <div className="table-container">
            <table className="instrucoes-table">
                <tbody>
                {instrucoes.map((inst) => (
                    <Fragment key={inst.id}>
                        <InstrucaoRow
                            inst={inst}
                            isEditing={appState.editingId === inst.id}
                            setAppState={setAppState}/>
                        {appState.editingId === inst.id && (
                            <InstrucaoForm
                                mode="edit"
                                cenaId={inst.cenaId}
                                initialData={{
                                    id: inst.id,
                                    ordemCronologica: inst.ordemCronologica,
                                    tipoDeInstrucao: inst.tipoDeInstrucao,
                                    texto: inst.texto
                                }}
                                onCancel={() => setAppState({mode: 'IDLE', editingId: null})}
                                onSubmit={handleSubmit}
                            />
                        )}

                    </Fragment>
                ))}
                {appState.mode === 'CREATE' && (
                    <InstrucaoForm
                        mode="create"
                        cenaId={1} // Or get this from props/state
                        initialData={{
                            ordemCronologica: instrucoes.length > 0
                                ? Math.max(...instrucoes.map(i => i.ordemCronologica)) + 1
                                : 1
                        }}
                        onCancel={() => setAppState({mode: 'IDLE', editingId: null})}
                        onSubmit={async (formData) => {
                            try {
                                // 1. Make API call to create new instruction
                                const response = await api.post('api/roteiros/instrucoes', formData);

                                // 2. Update local state with the new instruction
                                setInstrucoes(prev => [...prev, response.data]);

                                // 3. Return to idle state
                                setAppState({mode: 'IDLE', editingId: null});

                            } catch (error) {
                                console.error('Error creating instruction:', error);
                                // We'll add proper error handling later
                            }
                        }}
                    />
                )}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={3} className="add-new-container">
                        {appState.mode !== 'CREATE' && (
                            <button
                                onClick={() => setAppState({ mode: 'CREATE', editingId: null })}
                                className="add-new-btn"
                            >
                                + Adicionar Nova Instrução
                            </button>
                        )}
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}