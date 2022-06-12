import Home from '../src/containers/Home/index';
import { Fragment } from 'react';

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