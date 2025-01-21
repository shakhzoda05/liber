import Link from "next/link";
import React from "react";
import { Profiledetail } from "./_components/profiledetail";
import { FallowIcon } from "../../../public/icons/FallowIcon";
import { PriceIcon } from "../../../public/icons/priceIcon";
import { BooksIcon } from "../../../public/icons/BooksIcon";
import { SettingsIcon } from "../../../public/icons/SettingsIcon";
import { SaveIcon } from "../../../public/icons/SaveIcon";

const ProfileLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="container">
      <Profiledetail />
      <div className=" pt-[60px] flex ">
        <div className=" bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] w-[288px]  mr-[32px] pt-[28px]  flex flex-col gap-[7px] ">
          <Link className="flex items-center gap-[16px]" href={"/profile/fallow"}><FallowIcon/> Обуна бўлиш</Link>
          <Link className="flex items-center gap-[16px]" href={"/profile/price"}><PriceIcon/> Э-Хисоб</Link>
          <Link className="flex items-center gap-[16px]" href={"/profile/books"}><BooksIcon/> Китобларим</Link>
          <Link className="flex items-center gap-[16px]" href={"/profile/save"}> <SaveIcon  /> Сақланганлар</Link>
          <Link className="flex items-center gap-[16px]" href={"/profile/setings"}><SettingsIcon/> Созламалар</Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
