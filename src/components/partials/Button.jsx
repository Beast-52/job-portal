const Button = ({ item, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
      <div className="relative px-6 py-2 bg-black text-white rounded-full text-xs md:text-sm font-medium tracking-wider transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500">
        {item}
      </div>
    </div>
  );
};

export default Button;