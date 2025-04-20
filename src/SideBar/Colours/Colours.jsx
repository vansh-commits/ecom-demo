import Input from "../../components/Input";
import React from "react";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="text-[22px] font-normal mb-5 mt-8">Colors</h2>
        <label className="block relative pl-[35px] mb-3 cursor-pointer select-none">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="top-0 bg-[#eee] absolute left-0 h-[20px] w-[20px] bg-gradient-to-b from-blue-500 to-crimson rounded-full"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="block relative pl-[35px] mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-full"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;