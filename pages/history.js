import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import Title from "@/components/Title";
import HistoryList from "@/components/HistoryList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HistoryPage() {

  const [orders,setOrders] = useState([]);
  useEffect(()=>{
    axios.get('/api/orders').then(response => {
      setOrders(response.data);
    });
  }, [])

  return (
    <>
      <Header />
      <Center>
        <Title>History</Title>
        {orders.length > 0? (
          <HistoryList orders={orders} />
        ) : (
          <p>Your order cart is empty.</p>
        )}
      </Center>
    </>
  );
}

// export async function getServerSideProps() {
//   await mongooseConnect();
//   // Fetch orders from the database
//   const orders = await Order.find({ account:  }, null, { sort: { '_id': -1 } });

//   return {
//     props: {
//       orders: JSON.parse(JSON.stringify(orders)),
//     },
//   };
// }
