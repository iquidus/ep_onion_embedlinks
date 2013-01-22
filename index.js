var eejs = require('ep_etherpad-lite/node/eejs');
var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_scripts = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_onion_embedlinks/templates/scripts.ejs", {}, module);
  return cb();
}

exports.eejsBlock_embedPopup = function(hook_name, args, cb){
  args.content = eejs.require("ep_onion_embedlinks/templates/onionCheckbox.ejs") + args.content;
  return cb();
}

exports.eejsBlock_styles = function (hook_name, args, cb){
  args.content = args.content + eejs.require("ep_onion_embedlinks/templates/styles.ejs");
  return cb();
}

exports.clientVars = function(hook, context, callback){
  try {
    if (settings.ep_onion_embedlinks.domain){
      var domain = settings.ep_onion_embedlinks.domain;
    }
  } catch (e){
    console.warn("ep_onion_embedlinks: domain has not been set in your settings.json")
    var domain = "";
  }
  try {
    if (settings.ep_onion_embedlinks.onion){
      var onion = settings.ep_onion_embedlinks.onion;
    }
  } catch (e){
    console.warn("ep_onion_embedlinks: onion has not been set in your settings.json")
    var onion = "";
  }
  return callback({ "oel_onion": onion, "oel_domain": domain });
};

