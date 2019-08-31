'use strict';

const {
  packageList,
  cancelList,
  /*install,
  installLogs,
  uninstallLogs,
  uninstall,*/
  info,
  /*update,
  updateLogs*/
} = require('./lib');

module.exports = {
  properties: {
    emitsProgressEvents: false,
    isSearchable: false,
    isLoggable: true
  },
  packageList,
  cancelList,
  /*install,
  installLogs,
  uninstallLogs,
  uninstall,*/
  info,
  /*update,
  updateLogs*/
};
