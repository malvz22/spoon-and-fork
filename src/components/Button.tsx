const Button = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button className="text-black border-solid border-[1px] border-[#CCCCCC] px-6 py-3 rounded-[12px] justify-center flex flex-row gap-3 items-center hover:bg-[#F15025] hover:text-white hover:border-[#F15025] transition-all duration-500">
      {children}
    </button>
  );
};

export default Button;
