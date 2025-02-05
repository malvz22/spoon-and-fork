const Button = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="text-black border-solid border-[1px] border-[#CCCCCC] px-6 py-3 rounded-[12px] justify-center flex flex-row gap-3 items-center">
      {children}
    </div>
  );
};

export default Button;
