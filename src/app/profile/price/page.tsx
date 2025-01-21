import React from "react";
import { PaymeiCon } from "../../../../public/icons/PaymeiCon";
import CilckIcon from "../../../../public/icons/CilckIcon";

const Price = () => {
  return <div className="pt-[32px] pb-[76px] px-[32px]  bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.06)]">
    <h2 className="font-bold text-[30px] mb-[20px]">Э-Хисоб</h2>

    <div className="bg-[#3F51B5] w-[906px] pl-[28px] pt-[16px] pb-[22px]  rounded-[20px]  ">
      <h3 className="text-[16px] font-[400] text-[#fff] ">Баланс</h3>
      <p className="pt-[12px] text-[24px] font-[700] text-[#fff] ">45 000 сўм</p>
    </div>
    <div className="cursor-pointer flex justify-center rounded-[20px] border-[2px] border-solid border-[#ededed] py-[21px] mt-[26px]">
      <PaymeiCon/>
    </div>
    <div className="flex cursor-pointer justify-center rounded-[20px] border-[2px] border-solid border-[#ededed] py-[19px] mt-[20px]">
      <CilckIcon/>
    </div>
  </div>;
};

export default Price;
