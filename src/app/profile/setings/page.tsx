import React from "react";
import { ImgPersonIcon } from "../../../../public/icons/imgPersonIcon";

const Setings = () => {
  return (
    <div>
      <h2 className="font-bold text-[30px] mb-[20px]">
        Созламалар
      </h2>

      <form
        action=""
        className="flex flex-col gap-[16px]"
      >
        <div className="flex items-center gap-[12px]">
          <ImgPersonIcon />
          <label
            htmlFor="file-upload"
            className="text-[16px] text-[#3f51b5] cursor-pointer"
          >
            Сурат юклаш
          </label>
        </div>
        <input
          type="file"
          id="file-upload"
          placeholder="Сурат юклаш"
          className="border-[1px] hidden border-solid border-[#e1e1e1] p-[8px] rounded-[8px] outline-none"
        />
      </form>
      <form className="mt-[42px]" action="">
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="name"
            className="text-[16px] font-semibold"
          >
            Исмингиз
          </label>
          <input
            type="text"
            id="name"
            placeholder="Исмингиз"
            className="border-[1px] border-solid border-[#e1e1e1] rounded-[16px] py-[10px] px-[12px] outline-none"
          />
          <button type="button" className="text-center w-[343px] py-[7px] text-[#fff] rounded-[14px] bg-[#3f51b5]">Сақлаш</button>
        </div>
      </form>
    </div>
  );
};

export default Setings;
