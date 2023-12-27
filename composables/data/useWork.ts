import { useWorks } from '~/composables/data/useWorks';

export const useWork = (id: string) => useWorks().find(work => work.id === id);