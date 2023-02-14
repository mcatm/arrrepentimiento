const title = 'Arrrepentimiento';

export const useHtmlHeader = (meta: any = {}) => {
  useHead({
    title,
    titleTemplate: (chunk: string) => chunk && chunk !== title
      ? `${chunk} - ${title}`
      : `${title} - the Collective`
    ,
    ...meta,
  })
}