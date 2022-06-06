import { Fragment } from 'react';
import Home from '../src/containers/Home/index';

const Homepage = () => {

  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  return {
    props: {
    },
  }
}
export default Homepage;