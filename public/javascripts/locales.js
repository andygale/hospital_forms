if (!window.I18n) { I18n = {}; }

I18n.defaultLocale = "en";

I18n.translations = {"es-MX":{"tightness":"Punzadas","spanish":"Espa\u00f1ol","pain":"Tieni un dolor","pain_scale":"Tolerable = 1-3   Insoportable = 10","language":"Idioma: %{language}","english":"Ingl\u00e9s","pressure":"Opresi\u00f3n","what_is_the_reason":"\u00bfCu\u00e1l es la raz\u00f3n de su consulta? Por favor, seleccione las condiciones que describen su situaci\u00f3n lo mejor","diffused":"General","emergency_triage_questionnaire":"Emergencia Cuestionario de Triage","french":"","burning_sensation":"Sensaci\u00f3n de quemaz\u00f3n","localized_stabbing":"localizada","how_intense_is_pain":"\u00bfQu\u00e9 tan fuerte si su dolor en una escala del 1 al 10?","itching":"Comez\u00f3n","cramps":"Calambres"},"en-US":{"tightness":"Tightness","spanish":"Spanish","pain":"Pain","pain_scale":"Tolerable = 1-3   Unbearable = 10","language":"Language: %{language}","english":"English","pressure":"Pressure","what_is_the_reason":"What is the reason for your consultation? Please select the conditions that describe your situation the best","diffused":"Diffused","emergency_triage_questionnaire":"Emergency Triage Questionnaire","french":"French","burning_sensation":"Burning Sensation","localized_stabbing":"Localized Stabbing","how_intense_is_pain":"How intense if your pain on a scale from 1 to 10?","itching":"Itching","cramps":"Cramps"},"fr-FR":{"tightness":"Un Serrement","spanish":"Espagnole","pain":"Une douleur","pain_scale":"Tol\u00e9rable = 1-3   Insupportable = 10","language":"Langue: %{language}","english":"Anglais","pressure":"Une pression","what_is_the_reason":"Quelle est votre raison de consultation? S'il vous pla\u00eet choisir les conditions qui d\u00e9crivent votre situation meilleure","diffused":"Diffuse","emergency_triage_questionnaire":"Urgence Questionnaire de Triage","french":"Fran\u00e7ais","burning_sensation":"Sensation de br\u00fblement","localized_stabbing":"localis\u00e9","how_intense_is_pain":"Indiquez l'intensit\u00e9 de votre douleur de 1 a 10?","itching":"D\u00e9mangeaison","cramps":"Des crampes"},"en":{"number":{"format":{"separator":".","precision":3,"delimiter":",","significant":false,"strip_insignificant_zeros":false},"human":{"format":{"precision":3,"delimiter":"","strip_insignificant_zeros":true,"significant":true},"storage_units":{"format":"%n %u","units":{"kb":"KB","tb":"TB","gb":"GB","byte":{"one":"Byte","other":"Bytes"},"mb":"MB"}},"decimal_units":{"format":"%n %u","units":{"trillion":"Trillion","billion":"Billion","quadrillion":"Quadrillion","million":"Million","unit":"","thousand":"Thousand"}}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","precision":2,"delimiter":",","strip_insignificant_zeros":false,"significant":false}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","taken":"has already been taken"}}},"errors":{"format":"%{attribute} %{message}","messages":{"greater_than_or_equal_to":"must be greater than or equal to %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","confirmation":"doesn't match confirmation","blank":"can't be blank","not_an_integer":"must be an integer","invalid":"is invalid","exclusion":"is reserved","odd":"must be odd","wrong_length":"is the wrong length (should be %{count} characters)","too_short":"is too short (minimum is %{count} characters)","empty":"can't be empty","even":"must be even","less_than":"must be less than %{count}","equal_to":"must be equal to %{count}","greater_than":"must be greater than %{count}","accepted":"must be accepted","too_long":"is too long (maximum is %{count} characters)","not_a_number":"is not a number","inclusion":"is not included in the list"}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"pm":"pm"},"date":{"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"order":["year","month","day"],"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},"support":{"array":{"words_connector":", ","last_word_connector":", and ","two_words_connector":" and "}},"helpers":{"submit":{"submit":"Save %{model}","create":"Create %{model}","update":"Update %{model}"},"select":{"prompt":"Please select"}},"datetime":{"prompts":{"minute":"Minute","second":"Seconds","month":"Month","hour":"Hour","day":"Day","year":"Year"},"distance_in_words":{"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_days":{"one":"1 day","other":"%{count} days"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"half_a_minute":"half a minute"}}}};

(function(){

  var interpolatePattern = /%\{([^}]+)\}/g;

  //Replace %{foo} with obj.foo
  function interpolate(str, obj){
    return str.replace(interpolatePattern, function(){
      return typeof obj[arguments[1]] == 'undefined' ? arguments[0] : obj[arguments[1]];
    });
  };

  //Split "foo.bar" to ["foo", "bar"] if key is a string
  function keyToArray(key){
    if (!key) return [];
    if (typeof key != "string") return key;
    return key.split('.');
  };

  function locale(){
    return I18n.locale || I18n.defaultLocale;
  };

  function getLocaleFromCookie(){
    var cookies = document.cookie.split(/\s*;\s*/),
        i, pair, locale;
    for (i = 0; i < cookies.length; i++) {
      pair = cookies[i].split('=');
      if (pair[0] === 'locale') { locale = pair[1]; break; }
    }
    return locale;
  };


  I18n.init = function(){
    this.locale = getLocaleFromCookie();
  };

  //Works mostly the same as the Ruby equivalent, except there are
  //no symbols in JavaScript, so keys are always strings. The only time
  //this makes a difference is when differentiating between keys and values
  //in the defaultValue option. Strings starting with ":" will be considered
  //to be keys and used for lookup, while other strings are returned as-is.
  I18n.translate = function(key, opts){
    if (typeof key != "string") { //Bulk lookup
      var a = [], i;
      for (i=0; i<key.length; i++) {
        a.push(this.translate(key[i], opts));
      }
      return a;
    } else {
      opts = opts || {};
      opts.defaultValue = opts.defaultValue || null;
      key = keyToArray(opts.scope).concat(keyToArray(key));
      var value = this.lookup(key, opts.defaultValue);
      if (typeof value != "string" && value) value = this.pluralize(value, opts.count);
      if (typeof value == "string") value = interpolate(value, opts);
      return value;
    }
  };

  I18n.t = I18n.translate;

  //Looks up a translation using an array of strings where the last
  //is the key and any string before that define the scope. The current
  //locale is always prepended and does not need to be provided. The second
  //parameter is an array of strings used as defaults if the key can not be
  //found. If a key starts with ":" it is used as a key for lookup.
  //This method does not perform pluralization or interpolation.
  I18n.lookup = function(keys, defaults){
    var i = 0, value = this.translations[locale()];
    defaults = typeof defaults == "string" ? [defaults] : (defaults || []);
    while (keys[i]) {
      value = value && value[keys[i]];
      i++;
    }
    if (value){
      return value;
    } else {
      if (defaults.length == 0) {
        return null;
      } else if (defaults[0].substr(0,1) == ':') {
        return this.lookup(keys.slice(0,keys.length-1).concat(keyToArray(defaults[0].substr(1))), defaults.slice(1));
      } else {
        return defaults[0];
      }
    }
  };

  I18n.pluralize = function(value, count){
    if (typeof count != 'number') return value;
    return count == 1 ? value.one : value.other;
  };

})();

I18n.init();
