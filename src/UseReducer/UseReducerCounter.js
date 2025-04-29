import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
};

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [error, setError] = useState('');

  // Update error message whenever count changes
  useEffect(() => {
    if (state.count < 0) {
      setError('Count cannot be negative! Resetting to 0.');
      setTimeout(() => {
        dispatch({ type: 'reset' });
      }, 1500);
    
    } else {
      setError('');
    }
  }, [state.count]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <div style={{ margin: '10px 0' }}>
        <button 
          style={{ 
            color: 'green', 
            marginRight: '10px',
            padding: '5px 15px'
          }} 
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
        <button 
          style={{ 
            color: 'red',
            padding: '5px 15px'
          }} 
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>
      </div>
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
    </div>
  );
};

export default UseReducerCounter;