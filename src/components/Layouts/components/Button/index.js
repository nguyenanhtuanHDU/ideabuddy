import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
  primary,
  outline,
  large,
  onClick,
  target,
  to,
  href,
  children,
}) {
  let Tag = 'button'

  const _props = {
    onClick,
    target,
  }

  if (to) {
    Tag = Link
  } else if (href) {
    Tag = 'a'
  }

  return (
    <Tag
      className={cx('wrapper', { primary, outline, large })}
      {..._props}
    >
      {children}
    </Tag>
  )
}

export default Button
