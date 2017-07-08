var LilComponent = () => {
    return React.createElement('div', null,
        React.createElement('h1', null, 'Hello, this is the smallest component. Look how we reproduce!')
    );
}

var MediumComponent = () => {
    return React.createElement('div', { className: 'greeting' },
        React.createElement(LilComponent, null),
        React.createElement(LilComponent, null),
        React.createElement(LilComponent, null),
        React.createElement(LilComponent, null)
    );
}

ReactDOM.render(
    React.createElement(MediumComponent),
    document.getElementById('app')
);