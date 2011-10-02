function switchLocale(locale) {
  I18n.locale = locale;
  var languages = {
    'en-US': I18n.t('english'),
    'es-MX': I18n.t('spanish'),
    'fr-FR': I18n.t('french')
  };
  
  var items = [
  'emergency_triage_questionnaire',
  ['language', {language: languages[locale]}],
  'what_is_the_reason',
  'pain',
  'diffused',
  'localized_stabbing',
  'cramps',
  'tightness',
  'pressure',
  'how_intense_is_pain',
  'pain_scale',
  'burning_sensation',
  'itching'
  ];
  
  $.each(items, function(index, item){
    var name;
    var opts;
    if ($.isArray(item)) {
      name = item[0];
      opts = item[1];
    } else {
      name = item;
    }
    $('#'+name).text(I18n.t(name, opts));
  });
}

$(document).ready(function(){
  switchLocale('en-US');
});