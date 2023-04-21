const { htmlTextContent } = require('./index.js');

function foo() {
  const bar = htmlTextContent('<p>bar</p>');
  console.log(bar);
}

foo();
