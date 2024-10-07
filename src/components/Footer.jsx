import { useState } from "react";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      setStatus('Loading...');
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users/subscribe`, { email });
      if (response.status === 200) {
        setStatus('Subscription successful!');
        setEmail(''); // Reset the email input
      } else {
        setStatus('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error(error)
      setStatus('Subscription failed. Please try again.');
    }
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
        {status && <p>{status}</p>}
      </div>
      <p className="pt-5 md:pt-0 ml-5">
        Copyright ©{" "}
        <a href="https://github.com/shakey343" target="_blank" rel="noreferrer" className="hover:text-claraRed">
          <strong>Jake Pople</strong>
        </a>{" "}
        (aka Broski)
      </p>
    </div>
  );
};

export default Footer;
