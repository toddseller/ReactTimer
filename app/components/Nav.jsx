var React = require('react')
var {Link, IndexLink} = require('react-router')

var Nav = () => {
  return (
    <div className="top-bar dark">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://www.github.com/toddseller" target="_blank">Todd Seller</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Nav