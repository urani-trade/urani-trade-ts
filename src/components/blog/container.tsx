type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto p-5 flex flex-col justify-center">
      {children}
    </div>
  );
};

export default Container;
