var superModule = (function() {
  var secret = 'supersecretkey';
  var passcode = 'nuke';
  function getSecret() {
    console.log(secret);
  }
  function getPasscode() {
    console.log(passcode);
  }
  return {
    getSecret: getSecret,
    getPasscode: getPasscode
  }
})();
superModule.getSecret();
superModule.getPasscode();
