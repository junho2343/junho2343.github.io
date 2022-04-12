import ListWrap from "components/UI/molecules/ListWrap";
import TitleWrap from "components/UI/molecules/TitleWrap";
import { ListType } from "data";

interface IProps {
  data: ListType;
}

function Career({ data }: IProps) {
  return (
    <>
      <TitleWrap title="경력" />
      <ListWrap data={data} />
    </>
  );
}

export default Career;
