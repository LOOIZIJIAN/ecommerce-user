import styled from "styled-components";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function Categories({ categories }) {
  const parent = [];
  const root = [];

  categories.forEach((category) => {
    if (category.parent) {
      parent.push(category);
    } else {
      root.push(category);
    }
  });

  console.log(root);
  return (
    <>
      {root.map((r) => (
        <StyledProductsGrid key={r._id}>
          {r.name}
          {parent.map((p) => {
            if (p.parent === r._id) {
              return <div key={p._id}>{p.name}</div>;
            }
            return null;
          })}
        </StyledProductsGrid>
      ))}
    </>
  );
}
  
 