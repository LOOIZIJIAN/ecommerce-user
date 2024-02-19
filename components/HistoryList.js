// import styled from "styled-components";
// import { useSession } from "next-auth/react";
// import { useState, useEffect } from "react";

// const StyledProductsGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//   }
// `;

// export default function HistoryList({orders}) {
//   const [account, setAccount] = useState('');
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (session && session.user && session.user.email) {
//       const userEmail = session.user.email;
//       setAccount(userEmail);
//     }
//   }, [session]);

//   return (
//     <StyledProductsGrid>
//       {orders?.length > 0 &&
//         orders.filter(order => order.account === account).map(order => (
//         <tr>
//           <td>{order.paid ? 'YES' : 'NO'}</td>
//           <td>{order.line_items.map(l => (
//                 <>
//                   {l.price_data?.product_data.name}
//                   {l.quantity}<br />
//                 </>
//               ))}
//           </td>
//         </tr>

//       ))}
//     </StyledProductsGrid>
//   );
// }
