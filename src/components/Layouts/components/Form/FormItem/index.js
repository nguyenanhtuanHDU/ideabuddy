import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useContext, useState } from 'react'
import { act } from 'react-dom/test-utils'

import styles from '../Form.module.scss'
const cx = classNames.bind(styles)

function FormItem({ labelText, type = 'text', TagName = 'input', big }) {
  const [activeLabel, setActiveLabel] = useState(false)
  const [activeLine, setActiveLine] = useState(false)
  const [noColor, setNoColor] = useState(false)
  return (
    <div
      className={cx('form-item', { big })}
      onClick={(e) => {
        setActiveLabel(true)
      }}
    >
      <label
        className={cx('form-label', { activeLabel, noColor })}
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <TagName
        id={labelText}
        className={cx('form-input')}
        required
        type={type}
        onFocus={(e) => {
          setActiveLabel(true)
          setActiveLine(true)
        }}
        onBlur={(e) => {
          if (e.target.value !== '') {
            setActiveLine(true)
            setActiveLabel(true)
          } else {
            setActiveLine(false)
            setActiveLabel(false)
          }
        }}
        onChange={(e) => {
          const valueInput = e.target.value
          console.log(valueInput)
          if (valueInput !== '') {
            setNoColor(true)
          } else {
            setNoColor(false)
          }
        }}
      />
      <div className={cx('line', { activeLine })}></div>
    </div>
  )
}

export default FormItem
