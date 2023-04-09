import {Component} from 'react'

export default class App extends Component {
  render() {
    const isLoading = true
    const children = (
      <li>
        <a href="http://www.google.com">
          <p>go to Google</p>
        </a>
      </li>
    )

    return (
      <div>
        {isLoading && <p>loading...</p>}
        {!isLoading && <ul>{children}</ul>}
      </div>
    )
  }
}
