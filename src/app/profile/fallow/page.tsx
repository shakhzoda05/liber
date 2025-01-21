import React from "react";

const Fallow = () => {
  return (
    <>
      <div>
        <h2 className="rounded-[12px] pl-[32px] bg-[#FF7F4D] pt-[32px] pb-[79px] w-[966px] font-[700] text-[#fff] text-[26px]">
          Узингиз севган булимга обуна бўлинг
        </h2>
      </div>
      <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold text-[30px] mt-[55px]">
          Обуна
        </h2>
        <div className="mt-[30px] mb-[24px]">
          <label
            htmlFor="subscription-duration"
            className=""
          >
            Обуна давом этиш вакти
          </label>
          <select
            name="30 kun"
            id="subscription-duration"
            className="block outline-none w-[343px] border-[1px] border-solid border-[#e1e1e1] rounded-[8px] py-[10px] px-[12px] "
          >
            <option value="30">30 кун</option>
            <option value="60">60 кун</option>
            <option value="90">90 кун</option>
          </select>
          <label
            htmlFor="knowledge-duration"
            className="block  text-[16px] mb-[8px]"
          >
            Булимни танланг
          </label>
          <select
            name="knowledge"
            id="knowledge-duration"
            className="block outline-none w-[343px] border-[1px] border-solid border-[#e1e1e1] rounded-[8px] py-[10px] px-[12px]"
          >
            <option value="math">
              Фантастика
            </option>
            <option value="Adabiyot">
              Adabiyot
            </option>
            <option value="love">
              Sevgi va aql
            </option>
            <option value="She'r">She'r</option>
            <option value="Тарих">Тарих</option>
          </select>
        </div>
      <div>
        <h2 className="font-bold text-[20px] text-[#11142d]">Обуна 30 кун давом этади</h2>
      </div>
      </div>

      <div className="flex py-[16px] bg-[#f5f5f5] items-center">
        <div className="mr-[145px]">
          <p className="font-[500] text-[14px] text-[#242424] pb-[16px]">Бошланиш вакти</p>
          <p className="pb-[16px] font-[500] text-[14px] text-[#242424]">Якунланиш вакти</p>
          <p className="font-[500] text-[14px] text-[#242424]">Обуна нархи</p>
        </div>
        <div>
          <p className="pb-[16px] font-[700] text-[14px] text-[#242424]">12/09/2021</p>
          <p className="pb-[16px] font-[700] text-[14px] text-[#242424]">12/10/2021</p>
          <p className="font-[700] text-[14px] text-[#3f51b5]">12 000 сум</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Fallow;
