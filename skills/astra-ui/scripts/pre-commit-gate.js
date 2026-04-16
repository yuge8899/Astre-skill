const { collectOutputFiles } = require('./astra-output-gate');

function getPreCommitOutputFiles(stagedFiles, contract) {
  return [...new Set(collectOutputFiles(stagedFiles, contract))];
}

module.exports = {
  getPreCommitOutputFiles,
};
