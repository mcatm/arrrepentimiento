import { Fragment } from 'react';
import Soundcloud from '~/components/Soundcloud';
import Video from '~/components/Video';
import type { TextLine } from '~/types/text';
import TextWork from './TextWork';

const paragraphTypes = ['paragraph', 'heading', 'subheading'];

const textType = (line: TextLine): string => {
  if (typeof line === 'string' || paragraphTypes.includes((line as { type: string }).type)) {
    return 'paragraph';
  }
  return (line as { type: string }).type;
};

function Paragraph({ line }: { line: TextLine }) {
  if (typeof line === 'string') {
    return <p dangerouslySetInnerHTML={{ __html: line }} />;
  }
  const value = (line as { value: string }).value;
  const type = (line as { type: string }).type;
  if (type === 'heading') return <h2 dangerouslySetInnerHTML={{ __html: value }} />;
  if (type === 'subheading') return <h4 dangerouslySetInnerHTML={{ __html: value }} />;
  return <p dangerouslySetInnerHTML={{ __html: value }} />;
}

export default function TextRenderer({ lines }: { lines: TextLine[] }) {
  return (
    <>
      {(lines || []).map((line, i) => {
        const type = textType(line);
        switch (type) {
          case 'paragraph':
            return <Paragraph key={i} line={line} />;
          case 'delimiter':
            return <hr key={i} />;
          case 'image':
            return (
              <p key={i}>
                <img src={(line as { value: string }).value} alt="" />
              </p>
            );
          case 'link': {
            const l = line as { src: string; label?: string; target?: string };
            return (
              <p key={i}>
                <a href={l.src} target={l.target || '_blank'} rel="noopener noreferrer">
                  {l.label || l.src}
                </a>
              </p>
            );
          }
          case 'list': {
            const values = (line as { values: string[] }).values || [];
            return (
              <ul key={i}>
                {values.map((value, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: value }} />
                ))}
              </ul>
            );
          }
          case 'work':
            return <TextWork key={i} line={line as { type: 'work'; id: string }} />;
          case 'youtube':
            // Wrapped in <div> (not <p>): Video renders a block <div>, and a
            // <div> inside <p> is invalid HTML that breaks SSR hydration.
            return (
              <div key={i}>
                <Video video={line as { id: string; title?: string }} />
              </div>
            );
          case 'soundcloud':
            return (
              <div key={i}>
                <Soundcloud line={line as { type: 'soundcloud'; src: string }} />
              </div>
            );
          default:
            return <Fragment key={i} />;
        }
      })}
    </>
  );
}
