// FILE: ./src/components/Row/ActionButtons.tsx
import type { AppState } from '../../types/state';

interface ActionButtonsProps {
    id: number;
    setAppState: (state: AppState) => void;
}

export default function ActionButtons({ id, setAppState }: ActionButtonsProps) {
    const handleEdit = () => {
        setAppState({ mode: 'EDIT', editingId: id });
    };

    return (
        <div className="action-buttons">
            <button onClick={handleEdit} className="edit-btn">
                editar
            </button>
        </div>
    );
}