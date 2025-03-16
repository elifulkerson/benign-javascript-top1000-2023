/**
 * @file
 * Main client-side processing for ins personalization.
 */

(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.ins_personalization = {
      attach: function (context, settings) {
        if (typeof $.cookie('ins_visitor') === 'undefined'){
          $.cookie('ins_visitor', 'returning');
        }
        $('.menu-item > a').on('click', function (e) {
          if (this.closest('li').hasAttribute('data-cookie-value')) {
            let cookie_val = this.closest('li').getAttribute('data-cookie-value');
            $.cookie('ins_segment', cookie_val);
          }
        });
    }
  };

})(jQuery, Drupal, drupalSettings);
