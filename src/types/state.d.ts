// .src/types/state.d.ts
type AppState = {
    mode: 'IDLE' | 'EDIT';
    editingId: number | null;
};