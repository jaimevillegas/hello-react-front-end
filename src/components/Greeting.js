import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <h1>
          Error:
          {error}
        </h1>
      ) : (
        <h1>
          Greeting:
          {greeting}
        </h1>
      )}
    </div>
  );
};

export default Greeting;
