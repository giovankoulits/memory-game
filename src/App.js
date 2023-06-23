import { useState } from 'react';
const App = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped((prev) => !prev)}
      className='poster-container'
    >
      <div className={flipped ? 'poster flipped' : 'poster'}>
        <img
          className='pic'
          src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
          alt='Jimmy Eat World'
        />
        <div className='pic back'>Avengers Assemble</div>
      </div>
    </div>
  );
};

export default App;
