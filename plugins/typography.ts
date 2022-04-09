import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

/**
 * nl2br()
 * @param string 
 * @returns 
 */
export const nl2br = (string: string): string => {
  return string.replace(/\n/g, '<br />');
}

export const buildHTML = (contents: any): string => {
  return nl2br(documentToHtmlString(contents))
}