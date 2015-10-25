var Securenet = {};

Securenet.authString = function () {
  // Build a string in the form securenetid:securekey
  // Base64-encode the string
  // Supply an "Authorization" header containing "Basic" followed by the encoded string, ex: "Basic YAXtjM40JBYlxX4="
  var SecureNetID = "8005207";
  var secureKey = "pQjLRpqvC2kW";
  var str = "" + SecureNetID + ":" + secureKey;
  return str;
};

Securenet.authHeader = function () {
  // Build a string in the form securenetid:securekey
  // Base64-encode the string
  // Supply an "Authorization" header containing "Basic" followed by the encoded string, ex: "Basic YAXtjM40JBYlxX4="
  var enc = new Buffer(str).toString('base64');
  return "Basic " + enc;
};



module.exports = Securenet;
