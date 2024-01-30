import './order.css';

function Order() {
  return (
    <div className='order-container'>
      <div><p>ORDER:</p></div>
      <div>
        <select name="alphabetical-order" defaultValue={"-"}>
          <option value="-">-</option>
          <option value="A-Z" >A - Z</option>
          <option value="Z-A">Z - A</option>
        </select>
      </div>

      <div>
        <select name="atack" defaultValue={"-"}>
          <option value="-">-</option>
          <option value="higher-attack" >higher attack</option>
          <option value="lower-attack">lower attack</option>
        </select>
      </div>
    </div>
  );
}

export default Order;