import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colours/Colours";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="w-[15%] fixed h-full border-r-2 border-[#e5e5e5] z-[3] flex flex-col items-center">
        {/* <div className="mb-16">
          <h1 className="mt-[1.3rem]">🛒</h1>
        </div> */}
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;