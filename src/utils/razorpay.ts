declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
};

export const initializeRazorpayPayment = async (
  amount: number,
  orderId: string,
  currency: string = 'INR'
) => {
  await loadRazorpayScript();

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: amount * 100, // Razorpay expects amount in paise
    currency,
    name: 'Knight Katalista',
    description: 'Premium Bedding Purchase',
    order_id: orderId,
    handler: function (response: any) {
      // Handle successful payment
      console.log('Payment successful:', response);
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
    },
    theme: {
      color: '#111827',
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};