import { Footer, Navbar } from "../component";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen gap-[100px]">
      <div className="max-w-[1216[px] min-w-[1216px] m-auto flex-col gap-[100[px] flex-grow">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
