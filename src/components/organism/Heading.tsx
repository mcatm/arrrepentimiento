import { Link } from 'react-router-dom';
import { BlockHeading } from '~/components/block';
import * as s from './organism.css';

export default function Heading() {
  return (
    <BlockHeading>
      <p className={s.brand}>
        <Link to="/">Arrrepentimiento</Link>
      </p>
    </BlockHeading>
  );
}
