import { BackLink } from 'components/BackLink/BackLink';
import { getProductById } from 'fakeAPI';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  //console.log(product);
  const location = useLocation();
  console.log(location);
  const backLinkHref = location.state?.from ?? '/products';
  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};

export default ProductDetails