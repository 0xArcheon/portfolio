import React from "react";

function MainBanner() {
  return (
    <div className="flex space justify-around p-20 text-xl font-extrabold text-text font-cocogothic">
      <div className="w-1/2 flex-col flex justify-center">
        <span className="text-3xl">
          <span className="p-2 text-xl">Hi, I am</span>
          <br />
          <div className="text-7xl drop-shadow-3xl">Amlan</div>
        </span>
        <span className="text-xl">
          I am a dedicated software application support engineer with a passion
          for crafting web solutions
        </span>
        <div>
          <button
            className="bg-primary text-white px-10 py-5 rounded-full mt-5 ease-in-out duration-300
          shadow-[5px_5px_0px_0px_#282825] hover:-translate-x-1.5 hover:-translate-y-1.5
          hover:shadow-[10px_10px_0px_0px_#282825]"
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className="photo w-1/3">
        <div>
          <img
            src="../public/graphic.jpg"
            alt=""
            className="rounded-full shadow-[0px_0px_0px_0px_#282825] ease-in-out duration-300 
            hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_#282825]"
          />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
