import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>


        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

        </Column>
      </Panel>
    </Container>
  );
};



export default Product;
