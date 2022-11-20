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
  const [toggleBars, setToggleBars] = useState(false)
  const [activeMenuWrapper, setActiveMenuWrapper] = useState(true)

  const handleMenu = (action) => {
    switch (action) {
      case 'show':
        setActiveMenuWrapper(true)
        setToggleBars(true)
        break
      case 'hide':
        setActiveMenuWrapper(false)
        setToggleBars(false)
        break
      case 'toggle':
        setActiveMenuWrapper(!activeMenuWrapper)
        setToggleBars(!toggleBars)
        break
      default:
        break
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img
              src={images.logo1}
              alt="logo"
            />
          </Link>
        </div>
        <div
          className={cx('menu-wrapper', { activeMenuWrapper })}
          onClick={(e) => {
            if (e.target.className.includes('Header_menu-wrapper')) {
              handleMenu('hide')
            }
          }}
        >
          <div className={cx('nav-account')}>
            <div className={cx('nav')}>
              <Tippy
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div
                    className={cx('subnav')}
                    tabIndex="-1"
                    {...attrs}
                  >
                    <Popper>
                      <NavItem
                        noLine
                        changeColor
                        to={'/product/idea-plan'}
                      >
                        Idea Plan
                      </NavItem>
                      <NavItem
                        noLine
                        changeColor
                        to={'/product/whiteboard'}
                      >
                        Whiteboard
                      </NavItem>
                      <NavItem
                        noLine
                        changeColor
                        to={'/product/business-guide'}
                      >
                        Business Guide
                      </NavItem>
                      <NavItem
                        noLine
                        changeColor
                        to={'/product/financial-plan'}
                      >
                        Financial Plan
                      </NavItem>
                      <NavItem
                        noLine
                        changeColor
                        to={'/product/idea-validation'}
                      >
                        Idea Validation
                      </NavItem>
                      <NavItem
                        noLine
                        changeColor
                        to={'/product/business-plan'}
                      >
                        Business Plan
                      </NavItem>
                    </Popper>
                  </div>
                )}
              >
                <div>
                  <NavItem
                    iconDownProp
                    hoverIconUp
                    fullLine
                  >
                    <span>Product</span>
                  </NavItem>
                </div>
              </Tippy>
              <NavItem to={'/pricing'}>
                <span>Pricing</span>
              </NavItem>

              <Tippy
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div
                    className={cx('subnav')}
                    tabIndex="-1"
                    {...attrs}
                  >
                    <div>
                      <Popper>
                        <NavItem
                          noLine
                          changeColor
                          to={'/solutions/startups-and-enterpreneurs'}
                        >
                          Entrepreneurs & Startups
                        </NavItem>
                        <NavItem
                          noLine
                          changeColor
                          to={'/solutions/incubators-and-accelerators'}
                        >
                          Incubators & Accelerators
                        </NavItem>
                        <NavItem
                          noLine
                          changeColor
                          to={'/solutions/business-schools'}
                        >
                          Business Schools
                        </NavItem>
                      </Popper>
                    </div>
                  </div>
                )}
              >
                <div>
                  <NavItem
                    iconDownProp
                    hoverIconUp
                  >
                    <span>Solutions</span>
                  </NavItem>
                </div>
              </Tippy>

              <Tippy
                interactive
                placement="bottom-start"
                render={(attrs) => (
                  <div
                    className={cx('subnav')}
                    tabIndex="-1"
                    {...attrs}
                  >
                    <div>
                      <Popper>
                        <NavItem
                          noLine
                          changeColor
                          href="https://blog.ideabuddy.com/?_ga=2.25921210.624343516.1667312031-206283270.1664722099"
                        >
                          Blog
                        </NavItem>
                        <NavItem
                          noLine
                          changeColor
                          href="https://help.ideabuddy.com/en/?_ga=2.268544502.624343516.1667312031-206283270.1664722099"
                        >
                          Help Center
                        </NavItem>
                      </Popper>
                    </div>
                  </div>
                )}
              >
                <div>
                  <NavItem
                    iconDownProp
                    hoverIconUp
                  >
                    <span>More</span>
                  </NavItem>
                </div>
              </Tippy>
            </div>
            <div className={cx('account')}>
              <Button responsive={'big-responsive'}>Log in</Button>
              <Button
                primary
                responsive={'big-responsive'}
              >
                Try for free
              </Button>
            </div>
          </div>
        </div>
        <button
          className={cx('bars', { toggle: toggleBars })}
          onClick={() => {
            handleMenu('toggle')
          }}
        >
          <div className={cx('line', 'line-1')}></div>
          <div className={cx('line', 'line-2')}></div>
          <div className={cx('line', 'line-3')}></div>
        </button>
      </div>
    </div>
  )
}

export default Header
