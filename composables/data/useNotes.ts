import { notes } from '~~/resources/notes';

export const useNotes = () => notes.filter(note => !note.isDrafted);