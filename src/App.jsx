import { useStage } from 'react';

export const App = () => {
  const [history, setHistory] = useStage([]);
  const [count, setCount] = useStage(0);
  const [query, setQuery] = useStage('');

  function saveCount(value) {
    setCount(value);
    setHistory(currentHistory => [...currentHistory, value]);
  }

  return (
    <div className="App">
      <h1>Mate academy {count} </h1>

      <div className="box">
        <input
          type="text"
          onChange={e => {
            setQuery(e.target.value)
          }}
        />

        {query}
      </div>

      <div className="box">
        <button onClick={() => saveCount(count - 1)}>-</button>
        {count}
        <button onClick={() => saveCount(count + 1)}>+</button>
      </div>

      <div className="box">
        {history.join(', ') || 'No history yet'}
      </div>
    </div>
  );
};
