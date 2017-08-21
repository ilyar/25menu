block('price').js()( true )

block('price')(
  addJs()(
    {
      quantity: 1
    }
  )
)



block('price').mod('type', 'product')(
  addJs()(
    {
      quantity: 1
    }
  )
)



block('price').mod('type', 'basket')(
  addJs()(
    {
      quantity: 1
    }
  )
)
