import test from 'ava'

import { htmlTextContent } from '../index.js'

test('test suite from native', (t) => {
  t.is(htmlTextContent('<p>hello</p>'), 'hello')
  t.is(htmlTextContent('<p>hello</p><p>world</p>'), 'hello world')
})
