import emailjs from "@emailjs/browser";

const service = process.env.REACT_APP_EMAILJS_SERVICE;
const template = process.env.REACT_APP_EMAILJS_TEMPLATE;
const publicKey=process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
if (typeof service==="undefined") {
  throw new Error("Please provide emailJS env service");
}
if (typeof template === "undefined") {
  throw new Error("Please provide emailJS env template");
}
if (typeof publicKey === "undefined") {
  throw new Error("Please provide emailJS env public key");
}

export const sendEmail = async (
  name: string,
  phone: string,
  email: string,
  message: string
) => {
  await emailjs.send(
    service,
    template,
    {
      from_name: name,
      phone_number: phone,
      reply_to: email,
      message: message,
    },
    publicKey
  );
};
