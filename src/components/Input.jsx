const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="block relative pl-[35px] mb-3 cursor-pointer select-none">
      <input className="absolute opacity-0 cursor-pointer" onChange={handleChange} type="radio" value={value} name={name} />
      <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-full" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
