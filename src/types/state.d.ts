// FILE: ./src/types/state.d.ts
export type AppState = {
    mode: 'IDLE' | 'EDIT' | 'CREATE';
    editingId: number | null;
};