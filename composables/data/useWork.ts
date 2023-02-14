import { useWorks } from '~/composables/data/useWorks';
import { works } from '~~/resources/works';

export const useWork = (id: string) => useWorks().find(work => work.id === id);