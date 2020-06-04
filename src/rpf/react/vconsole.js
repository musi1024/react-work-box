/**
 * @NOTE add this in package.json scripts
 * "build-prod": "cross-env REACT_APP_VCONSOLE=false react-scripts build",
 **/
import vconsoleReloadPlugin from '../un/vconsoleReloadPlugin';
if (process.env.REACT_APP_VCONSOLE !== 'false') {
  if (!/localhost/.test(window.location.origin)) {
    const VConsole = require('vconsole');
    const vc = new VConsole();
    vc.addPlugin(vconsoleReloadPlugin(VConsole));
  }
}
