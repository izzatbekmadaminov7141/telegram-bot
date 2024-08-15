  import PropTypes from "prop-types";
  import { useState } from "react";
  import Button from "../Buttons";

  const Card = ({ data,odAdd,odDelete }) => {
    const [count, setCount] = useState(0);
    const { title, price, Image, id } = data;
  
    const removeBtn = () => { setCount(count - 1); odDelete(data) }
    const addBtn =() => { setCount(count + 1); odAdd(data) }
    return (
      <div className="relative rounded-lg  bg-white p-5" key={id}>
        <span className={`${count !== 0 ? "absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-yellow-500 p-5 text-white flex justify-center items-center" : "hidden"}`}>{count}</span>
        <div>
          <img src={Image} alt={title} /> 
        </div>
        <h4 className="font-bold text-center my-2 text-[20px]">{title} <span>{price}</span></h4>
        <div>
          <div className="flex gap-5 transetion">
            <Button type="add" title="+" disable={false} onClick={addBtn} />
            {
              count !== 0 && <Button type="delete" title="-" disable={false} onClick={removeBtn} />
        }
        </div>
          
        </div>
      </div>
    );
  };

  Card.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      Image: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    odAdd: PropTypes.func.isRequired,
    odDelete: PropTypes.func.isRequired,
  };

  export default Card;
