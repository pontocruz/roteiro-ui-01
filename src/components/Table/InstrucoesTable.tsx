// ./src/components/Row/InstrucoesTable.tsx
import {useState, useEffect} from 'react';
import {Fragment} from 'react';
import api from '../../api/client.ts';
import InstrucaoForm from '../Form/InstrucaoForm.tsx';
import InstrucaoRow from "../Row/InstrucaoRow.tsx";import type {AppState} from '../../types/state';
import type {Instrucao, InstrucaoFormData} from '../../types/instrucao';


export default function InstrucoesTable() {
    const [instrucoes, setInstrucoes] = useState<Instrucao[]>([]);
    const [appState, setAppState] = useState<AppState>({mode: 'IDLE', editingId: null,});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await api.get('api/roteiros/instrucoes/1');
                setInstrucoes(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = (formData: InstrucaoFormData) => {
        setInstrucoes((prev) =>
            prev.map((inst) =>
                inst.id === formData.id ? { ...inst, ...formData } : inst
            )
        );
        setAppState({ mode: 'IDLE', editingId: null });
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
                                id={inst.id}
                                ordemCronologica={inst.ordemCronologica}
                                onCancel={() => setAppState({mode: 'IDLE', editingId: null})}
                                onSubmit={handleSubmit}/>
                        )}
                    </Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
}