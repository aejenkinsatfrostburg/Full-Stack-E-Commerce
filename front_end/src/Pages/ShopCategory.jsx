import React, { useContext, useState } from 'react'
import './CSS Sheets/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { Item } from '../Components/Items/Item'
import dropdown_icon from '../Components/IconPack/Shopicons_Regular_ArrowDown.png'

export const ShopCategory = (props) => {
  const { product_data } = useContext(ShopContext);

  // Filter products by category
  let filteredProducts = product_data.filter(
    item => item.category === props.category
  );

  const total = filteredProducts.length;

  // Sorting state
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("none");

  // Apply sorting
  const sortProducts = () => {
    if (sortType === "low-high") {
      filteredProducts = [...filteredProducts].sort((a, b) => a.new_price - b.new_price);
    } else if (sortType === "high-low") {
      filteredProducts = [...filteredProducts].sort((a, b) => b.new_price - a.new_price);
    } else if (sortType === "az") {
      filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  sortProducts();

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{total}</span> out of {total} products
        </p>

        {/* Sort button */}
        <div className="shopcategory-sort" onClick={() => setSortOpen(!sortOpen)}>
          Sort By <img src={dropdown_icon} alt="" />
        </div>

        {/* Dropdown menu */}
        {sortOpen && (
          <div className="sort-dropdown">
            <p onClick={() => { setSortType("low-high"); setSortOpen(false); }}>Price: Low to High</p>
            <p onClick={() => { setSortType("high-low"); setSortOpen(false); }}>Price: High to Low</p>
            <p onClick={() => { setSortType("az"); setSortOpen(false); }}>Name: A → Z</p>
          </div>
        )}
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}
