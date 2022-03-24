import { CareerType } from "../../../../data";
import Text from "../../atom/Text";
import TitleWrap from "../../molecules/TitleWrap";

interface IProps {
  data: CareerType;
}

function Career({ data }: IProps) {
  return (
    <>
      <TitleWrap title="경력" />
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
    </>
  );
}

export default Career;
