// FILE: ./src/components/Row/InstrucaoRow.tsx
import type {Instrucao} from '../../types/instrucao';
import Executores from './Executores';
import ActionButtons from './ActionButtons';
import type {AppState} from "../../types/state";

interface InstrucaoRowProps {
    inst: Instrucao;
    isEditing: boolean;
    setAppState: (state: AppState) => void;
}

const parseMentionsToButtons = (text: string = '') => {
    return text.replace(/@\[(\d+)\|([^\]]+)]/g, (_match, id, name) =>
        `<button class="mention-btn" data-personagem-id="${id}">${name}</button>`);
};

export default function InstrucaoRow(
    {
        inst,
        isEditing,
        setAppState
    }: InstrucaoRowProps) {
    return (
        <tr style={{display: isEditing ? 'none' : 'table-row'}}>
            <td>{inst.ordemCronologica} {inst.tipoDeInstrucao}</td>
            <td className="texto">
                <Executores instrucoesPersonagens={inst.instrucoesPersonagens}/>
                <span
                    data-field="texto"
                    className="js-texto"
                    dangerouslySetInnerHTML={{
                        __html: parseMentionsToButtons(inst.texto),
                    }}/>
            </td>
            <td>
                <ActionButtons id={inst.id} setAppState={setAppState}/>
            </td>
        </tr>
    );
}