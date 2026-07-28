import CardWork from '~/components/card/CardWork';
import SmartLink from '~/components/SmartLink';
import { getWorks } from '~/lib/data';
import * as s from './style.css';

export const WorkList = ({
  isPickedOnly,
  excerptIds,
}: {
  isPickedOnly?: boolean;
  excerptIds?: string[];
}) => {
  const works = getWorks().filter(
    (work) => !excerptIds?.includes(work.id) && (!isPickedOnly || work.isPicked),
  );

  return (
    <ul className={s.list}>
      {works.map((work, i) => (
        <li key={`work-${i}-${work.id}`}>
          {work.to && (
            <SmartLink to={work.to}>
              <CardWork work={work} />
            </SmartLink>
          )}
        </li>
      ))}
    </ul>
  );
};
