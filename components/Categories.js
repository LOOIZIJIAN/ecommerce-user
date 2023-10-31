import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function Categories({ categories, products }) {
  const parent = [];
  const root = [];

  categories.forEach((category) => {
    category.parent ? parent.push(category) : root.push(category);
  });

  return (
    <>
      {root.map((r) => (
        <StyledProductsGrid key={r._id}>
          {r.name}
          {parent.map((p) => {
            if (p.parent === r._id) {
              return (
                <div key={p._id}>
                  {p.name}
                  {products
                    .filter((product) => product.category === p._id)
                    .map((filteredProduct) => (
                      <ProductBox key={filteredProduct._id} products={filteredProduct} />
                    ))}
                </div>
              );
            }
            return null;
          })}
        </StyledProductsGrid>
      ))}
    </>
  );
  ``
  
}
  
 