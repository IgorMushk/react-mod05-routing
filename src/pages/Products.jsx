import ProductList from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getProducts } from 'fakeAPI';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      {/* <ProductList products={products} /> */}
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
