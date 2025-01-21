import React from "react";
import { Logo } from "../../../../public/icons/logo";
import ArrowIcon from "../../../../public/icons/arrowIcon";
import { RukunICon } from "../../../../public/icons/rukunICon";
import Link from "next/link";
import { SerachIcon } from "../../../../public/icons/serachIcon";
import { FlagIcon } from "../../../../public/icons/flagIcon";
import PersonIcon from "../../../../public/icons/personIcon";

export const Header = () => {
  return (
    <div className="container">
      <div className="pt-[22px] flex justify-center items-center">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="pl-[46px] pr-[4px]">
          <label
            className="w-[180px] rounded-r-[0] rounded-[14px] justify-center flex items-center border-[1px] border-solid border-[#e1e1e1]"
            htmlFor="language-select"
          >
            <RukunICon />
            <p className="pl-[12px] py-[12px] pr-[16px] ">
              Рукнлар
            </p>
            <ArrowIcon />
          </label>
        </div>
        <form className="w-[555px] border-solid border-[1px] mr-[64px] rounded-l-[0] rounded-[14px] border-[#e1e1e1] flex items-center">
          <input
            className="w-full py-[12px] pl-[40px] pr-[10px] outline-none bg-inherit"
            type="search"
            placeholder="Қидириш"
          />
          <button
            type="button"
            className="ml-auto pr-[10px] h-[48px] border-l-[1px] border-solid border-[#e1e1e1] pl-[19px]"
          >
            <SerachIcon />
          </button>
        </form>
        <div>
          <label className="px-[16px] rounded-[14px] bg-[#eef4ff] flex items-center ">
            <FlagIcon />{" "}
            <p className="pl-[9px] py-[9px] pr-[8px]">
              Ўз
            </p>
            <ArrowIcon />
          </label>
        </div>
        <div className="ml-[20px] rounded-[14px] bg-[#3f51b5] flex items-center">
          <Link
            className="py-[7px] px-[24px] flex items-center"
            href={"/profile"}
          >
            <PersonIcon />
            <span className="pl-[12px] text-[#fff]">
              Профил
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
