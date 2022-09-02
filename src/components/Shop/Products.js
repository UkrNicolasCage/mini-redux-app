import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  { id: "p1", price: 6, title: "Product1", description: "its realy Product1" },
  { id: "p2", price: 16, title: "Product2", description: "its realy Product2" },
];

const Products = (props) => {
  const products = DUMMY_PRODUCT.map((product) => {
    return (
      <ProductItem
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        key={product.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products}
      </ul>
    </section>
  );
};

export default Products;
