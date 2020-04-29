const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Protocols extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.protocols || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.protocols.map(user => (
      <a target={user.externalLink ? '_blank' : undefined} style={{ width: '33%' }} className="link" href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
        <br />
        <span className="caption">{user.caption}</span>
        <br />
        {user.options.read && <span className="pill read">Read</span>}
        {user.options.write && <span className="pill write">write</span>}
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Supported protocols</h1>
              <p>Click on a protocol to see the supported devices.</p>
            </div>
            <div className="logos">{showcase}</div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Protocols;
