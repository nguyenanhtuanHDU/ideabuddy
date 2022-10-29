import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { Fragment, useState } from 'react'

import styles from './Header.module.scss'
import images from '../../../../assets/images'
import NavItem from '../NavItem'
import Button from '../Button'
import Popper from '../Popper'

const cx = classNames.bind(styles)

function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img
              src={images.logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className={cx('nav')}>
          <Tippy
            interactive
            render={(attrs) => (
              <div
                tabIndex="-1"
                {...attrs}
              >
                <span>
                  <Popper>
                    <NavItem
                      noLine
                      changeColor
                      to={'/idea-plan'}
                    >
                      Idea Plan
                    </NavItem>
                    <NavItem
                      noLine
                      changeColor
                      to={'/whiteboard'}
                    >
                      Whiteboard
                    </NavItem>
                    <NavItem
                      noLine
                      changeColor
                      to={'/business-guide'}
                    >
                      Business Guide
                    </NavItem>
                    <NavItem
                      noLine
                      changeColor
                      to={'/financial-plan'}
                    >
                      Financial Plan
                    </NavItem>
                    <NavItem
                      noLine
                      changeColor
                      to={'/idea-validation'}
                    >
                      Idea Validation
                    </NavItem>
                    <NavItem
                      noLine
                      changeColor
                    >
                      Business Plan
                    </NavItem>
                  </Popper>
                </span>
              </div>
            )}
          >
            <div>
              <NavItem
                to="/product/idea-plan"
                iconDownProp
                hoverIconUp
                fullLine
              >
                <span style={{}}>Product</span>
              </NavItem>
            </div>
          </Tippy>
          <NavItem noLine>
            <span>Pricing</span>
          </NavItem>
          <NavItem
            iconDownProp
            hoverIconUp
          >
            <span>Solutions</span>
          </NavItem>
          <NavItem
            iconDownProp
            hoverIconUp
          >
            <span style={{}}>More</span>
          </NavItem>
        </div>
        <div className={cx('account')}>
          <Button>Log in</Button>
          <Button primary>Try for free</Button>
        </div>
        <div
          className={cx('bars', { toggle: toggle })}
          onClick={() => {
            console.log('run')
            setToggle(!toggle)
          }}
        >
          <div className={cx('line', 'line-1')}></div>
          <div className={cx('line', 'line-2')}></div>
          <div className={cx('line', 'line-3')}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
