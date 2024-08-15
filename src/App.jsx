import { useEffect, useState } from "react";
import Card from "./Components/Card";
import Cart from "./Components/Cart";
import { getData } from "./db/db";

const tele = window.Telegram.WebApp;
const App = () => {
  const [itemCart, setItemCart] = useState([]);
  const data = getData();
  useEffect(() => {
    tele.ready();
  })
  const odAdd = (food) => {
    const exist = itemCart.find((item) => item.id === food.id);
    if (exist) { 
        setItemCart(itemCart.map((item) => (item.id === food.id ? { ...exist, count: exist.count + 1 } : item)));
    } else {
      setItemCart([...itemCart, { ...food, count: 1 }]);
    }
  };
  const odDelete = (food) => {
    const exist = itemCart.find((item) => item.id === food.id);
    if (exist.count === 1) {
      setItemCart(itemCart.filter((item) => item.id !== food.id));
    } else {
      setItemCart(
        itemCart.map((item) =>
          item.id === food.id ? { ...exist, count: exist.count - 1 } : item
        )
      );
    }
  };
  const onChange = () => {
    tele.MainButton.text = "Pay $" + itemCart.reduce((acc, item) => acc + item.price * item.count, 0);
    tele.MainButton.show();
  }
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-3xl font-bold text-center text-[#fff] my-4">
        Our Menu
      </h1>
      <Cart cartItems={itemCart} onCheckout={onChange}/>
      <div className="grid grid-cols-3 gap-4 ">
        {data.map((item) => (
          <Card key={item.id} data={item} odAdd={odAdd} odDelete={odDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
