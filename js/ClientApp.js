var glorp = React.createElement;

// please include a title
var TitleComponent = (props) => {
    return glorp('div', null,
        glorp('h1', null, props.title)
    );
}

// please include num1 and num2
var AdditionComponent = (props) => {
    return glorp('div', { className: 'math' },
        props.num1 + props.num2
    )
}

var MediumComponent = () => {
    return glorp('div', { className: 'greeting' },
        glorp(TitleComponent, { title: 'Wuthering Heights' }),
        glorp(AdditionComponent, { num1: 5, num2: 6 }),
    );
}

ReactDOM.render(
    glorp(MediumComponent),
    document.getElementById('app')
);