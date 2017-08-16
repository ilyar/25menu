block('status').content()(function() {
    return [
    {
      block: 'title',
      mix: { block: 'status', elem: 'title' },
      content: 'Статус заказа'
    },
    {
      elem: 'delivery-info',
      content: [
      {
        elem: 'time-box',
        content: [
        {
          block: 'order-step',
          mods: {
            type: 'passed'
          },
          content: 'Получили заказ'
        },
        {
          block: 'order-step',
          mods: {
            type: 'active'
          },
          content: 'Подтверждаем'
        },
        {
          block: 'order-step',
          content: 'Готовим'
        },
        {
          block: 'order-step',
          content: 'Везём'
        },
        {
          block: 'order-step',
          content: 'Приятного аппетита'
        }
        ]
      },
      {
        elem: 'actual-time',
        content: [
        {
          elem: 'offer-time',
          content: [
          'Время доставки: ',
          {
            block: 'status-delivery-time',
            content: '45'
          },
          'мин'
          ]
        },
        {
          elem: 'remain-time',
          content: [
          'Осталось, мин:',
          {
            elem: 'timer',
            content: '00:00'
          }
          ]
        }
        ]
      }
      ]
    },
    {
      block: 'goods',
      content: [
      {
        block: 'title',
        mix: { block: 'goods', elem: 'title' },
        content: [
        'Заказ от',
        {
          elem: 'order-date',
          content: '29 августа'
        },
        {
          elem: 'order-time',
          content: '14:20'
        }
        ]
      },
      {
        elem: 'line',
        tag: 'hr'
      },
      {
        block: 'current-order',
        content: [
        {
          block: 'goods-result',
          content: [
          {
            elem: 'quantity',
            content: '8 блюд '
          },
          {
            elem: 'weight',
            content: '1200 г.'
          }
          ]
        },
        {
          block: 'slider',
          mods: {
            type: 'order'
          }
        }
        ]
      },
      {
        elem: 'line',
        tag: 'hr'
      },
      {
        block: 'order-info',
        content: [
        {
          elem: 'number',
          content: [
          {
            block: 'title',
            content: 'Номер'
          },
          {
            elem: 'text',
            content: '1567868'
          }
          ]
        },
        {
          elem: 'guest',
          content: [
          {
            block: 'title',
            content: 'Получатель'
          },
          {
            elem: 'text',
            content: [
            {
              block: 'order-info-name',
              content: 'Александр'
            },
            {
              block: 'order-info-phone',
              content: '8 (911) 987-65-43'
            }
            ]
          }
          ]
        },
        {
          elem: 'address',
          content: [
          {
            block: 'title',
            content: 'Адрес'
          },
          {
            elem: 'text',
            content: 'Ул. Кораблестроителей, д. 6, кв. 256, корпус 2'
          }
          ]
        },
        {
          elem: 'time',
          content: [
          {
            block: 'title',
            content: 'Время доставки'
          },
          {
            elem: 'text',
            content: '29 августа 15:05'
          }
          ]
        },
        {
          elem: 'price',
          content: [
          {
            block: 'title',
            content: 'Оплата'
          },
          {
            elem: 'text',
            content: [
            {
              block: 'order-info-price-block',
              content: ['1490 Р']
            },
            {
              block: 'order-info-discount',
              content: ['Скидка 150 Р']
            },
            {
              block: 'order-info-pay',
              content: ['Картой курьеру']
            }
            ]
          }
          ]
        }
        ]
      }
      ]
    }
    ]
});
