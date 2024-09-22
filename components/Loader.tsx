import Image from "next/image";
import { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-50">
      <div className="w-[10vw] h-[10vw] bg-gray-300 rounded-full p-3">
        <Image
          src="/icons/munya_icon.png"
          width={500}
          height={500}
          alt="Bitmojie of Munya"
        />
      </div>
      <h3 className="text-white text-2xl font- mt-10">Munyaradzi Chiwundura</h3>
      <div className="w-72 rounded h-2 bg-gray-300 mt-10 flex">
        <div className="loading rounded h-2 bg-black "></div>
      </div>
    </div>
  );
};

export default Loader;
