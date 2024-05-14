import React from 'react';
import { AiOutlineFileText } from "react-icons/ai";

const FAQItem = ({ text }) => (
  <div>
    <p style={{ fontSize: "15px", marginBottom: ".75rem", display: "flex", alignItems: "center", cursor: "pointer" }}>
      <span style={{ fontSize: "18px", display: "inline-block", marginRight: "0.5rem" }}><AiOutlineFileText /></span>
      {text}
    </p>
    <hr style={{ width: "calc(100% - 1.2rem)", marginBottom: ".5rem" }} />
  </div>
);

const FAQSection = ({ title, items }) => (
  <div>
    <h2 style={{ fontSize: "17px", fontWeight: "600", marginBottom: "1rem" }}>{title}</h2>
    {items.map((item, index) => (
      <FAQItem key={index} text={item} />
    ))}
  </div>
);

const Delivery = () => {
  const deliveryFAQs = [
    "My order is being returned to the sender, what happens now?",
    "How can I track my order?",
    "Why was my delivery returned to sender?",
    "Why have I not received my order yet?",
    "I need to change my delivery address."
  ];

  const deliveryTimeframesFAQs = [
    "United Kingdom Shipping & Delivery",
    "Switzerland Shipping & Delivery",
    "South Africa Shipping & Delivery",
    "Singapore & Malaysia Shipping & Delivery",
    "United States of America & Canada Shipping & Delivery",
    "Europe Shipping & Delivery"
  ];

  const clickAndCollectFAQs = [
    "Where is my Click and Collect order? I haven't received a notification.",
    "What is the Click and Collect Process (AUS Only)?"
  ];

  return (
    <div style={{ marginLeft: "6rem", marginRight: "10rem", marginTop: "3rem", letterSpacing: "0.5px" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: "600", marginBottom: "1rem" }}>Delivery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: "2px" }}>
        <FAQSection title="Delivery FAQs" items={deliveryFAQs} />
        <div className='mx-[5rem]'>
          <FAQSection title="Delivery Timeframes" items={deliveryTimeframesFAQs} />
          <div style={{ marginTop: "1.6rem" }}>
            <button style={{
              padding: ".7rem ",
              color: "white",
              backgroundColor: "rgb(255, 182, 158, 1)",
              border: "none",
              borderRadius: "5px",
              width: "8rem",
              fontSize: "13px"
            }}>See all 7 articles
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: "2px", margin: "5.5rem 0" }}>
        <FAQSection title="Click and Collect" items={clickAndCollectFAQs} />
      </div>
    </div>
  );
};

export default Delivery;
