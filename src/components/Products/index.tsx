import { useEffect, useState } from "react";
import { Container, Content, WrapperProducts, Product } from "./styles";
import { api } from "../../services/api";

import { Link } from 'react-router-dom';

interface ProductsInterface {
  ean: number;
  name: string;
  price: string;
  picture: string;
}

interface ProductsProps {
  search: string;
}

export function Products({ search }: ProductsProps) {
  const [productsList, setProductsList] = useState<ProductsInterface[]>([]);

  useEffect(() => {
    api.get("/").then((response) => setProductsList(response.data.products));
  }, [productsList]);

  return (
    <>
      <Container>
        <Content>
          <h2>Confira nossos produtos</h2>
          <WrapperProducts>
            {productsList
              .filter((prod) => {
                if (search === "") {
                  return prod;
                } else if (
                  prod.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return prod;
                }
              })
              .map((product) => {
                return (
                  <Product key={product.ean}>
                    <img
                      src={product.picture}
                      alt=""
                      height="160"
                      width="160"
                      id="img"
                    />
                    <span id="name">{product.name}</span>
                    <strong id="value">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(product.price))}
                    </strong>
                    <Link to="/checkout">
                    <button type="button">Adicionar ao carrinho</button>
                    </Link>
                  </Product>
                );
              })}
          </WrapperProducts>
        </Content>
      </Container>
    </>
  );
}
