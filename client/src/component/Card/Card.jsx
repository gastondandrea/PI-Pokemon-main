import './card.css';
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div className='card-container'>
      <Link className='name-container' to={`/detail/${props.id}`}>
       <h1>{props.name}</h1>
      </Link>
      <div className='img-container'><img src={props.image} alt={props.name} /></div>
      <div className='types-container'>
        <h2>{props.types.length > 1 ? props.types.join(" / ") : props.types }</h2>
      </div>
    </div>
  );
}

export default Card;