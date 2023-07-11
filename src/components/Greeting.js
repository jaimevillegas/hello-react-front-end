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
        <div>Error: {error}</div>
      ) : (
        <div>Greeting: {greeting}</div>
      )}
    </div>
  );
};

export default Greeting;
