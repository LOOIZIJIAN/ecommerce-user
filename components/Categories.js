import styled from "styled-components";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function Categories({categories}) {
  console.log(categories);
  return (
    <StyledProductsGrid>
      {categories?.length > 0 &&
        categories.map((category) => (
          <td>{category.parent}</td>
        ))  
      }
    </StyledProductsGrid>
  );
  
}