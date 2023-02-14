import { works } from '~~/resources/works';

export const useWorks = () => works.filter(work => !work.isDrafted);