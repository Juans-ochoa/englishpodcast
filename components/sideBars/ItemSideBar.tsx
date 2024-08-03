"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ItemSideBar = ({
  label,
  imgURL,
  route,
}: {
  label: string;
  imgURL: string;
  route: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === route || pathname.startsWith(`${route}/`);

  return (
    <Link
      key={label}
      href={route}
      className={`flex gap-2 py-2 px-4 cursor-pointer ${
        isActive ? "bg-blue-950 border-r-4 border-orange-500" : ""
      }`}
    >
      <Image src={imgURL} width={24} height={24} alt={label} />
      <p>{label}</p>
    </Link>
  );
};

export default ItemSideBar;
