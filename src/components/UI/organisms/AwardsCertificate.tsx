import ListWrap from "components/UI/molecules/ListWrap";
import TitleWrap from "components/UI/molecules/TitleWrap";
import { ListType } from "data";

interface IProps {
  data: ListType;
}

function AwardsCertificate({ data }: IProps) {
  return (
    <>
      <TitleWrap title="수상 & 자격증" />
      <ListWrap data={data} />
    </>
  );
}

export default AwardsCertificate;
