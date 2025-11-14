import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {product_data}= useContext(ShopContext);
  const {productID} = useParams();
  const product = product_data.find((e)=> e.id === Number(productID));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}
