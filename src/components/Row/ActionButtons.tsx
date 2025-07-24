// components/Row/ActionButtons.tsx
interface ActionButtonsProps {
    onEdit: () => void;
}

export default function ActionButtons({ onEdit }: ActionButtonsProps) {
    return (
        <div className="action-buttons">
            <button onClick={onEdit} className="edit-btn">
                editar
            </button>
        </div>
    );
}

// delete, move, insert, check