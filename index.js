var eejs = require('ep_etherpad-lite/node/eejs');
var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.eejsBlock_scripts = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_onion_embedlinks/templates/scripts.ejs", {}, module);
  return cb();
}

exports.eejsBlock_embedPopup = function(hook_name, args, cb){
  args.content = '<div><label id="onion-label"><input type="checkbox" id="onioninput"/>.onion</label></div>' + args.content;
  return cb();
}

exports.eejsBlock_styles = function (hook_name, args, cb){
  args.content = args.content + '<link href="../static/plugins/ep_onion_embedlinks/static/css/checkboxen.css" rel="stylesheet">';
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
  return callback({ "obl_onion": onion, "obl_domain": domain });
};

