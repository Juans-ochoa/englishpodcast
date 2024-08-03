import { SIDEBARLINKS } from "@/constants";
import Link from "next/link";
import ItemSideBar from "./ItemSideBar";

const LeftSideBar = () => {
  return (
    <aside>
      <nav className="flex flex-col gap-6">
        <Link href="/">Home</Link>
        {SIDEBARLINKS.map((item) => (
          <ItemSideBar {...item} key={item.label} />
        ))}
      </nav>
    </aside>
  );
};

export default LeftSideBar;
