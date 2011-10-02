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
    $('#'+name).text(I18n.t(name, opts) || '!missing_translation!');
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