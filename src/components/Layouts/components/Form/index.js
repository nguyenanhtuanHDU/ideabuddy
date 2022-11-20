import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import styles from './Form.module.scss'
import { createContext, useContext, useState } from 'react'
import { FormContext } from '../Footer'
import FormItem from './FormItem'
const cx = classNames.bind(styles)

function Form() {
  const { formFooterToggle, setFormFooterToggle } = useContext(FormContext)
  const classesForm = cx('form')
  return (
    <div
      className={cx('wrapper')}
      onClick={(e) => {
        const typeClassName = e.target.className
        if (typeClassName.includes('inner')) {
          setFormFooterToggle(false)
        } else {
          setFormFooterToggle(true)
        }
      }}
    >
      <div className={cx('inner')}>
        <form
          action="/action_page.php"
          className={classesForm}
          onClick={(e) => {
            console.log(e.target.className)
            setFormFooterToggle(true)
          }}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <h1 className={cx('form-heading')}>Contact Us</h1>
          <p className={cx('form-title')}>
            Please fill out the form below to get the conversation started
          </p>
          <div className={cx('form-list')}>
            <FormItem labelText={'First Name *'} />
            <FormItem labelText={'Last Name *'} />
            <FormItem labelText={'Organization Name *'} />
            <FormItem
              labelText={'Email *'}
              type={'email'}
            />
            <FormItem
              labelText={'Description *'}
              TagName="textarea"
              big
            />
          </div>
          <button
            className={cx('form-submit')}
            type="submit"
            onClick={() => {
              console.log('run button')
            }}
          >
            CONFIRM
          </button>
          <p className={cx('form-note')}>
            This site is protected by reCAPTCHA and the Google Terms of Service
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>
            apply.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Form
