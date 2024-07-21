import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/subscribe`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <div className="absolute w-full bottom-0 text-center sm:text-left flex flex-col items-center justify-between pt-5 pb-16 px-8 sm:px-10 sm:pb-5 text-white font-mono md:items-end md:flex-row">
      <div className="lg:ml-36">
        <h2 className="text-2xl">Subscribe to my Newsletter</h2>
        <form
          onSubmit={handleSubscribe}
          className="border-2 border-white bg-black/50 flex justify-between px-4 focus"
        >
          <input
            type="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="py-2 bg-transparent focus:outline-none"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <p className="pt-5 md:pt-0 ml-5">
        Copyright ©{" "}
        <a href="https://github.com/shakey343" target="_blank" rel="noreferrer" className="hover:text-claraOrange">
          <strong>Jake Pople</strong>
        </a>{" "}
        (aka Broski)
      </p>
    </div>
  );
};

export default Footer;
