function switchLocale(locale) {
  I18n.locale = locale;

  $('.selected-language').removeClass('selected-language');
  $('.language-'+locale+' a').addClass('selected-language');

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
      // special case for chinese yes no
      var match = name.match(/(.*)__/);
      if (match && match.length >= 2) {
        var newName = match[1];
        text = I18n.t(newName, opts);
      }
    }
    text = text || I18n.translations['en-US'][name];
    $('.translate_'+name).each(function(index) { $(this).text(text); });
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

function clearAllAnswers() {
  var result = confirm(I18n.t('are_you_sure') || I18n.translations['en-US']['are_you_sure'] || 'sure?');
  if (result) {
    $('input:checkbox').removeAttr('checked');
    $('input:radio').removeAttr('checked');
    $('input:text').val('');
  }
}
