type Props = {
  name: string;
  picture: string;
  boldy?: boolean;
};

const Avatar = ({ name, picture, boldy }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className={`text-xl ${boldy ? "font-bold" : ""}`}>{name}</div>
    </div>
  );
};

export default Avatar;
