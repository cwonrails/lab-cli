import test from 'ava'
import createModules from '../lib'

const config = [
  {
    name: 'Box',
    type: 'div',
    props: {
      bg: 'tomato',
      ml: [2, 3, 4]
    },
    style: {
      'text-transform': 'uppercase',
      'text-align': 'right'
    },
    examples: [
      '<Box>A</Box>',
      '<Box center>B</Box>'
    ]
  }
]

const theme = {
  space: [2, 4, 8, 16, 32, 64]
}

test('adds expected classes to elements', t => {
  const result = createModules(config, {
    library: 'atomic',
    theme
  })

  t.snapshot(result)
})
