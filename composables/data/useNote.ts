import { useNotes } from '~/composables/data/useNotes';

export const useNote = (id: string) => useNotes().find(note => note.id === id);