function switchLocale(locale) {
  I18n.locale = locale;

  // Use en-US because keys should always be defined there
  var items = keys(I18n.translations['en-US']);
  
  $.each(items, function(index, item){
    var name;
    var opts;
    if ($.isArray(item)) {
      name = item[0];
      opts = item[1];
    } else {
      name = item;
    }
    
    var text = I18n.t(name, opts);
    if (!text || text.length == 0) {
      var match = name.match(/(.*)__/);
      if (match && match.length >= 2) {
        var newName = match[1];
        text = I18n.t(newName, opts);
      }
    }
    $('.translate_'+name).each(function(index) { $(this).text(text || '!missing_translation!'); });
  });
}

function keys(ob) 
{
  props=[];
  for (k in ob) if (ob.hasOwnProperty(k)) props.push(k);
  return props;
}


$(document).ready(function(){
  switchLocale('en-US');
});