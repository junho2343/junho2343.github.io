import Text from "components/UI/atom/Text";
import { ListType } from "data";

interface IProps {
  data: ListType;
}

function ListWrap({ data }: IProps) {
  return (
    <ul>
      {data.map((one, index) => (
        <li key={index}>
          <a href={one.href} target="_blank" rel="noreferrer">
            <Text inline fontWeight={400}>
              {one.name}
            </Text>
            <Text inline> | {one.period}</Text>
          </a>
          <ul>
            {one.summary &&
              one.summary.map((one, index) => (
                <li key={index}>
                  {typeof one === "string" ? (
                    one
                  ) : (
                    <a href={one.href} target="_blank" rel="noreferrer">
                      <Text fontWeight={400}>{one.text}</Text>
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ListWrap;
