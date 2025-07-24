// .src/types/state.d.ts
export type AppState = {
    mode: 'IDLE' | 'EDIT';
    editingId: number | null;
};