var glorp = React.createElement;

var LilComponent = () => {
    return glorp('div', null,
        glorp('h1', null, 'we\'re glorping')
    );
}

var MediumComponent = () => {
    return glorp('div', { className: 'greeting' },
        glorp(LilComponent, null),
        glorp(LilComponent, null),
        glorp(LilComponent, null),
        glorp(LilComponent, null)
    );
}

ReactDOM.render(
    glorp(MediumComponent),
    document.getElementById('app')
);