block('product').mod('type', 'shortview')(
  content()(function () {
    return [
    {
      block: 'image',
      url: 'http://lorempixel.com/40/40/cats'
    },
    {
      elem: 'short-counter',
      content: '2'
    }
    ]
  })
)
