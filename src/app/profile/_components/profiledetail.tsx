import React from "react";
import Image from "next/image";
import Logo from "../../../../public/icons/logo";
export const Profiledetail = () => {
  return <div className="container">
  <div className="pt-[52px] flex items-center  ">
    <Image
      src={Logo}
      alt="Profile Image"
      width={163}
      height={163}
      className="rounded-full mr-[33px]"
    />
    <div>
      <h1 className="font-[700] pb-[10px]  text-[30px] line-[133%]">
  Berdikulova Shaxzoda
       </h1>
      <p className="pb-[10px] font-[500]  text-[#242424] text-[20px] ">
        +998 50 150 xx xx
      </p>
      <p className="font-[500]  text-[#9a9a9a] text-[20px]">
        ID: 456 Баланс: 45 000 сўм{" "}
      </p>
    </div>
  </div>
</div>;
};
