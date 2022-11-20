import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons'

import classNames from 'classnames/bind'
import { logo2 } from '../../../../assets/images'
import Form from '../Form'

import styles from './Footer.module.scss'
import { createContext, useContext, useState } from 'react'
import { faL } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
export const FormContext = createContext()

function Footer() {
  const [formFooterToggle, setFormFooterToggle] = useState(false)
  return (
    <FormContext.Provider value={{ formFooterToggle, setFormFooterToggle }}>
      <div className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('main')}>
            <div className={cx('logo')}>
              <img
                alt="logo"
                src={logo2}
              />
            </div>
            <div className={cx('discription')}>
              Innovative business planning software for entrepreneurs, startups
              and business organizations
            </div>
          </div>
          <div className={cx('navigation')}>
            <div className={cx('navigation-item')}>
              <ul>
                <li className={cx('footer-heading')}>
                  <p>Product</p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/product/idea-plan'}>Idea Plan</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/product/whiteboard'}>Whiteboard</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/product/business-guide'}>Business Guide</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/product/idea-validation'}>Idea Validation</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/product/financial-plan'}>Financial Plan</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/product/business-plan'}>Business Plan</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/pricing'}>Pricing</Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className={cx('navigation-item')}>
              <ul>
                <li className={cx('footer-heading')}>
                  <p>Solutions</p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/solutions/startups-and-enterpreneurs'}>
                      Entrepreneurs & Startups
                    </Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/solutions/incubators-and-accelerators'}>
                      Incubators & Accelerators
                    </Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/solutions/business-schools'}>
                      Business Schools
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className={cx('navigation-item')}>
              <ul>
                <li className={cx('footer-heading')}>
                  <p>Company</p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/about-us'}>About Us</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/affiliate-program'}>Affiliate Program</Link>
                  </p>
                </li>
                <li className={cx('menu-item')}>
                  <p>
                    <Link to={'/write-for-us'}>Write For Us</Link>
                  </p>
                </li>
                <li
                  className={cx('menu-item')}
                  onClick={() => {
                    setFormFooterToggle(true)
                  }}
                >
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>
            <div className={cx('navigation-item')}>
              <ul>
                <li className={cx('footer-heading')}>
                  <p>Resources</p>
                </li>
                <li className={cx('menu-item')}>
                  <p>Help Center</p>
                </li>
                <li className={cx('menu-item')}>
                  <p>IdeaBuddy Blog</p>
                </li>
                <li className={cx('menu-item')}>
                  <p>Liveplan Alternative</p>
                </li>
              </ul>
              <div className={cx('social')}>
                <p className={cx('social-heading', 'footer-heading')}>
                  Follow us
                </p>
                <div className={cx('social-list')}>
                  <div className={cx('social-item')}>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </div>
                  <div className={cx('social-item')}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div className={cx('social-item')}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('bottom-list')}>
            <div className={cx('bottom-item')}>
              <p>© IdeaBuddy 2022, All Rights Reserved</p>
            </div>
            <div className={cx('bottom-item')}>
              <div className={cx('item')}>
                <Link to={'/terms-of-service'}>Terms of Service</Link>
              </div>
              <div className={cx('line')}>|</div>
              <div className={cx('item')}>
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
              </div>
              <div className={cx('line')}>|</div>
              <div className={cx('item')}>
                <Link to={'/cookie-statement'}>Cookie Statement</Link>
              </div>
            </div>
          </div>
        </div>
        {formFooterToggle && <Form />}
      </div>
    </FormContext.Provider>
  )
}

export default Footer
