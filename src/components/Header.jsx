import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-200 grid place-items-center">
      <div className="flex items-center m-10">
        <svg
          style={{ width: "50px", height: "50px" }}
          fill="black"
          viewBox="0 0 32 32"
          version="1.1"
          aria-labelledby="unsplash-home"
          aria-hidden="false"
        >
          <desc lang="en-US">Unsplash logo</desc>
          <title id="unsplash-home">Unsplash Home</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
        </svg>
        <h1 className="mx-5 text-5xl font-bold">UnSplash.com</h1>
      </div>
    </div>
  );
};

export default Header;

{
  /* <svg width="26" height="26" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en-US">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg> */
}
