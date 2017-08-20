import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const ButtonLink = ({ url, children }) => {
  return <Link to={url} style={styles}>{children}</Link>
}

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

const styles = {
  background: '#ffc10a',
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 15,
  paddingBottom: 15,
  textDecoration: 'none',
  color: '#fff',
  borderRadius: 4,
  fontWeight: '500',
  fontSize: 18,
  letterSpacing: 0.5
}

export default ButtonLink
