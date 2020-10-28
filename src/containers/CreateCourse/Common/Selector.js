import React, { forwardRef } from 'react'
// antd
import Select from 'antd/lib/select'
// helpers
import set from 'lodash/set'
import map from 'lodash/map'

const Selector = props => {
  const {
    options,
    has_parent,
    readOnly,
    inputRef: ref,
    ...attr
  } = props

  const children = map(options, ({ key, value }) => (
    <Select.Option value={key} children={value} />
  ))

  const propsSelect = {
    ref,
    children,
    ...attr
  }

  if (readOnly) set(propsSelect, 'open', false)

  return <Select {...propsSelect} />
}

const Category = forwardRef((props, inputRef) => {
    const options = [
        {
            key:1,
            value:'Aplicaciones moviles'
        },
        {
            key:2,
            value:'Negocio'
        },
        {
            key:3,
            value:'Diseño'
        },
        {
            key:4,
            value:'Fotografia'
        },
        {
            key:5,
            value:'Salud'
        }
    ]
    const propsCategory = {
        inputRef,
        ...props,
        options
    }

    return <Selector {...propsCategory} />
})

const Level = forwardRef((props, inputRef) => {
    const options = [
        {
            key:1,
            value:'Principiante'
        },
        {
            key:2,
            value:'Intermedio'
        },
        {
            key:3,
            value:'Avanzado'
        }
    ]
    const propsLevel = {
        inputRef,
        ...props,
        options
    }

    return <Selector {...propsLevel} />
})

export default { Category, Level }
