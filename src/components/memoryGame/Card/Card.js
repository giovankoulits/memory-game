import cardImg from './deck.png';
import './card.css';

const Card = ({ firstRender, turned, id, onclick, index }) => {
  const style = {
    animation: firstRender === 2 ? `bounce-in-right ${2 + index / 10}s` : '',
    backgroundColor: 'white',
  };

  return (
    <div
      onClick={() => onclick(id, index)}
      className='card'
      alt={`pic${index}`}
      style={style}
    >
      <img src={turned ? `https://picsum.photos/id/${id}/200/300` : cardImg} />
    </div>
  );
};

export default Card;
