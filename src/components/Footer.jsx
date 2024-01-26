const Footer = () => {
  return (
    <div className="absolute w-full bottom-0 flex flex-col items-center justify-between md:items-end md:flex-row px-10 text-white font-mono p-5">
      <div className="lg:ml-36">
        <h2 className="text-2xl">Subscribe to my Newsletter</h2>
        <form action="" className="border-2 border-white bg-black/50 flex justify-between px-4 focus">
          <input type="email" placeholder="Email Address" className="py-2 bg-transparent focus:outline-none" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <p className="pt-5 md:pt-0">
        Copyright ©{" "}
        <a href="https://github.com/shakey343" target="_blank" rel="noreferrer">
          <strong>Jake Pople</strong>
        </a>{" "}
        aka Broski
      </p>
    </div>
  );
};

export default Footer;
