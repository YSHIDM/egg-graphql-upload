const path = require('path');
const utility = require('utility');

const pkgPath = path.join(__dirname,'package.json');
const pkg = utility.readJSONSync(pkgPath);
const eggPandoraPath = path.join(__dirname,'node_modules/egg-pandora-script/index.js');

module.exports = (pandora) => {
  pandora
    .fork(pkg.name,eggPandoraPath)
}