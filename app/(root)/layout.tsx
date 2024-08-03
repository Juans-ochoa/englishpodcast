import LeftSideBar from "@/components/sideBars/LeftSideBar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex">
      <LeftSideBar />
      {children}
    </section>
  );
}

export default RootLayout;
