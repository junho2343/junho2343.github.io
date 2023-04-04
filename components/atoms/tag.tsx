type Props = {
  tagName: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  selected?: boolean;
  hover?: boolean;
};

const Tag = ({ tagName, onClick, hover, selected }: Props) => {
  return (
    <span
      className={`bg-slate-100 p-1.5 mr-1 mt-1 rounded text-xs font-normal 
      ${hover && "cursor-pointer"} 
      ${selected && "bg-secondary text-white"}
      
      `}
      onClick={onClick}
    >
      #{tagName}
    </span>
  );
};

export default Tag;
