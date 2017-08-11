block('footer').content()(function() {
  return [
    {
        elem: 'first_row',
        content: [{
          elem: 'contacts',
          content: [
          {
            block: 'icon'
          },
          {
            elem: 'phone',
            content: [{
              block: 'link',
              content: '+7 812 200-20-30',
              url: 'tel:200-20-30'
            }]
          },
          {
            elem: 'workhours',
            content: 'с 10 до 23'
          }]
        },
        {
          block: 'link',
          url: '/',
          content: 'Доставка и оплата',
          mix: {block: 'footer', elem: 'delivery'}
        },
        {
          elem: 'social',
          content: [
          {
            block: 'link',
            mods: {
              type: 'vkontakte'
            },
            content: 'VK',
            url: 'http://vk.com'
          },
          {
            block: 'link',
            mods: {
              type: 'facebook'
            },
            content: 'FB',
            url: 'http://facebook.com'
          },
          {
            block: 'link',
            mods: {
              type: 'instagram'
            },
            content: 'IN',
            url: 'http://instagram.com'
          }
          ]
        }]
      },
      {
        elem: 'second_row',
        content: [
        {
          elem: 'feedback',
          content: [
            {
              block: 'icon'
            },
            {
              block: 'link',
              url: '/',
              content: 'Написать'
            }
          ]
        },
        {
          block: 'link',
          url: '/',
          content: 'Как мы готовим',
          mix: {block: 'footer', elem: 'faq'}
        }
        ]
      },
      {
        tag: 'hr'
      },
      {
        elem: 'third_row',
        content: [
        {
          elem: 'info',
          content: [
          {
            elem: 'copyright',
            content: '© 25 menu, 2017'
          },
          {
            block: 'link',
            content: 'Правовая информация',
            url: '/'
          }
          ]
        },
        {
          elem: 'payment_system',
          content: [
          {
            block: 'image',
            alt: 'MasterCard',
            url: '/'
          },
          {
            block: 'image',
            alt: 'Visa',
            url: '/'
          }
          ]
        },
        {
          elem: 'site_author',
          content: [
          'Cделано в',
          {
            block: 'link',
            url: 'http://breadhead.ru',
            content: 'Breadhead'
          }
          ]
        }
        ]
      }
    ]
  });
