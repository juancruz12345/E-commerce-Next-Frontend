
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Link from 'next/link';

export function CheckoutPaypal({ user, items, total  }){

  const userId=user.id

  const createOrder = async () => {
    console.log("Enviando solicitud a create-order con:", {
      total, userId, items
    });
    
    try {
      const response = await fetch("http://localhost:5000/create-paypal-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount:total, user_id:userId, items }),
      });

      const order = await response.json();
      console.log(order)
      if (!order.id) throw new Error("No se recibió un orderID válido");

      return order.id; // ✅ Devuelve el ID de la orden creada
    } catch (error) {
      console.error("Error en createOrder:", error);
    }
  };

  const captureOrder = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      const capturedData = await response.json();
      if (capturedData.success) {
        
        window.location.href = "/success"
      } else {
        alert("⚠️ Hubo un problema con el pago. Inténtalo de nuevo.");
      }
    } catch (error) {
      alert("❌ Error al capturar el pago.");
    }
  };
  
  return (
   <div>
  
     <PayPalScriptProvider options={{clientId:'ATT6gWFFalCnpCtsZwydyqo4IylwXsr689G8LsaGWEj20geIN0U9w9cdaTdvN3puhf6WjlR215VPJXJr'}}>
       
       <PayPalButtons
       createOrder={async () => await createOrder()}
       onApprove={async (data) => await captureOrder(data)}
     />
     </PayPalScriptProvider>
   </div>
  );

}


