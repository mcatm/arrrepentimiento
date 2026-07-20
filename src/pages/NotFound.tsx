import { Link } from 'react-router-dom';
import { BlockMain, BlockTitle } from '~/components/block';
import Heading from '~/components/organism/Heading';
import PageHead from '~/components/PageHead';

export default function NotFound() {
  return (
    <>
      <PageHead title="Page Not Found" />
      <BlockMain>
        <Heading />
        <BlockTitle>Page Not Found</BlockTitle>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </BlockMain>
    </>
  );
}
