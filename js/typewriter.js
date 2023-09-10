var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome to <strong>GK Enterprise</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('We are in import Export Business')
    .pauseFor(2500)
    .deleteAll()
    .typeString('500+ Happy Customers')
    .pauseFor(2500)
    .start();