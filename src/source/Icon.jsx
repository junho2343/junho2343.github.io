// import ReDoc from '../images/ReDoc.png';

const iconMapData = {
    React: {
        background: '61DAFB',
        color: 'black'
    },
    'Next.js': {
        background: '000000',
        color: 'white'
    },
    'Node.js': {
        background: '339933',
        color: 'white'
    },
    Express: {
        background: '000000',
        color: 'white'
    },
    'Socket.io': {
        background: '010101',
        color: 'white'
    },
    Sass: {
        background: 'CC6699',
        color: 'white'
    },
    'C Sharp': {
        background: '239120',
        color: 'white'
    },
    'Amazon AWS': {
        background: '232F3E',
        color: 'white'
    },
    Mysql: {
        background: '4479A1',
        color: 'white'
    },
    PHP: {
        background: '777BB4',
        color: 'white'
    },
    JavaScript: {
        background: 'f7df1e',
        color: 'black'
    },
    'JSON Web Tokens': {
        background: '000000',
        color: 'white'
    },
    jQuery: {
        background: '0769AD',
        color: 'white'
    },
    Webpack: {
        background: '8DD6F9',
        color: 'black'
    },
    'Material-UI': {
        background: '0081CB',
        color: 'white'
    },
    'OpenAPI Initiative': {
        background: '6BA539',
        color: 'white'
    }
};

// const notExsitsIconMapData = {
//     ReDoc: {
//         img: ReDoc,
//         imgBackground: 'white',
//         background: '#7c8392',
//         color: 'white'
//     }
// };

function Icons({ target }) {
    // console.log(notExsitsIconMapData[target].ReDoc);
    return (
        <>
            {iconMapData[target] ? (
                <img
                    src={`https://img.shields.io/badge/${target}-${iconMapData[target].background}?style=flat-square&logo=${target}&logoColor=${iconMapData[target].color}`}
                    alt={target}
                />
            ) : (
                <span className="notExsitsIcon">{target}</span>
            )}
        </>
    );
}

export default Icons;
