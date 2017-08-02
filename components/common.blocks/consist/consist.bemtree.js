block('consist').content()(function() {
    return;
});


block('consist').mod('type', 'product').content()(function() {
    return [
    {
      block: 'ingridients',
      content: [
      {
        block: 'ingridient',
        elem: 'text',
        content: [
        'Томатный соус, брынза, базилик, сладкий перец, томаты, грибы,шампиньоны, красный лук,',
        {
          elem: 'remove',
          content: [ {
            block: 'remove',
            elem: 'text',
            content: ' моцарелла'
          },
          {
            block: 'close-btn',
            mods: {
              type: 'ingridient'
            }
          }
          ]
        },
        {
          elem: 'remove',
          content: [
          {
            block: 'remove',
            elem: 'text',
            content: ' маслины'
          },
          {
            block: 'close-btn',
            mods: {
              type: 'ingridient'
            }
          }
          ]
        }
        ]
      }
      ]
    },
    {
      elem: 'ingridient_add_button',
      elemMods: {
        type: 'add'
      },
      content: [
      {
        block: 'icon',
        mods: {
          symbol: 'add'
        },
        mix: { block: 'product', elem: 'add_ingridient' }
      },
      {
        block: 'select',
        mods: {
          mode: 'check',
          size: 'l',
          theme: 'islands'
        },
        name: 'select-ingridient',
        text: 'Добавки, от 10 Р',
        options: [
         {
             val: 1,
             text: 'Доклад'
         },
         {
             val: 2,
             text: 'Мастер-класс'
         },
         {
             val: 3,
             text: 'Круглый стол'
         }
        ]
      }
     ]
    }
  ]
});


