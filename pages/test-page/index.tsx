import { GetServerSideProps, NextPage } from 'next';
import BasicSwiper from '@molecules/BasicSwiper/BasicSwiper';
import BasicForm from '@molecules/BasicForm/BasicForm';

const TestingPage: NextPage = (props) => {
  return (
    <div>
      <BasicSwiper />
      <BasicForm />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default TestingPage;
