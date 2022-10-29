import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './NavItem.module.scss'

const cx = classNames.bind(styles)
const iconDown =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjQ4NDM3IDUuODAzODdDNC43NjU2MiA2LjA2NTM4IDUuMjM0MzcgNi4wNjUzOCA1LjUxNTYyIDUuODAzODdMOS43NjU2MiAxLjg1MjNDMTAuMDc4MSAxLjU2MTc0IDEwLjA3ODEgMS4xMjU5MSA5Ljc2NTYyIDAuODY0NDA1TDkuMDc4MTMgMC4xOTYxMjZDOC43NjU2MiAtMC4wNjUzNzUyIDguMjk2ODcgLTAuMDY1Mzc1MiA4LjAxNTYyIDAuMTk2MTI2TDQuOTg0MzcgMy4wMTQ1M0wxLjk4NDM3IDAuMTk2MTI2QzEuNzAzMTIgLTAuMDY1Mzc1MiAxLjIzNDM3IC0wLjA2NTM3NTIgMC45MjE4NzggMC4xOTYxMjZMMC4yMzQzNzQgMC44NjQ0MDVDLTAuMDc4MTI0NiAxLjEyNTkxIC0wLjA3ODEyNDYgMS41NjE3NCAwLjIzNDM3NCAxLjg1MjNMNC40ODQzNyA1LjgwMzg3WiIgZmlsbD0iI0MwQzBDMCIvPgo8L3N2Zz4K'

function NavItem({
  children,
  to,
  iconDownProp,
  hoverIconUp = false,
  active,
  fullLine,
  noLine,
  changeColor,
}) {
  return (
    <div className={cx('wrapper', { hoverIconUp, active })}>
      <Link
        className={cx('inner')}
        to={to}
      >
        <div className={cx('underline', { fullLine, noLine })}></div>
        <span className={cx('title', { changeColor })}>{children}</span>
        {iconDownProp && (
          <img
            style={{ marginTop: '1px', marginLeft: '5px' }}
            src={iconDown}
          />
        )}
      </Link>
    </div>
  )
}

export default NavItem
