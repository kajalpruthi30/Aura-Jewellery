import { useState } from "react";
import toast from "react-hot-toast";

const useTwilio = () => {

  const sendMessage = async ({ selectedCountry, phoneNumber, message }) => {

    const success = handleInputErrors({ phoneNumber });
    if (!success) return;

    try {

      const res = await fetch("/api/twilio/send-message", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ selectedCountry, phoneNumber, message }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      } else {
        toast.success("Message sent");
      }
    } catch (error) {
      toast.error(error.message);
    } 
  };

  return {sendMessage };
};

export default useTwilio;

function handleInputErrors({ phoneNumber }) {
  if (!phoneNumber) {
    toast.error("Please enter phone number");
    return false;
  }
  return true;
}
