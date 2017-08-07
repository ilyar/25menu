block('product').content()(function() {
    return [
    {
      block: 'close-btn',
      mods: {
        type: 'product'
      },
      mix: { block: 'product', elem: 'close' }
    },
    {
      elem: 'control',
      elemMods: {
        left: true
      },
      content: [
      {
        block: 'icon'
      }
      ]
    },
    {
      elem: 'control',
      elemMods: {
        right: true
      },
      content: [
      {
        block: 'icon'
      }
      ]
    },
    {
      elem: 'info',
      content: [
      {
        block: 'title',
        mix: { block: 'product', elem: 'title' },
        content: 'Котик няшечка в соусе'
      },
      {
        block: 'consist',
        mods: {
          type: 'product'
        }
      },
      {
        block: 'price',
        mods:{
          type: 'product'
        },
        mix: { block: 'product', elem: 'price-block' }
      },
      {
        block: 'description',
        content: [
        {
          elem: 'weight_special',
          content: '450 г.',
        },
        {
          block: 'link',
          url: '',
          content:[
          {
            block: 'icon'
          },
          'ОСТРОЕ'
          ],
          mix: { block: 'product', elem: 'filter' }
        },
        {
          block: 'link',
          url: '',
          content: [
          {
            block: 'icon'
          },
          'БЕЗ ГЛЮТЕНА'
          ],
          mix: { block: 'product', elem: 'filter' }
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsa ex ullam velit, dolores aliquam veritatis nostrum autem itaque dolorem facere similique sapiente, unde incidunt nulla tempora eligendi quos vero?'
        ]
      },
      {
        block: 'link',
        url: '',
        content: [
        'ПОДРОБНЕЕ',
        {
          block: 'icon'
        }
        ],
        mix: { block: 'product', elem: 'more' }
      }
      ]
    },
    {
      elem: 'image',
      content: [
      {
        block: 'image',
        url: 'http://lorempixel.com/476/476/cats'
      }
      ]
    }
    ]
});
