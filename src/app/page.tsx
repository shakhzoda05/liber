import Link from "next/link";
import { HeaderData } from "./data/data";
export default function Home() {
  return (
    <>
      <div className="container pt-[21px] flex">
        {HeaderData.map((item) => {
          return (
            <div
              key={item.id}
              className=" pl-[20px] font-[600]text-[16px] text-[#3f51b5] "
            >
              <Link href={item.href}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
