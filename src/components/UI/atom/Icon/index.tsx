import Grid from "../Grid";

const iconMapData = {
  React: {
    background: "61DAFB",
    color: "black",
    origin: null,
  },
  "Next.js": {
    background: "000000",
    color: "white",
    origin: "nextdotjs",
  },
  "Node.js": {
    background: "339933",
    color: "white",
    origin: "nodedotjs",
  },
  Express: {
    background: "000000",
    color: "white",
    origin: null,
  },
  "Socket.io": {
    background: "010101",
    color: "white",
    origin: "socketdotio",
  },
  Sass: {
    background: "CC6699",
    color: "white",
    origin: null,
  },
  "C Sharp": {
    background: "239120",
    color: "white",
    origin: null,
  },
  "Amazon AWS": {
    background: "232F3E",
    color: "white",
    origin: null,
  },
  Mysql: {
    background: "4479A1",
    color: "white",
    origin: null,
  },
  PHP: {
    background: "777BB4",
    color: "white",
    origin: null,
  },
  JavaScript: {
    background: "f7df1e",
    color: "black",
    origin: null,
  },
  "JSON Web Tokens": {
    background: "000000",
    color: "white",
    origin: null,
  },
  jQuery: {
    background: "0769AD",
    color: "white",
    origin: null,
  },
  Webpack: {
    background: "8DD6F9",
    color: "black",
    origin: null,
  },
  "Material-UI": {
    background: "0081CB",
    color: "white",
    origin: null,
  },
  "OpenAPI Initiative": {
    background: "6BA539",
    color: "white",
    origin: null,
  },
  ReDoc: {
    background: "7c8392",
    color: "white",
    origin: null,
  },
  Docker: {
    background: "2496ED",
    color: "white",
    origin: null,
  },
  "GitHub Actions": {
    background: "2088FF",
    color: "white",
    origin: null,
  },
  NestJS: {
    background: "E0234E",
    color: "white",
    origin: null,
  },
  TypeScript: {
    background: "3178C6",
    color: "white",
    origin: null,
  },
  "Atomic Design": {
    background: "ebe9d3",
    color: "black",
    origin: null,
  },
  "styled-components": {
    background: "DB7093",
    color: "white",
    origin: null,
  },
};

export type IconType = keyof typeof iconMapData;

interface IProps {
  target: IconType;
}

function Icon({ target }: IProps) {
  // console.log(notExsitsIconMapData[target].ReDoc);
  return (
    <Grid display="inline-block" left={3}>
      {iconMapData[target] ? (
        <img
          src={`https://img.shields.io/badge/${target.replace("-", " ")}-${
            iconMapData[target].background
          }?style=flat-square&logo=${
            iconMapData[target]?.origin || target
          }&logoColor=${iconMapData[target].color}`}
          alt={target}
        />
      ) : (
        <span className="notExsitsIcon">{target}</span>
      )}
    </Grid>
  );
}
export default Icon;
