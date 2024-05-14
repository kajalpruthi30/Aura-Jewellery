import React from 'react';
import { AiOutlineFileText } from "react-icons/ai";

const FAQItem = ({ text }) => (
  <div>
    <p style={{ fontSize: "14px", marginBottom: ".75rem", marginTop: ".75rem", display: "flex", alignItems: "center", cursor: "pointer" }}>
      <span style={{ fontSize: "16px", display: "inline-block", marginRight: "0.5rem" }}><AiOutlineFileText /></span>
      {text}
    </p>
    <hr style={{ width: "calc(100% - 1.2rem)", margin: "0" }} />
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

const OrderAndProduct = () => {
  const productFAQs = [
    "Do you sell Body Jewellery?",
    "Do you have jewellery for kids?",
    "Pricing Issues",
    "What styles are best for sensitive skin?",
    "Is your jewellery waterproof?"
  ];

  const sizeFAQs = [
    "The item I received is the wrong size."
  ];

  const faultyItemsFAQs = [
    "My item is now faulty, what should I do?",
    "I received a broken or faulty item."
  ];

  const orderIssueFAQs = [
    "I received the wrong item, what should I do?",
    "My item arrived damaged, how do I return it?",
    "I received the wrong order, what should I do?",
    "Why was I partially refunded?",
    "I am missing an item from my order, what should I do?",
    "Why was I partially refunded?"
  ];

  const cancelOrAmendFAQs = [
    "I need to change my delivery address.",
    "Can I add or remove items from my order?",
    "Can I cancel an order?"
  ];

  return (
    <div style={{ marginLeft: "6rem", marginRight: "10rem", marginTop: "3rem", letterSpacing: "0.5px" }}>
      <div>
        <h2 style={{ fontSize: "2rem", fontWeight: "semibold", marginBottom: "1rem" }}>Order & Product</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11rem', padding: "2px" }}>
          <FAQSection title="Our Products" items={productFAQs} />
          <FAQSection title="Incorrect Size" items={sizeFAQs} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11rem', padding: "2px", marginTop: "2.5rem" }}>
          <FAQSection title="Faulty Items" items={faultyItemsFAQs} />
          <FAQSection title="Order Issue" items={orderIssueFAQs} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: "2px", marginTop: "3rem", marginBottom: "7rem" }}>
          <FAQSection title="Cancel or Amend" items={cancelOrAmendFAQs} />
        </div>
      </div>
    </div>
  );
};

export default OrderAndProduct;