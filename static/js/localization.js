$(document).ready(function() {
  var storageKey = 'siteLocale';
  var defaultLocale = 'el';

  var getStoredLocale = function() {
    try {
      return localStorage.getItem(storageKey) || defaultLocale;
    } catch (e) {
      return defaultLocale;
    }
  };

  var i18nOpts = {
    lng: getStoredLocale(),
    getAsync: true,
    fallbackLng: 'en',
    resGetPath: 'static/locales/__lng__.json'
  };

  var translate = function() {
    $('.i18container').i18n();
    $('#i18_navbar').i18n();
    $('#i18_about_me').i18n();
    $('#i18_skills').i18n();
    $('#i18_projects').i18n();
    $('#i18_career').i18n();
    $('#i18_blog').i18n();
    $('#i18_link').i18n();
    $('[data-i18n]').i18n();

    if (typeof window.translateResumePage === 'function') {
      window.translateResumePage();
    }

    document.documentElement.lang = (i18n && i18n.lng) ? i18n.lng : 'en';
  };

  $("[id^=set_lang]").each(function() {
    var $this = $(this);
    $this.on('click', function() {
      var locale = $this.data('locale');
      try {
        localStorage.setItem(storageKey, locale);
      } catch (e) {}
      i18n.setLng(locale, translate);
    });
  });

  i18n.init(i18nOpts, translate);
});
