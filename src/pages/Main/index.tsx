import { Header, Form, Cart, LineBottom } from "./styles";

import Logo from "../../assets/logo.png";
import Loupe from "../../assets/loupe.png";
import Checkout from "../../assets/cart.png";

import { Products } from "../../components/Products";
import { useState } from "react";
import { LocationModal } from "../../components/Modal";

export default function Main() {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleIncrementProductFake() {
    setCounter(counter + 1);
  }

  function handleOpenModal() {
    setIsOpenModal(true)
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="Logo Obrazul" height="50" />
        </div>
        <div className="right-side-header">
          <Form method="get">
            <div>
              <input
                type="text"
                placeholder="Busque um produto"
                name="search"
                id="input"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button type="submit">
                <img src={Loupe} alt="Buscar" height="20" />
              </button>
            </div>
          </Form>
          <Cart className="cart-block">
            <img src={Checkout} alt="Carrinho" height="30" />
            <span className="cart-counter" onClick={handleIncrementProductFake}>{counter}</span>
          </Cart>
        </div>
      </Header>
      <LineBottom>
        <p className="pink">Teste Obrazul</p>
        <button onClick={handleOpenModal}>
          Selecione sua localização
        </button>
        
        {isOpenModal && <LocationModal isOpen={isOpenModal} onRequestClose={handleCloseModal}/>}

        <p>Feito por Pedro Lucas</p>
      </LineBottom>

      <Products search={search} />
    </>
  );
}
