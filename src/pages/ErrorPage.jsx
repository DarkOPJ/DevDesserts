import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 className='text-6xl font-bold mb-4'>Status Code 500</h1>
      <p className='text-xl mb-5'>Error Fetching Products, please go back & refresh.</p>
      <Link
        to='/'
        className='text-white bg-creme hover:bg-cremeDark rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default ErrorPage;
