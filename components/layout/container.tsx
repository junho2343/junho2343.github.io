type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`w-full max-w-3xl min-w-[320px] ${className} px-4`}>
      {children}
    </div>
  );
};

export default Container;
