import {Analytics} from '@vercel/analytics/react';
import {FC, memo} from 'react';

const Home: FC = memo(() => {
  return (
    <>
      <ul className="list-disc px-8">
        <li>
          <a href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">
            Curriculum icons created by Muhammad_Usman - Flaticon
          </a>
        </li>

        <li>
          <a href="https://github.com/tbakerx/react-resume-template" title="react-resume-template">
            https://github.com/tbakerx/react-resume-template
          </a>
        </li>
      </ul>
      <Analytics />;
    </>
  );
});

export default Home;
