import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
          <p>New to Bootstrap? <a href="{{ site.url }}/">Visit the homepage</a> or read our <a
            href="{{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/introduction/">getting started
            guide</a>.</p>
        </div>
      </footer>
    )
  }
}