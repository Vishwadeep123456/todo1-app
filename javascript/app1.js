// Razorpay Order बनाने का API call
fetch("https://api.razorpay.com/v1/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic YOUR_API_KEY",
  },
  body: JSON.stringify({
    amount: 50000, // ₹500.00
    currency: "INR",
    receipt: "order_rcptid_11",
  }),
})
.then(res => res.json())
.then(data => console.log(data));
