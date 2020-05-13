const React = require('react');
const zigbeeDevices = require('zigbee-herdsman-converters').devices;
const modbusDevices = require('@instathings/modbus-herdsman-converters').devices;
const httpDevices = require('@instathings/http-herdsman-converters').devices;

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Protocols extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.protocols || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.protocols.map(protocol => (
      <a target={protocol.externalLink ? '_blank' : undefined} style={{ width: '25%' }} className="link" href={protocol.infoLink} key={protocol.infoLink}>
        <img src={protocol.image} alt={protocol.caption} title={protocol.caption} />
        <br />
        {protocol.id === 'zigbee' && <span>{zigbeeDevices.length} </span>}
        {protocol.id === 'modbus' && <span>{modbusDevices.length} </span>}
        {protocol.id === 'http' && <span>{httpDevices.length} </span>}
        <span className="caption">
          {protocol.caption} devices
        </span>
        <br />
        {protocol.options.read && <span className="pill read">Read</span>}
        {protocol.options.write && <span className="pill write">write</span>}
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
