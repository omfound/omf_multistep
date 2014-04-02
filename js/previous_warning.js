(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.contributePreviousWarning = {
    attach : function(context) {
      var cancelStatus = 0;
      var prevStatus = 0;
      if (Drupal.settings.dataset_contribute_form && Drupal.settings.dataset_contribute_form.step < 5 && Drupal.settings.dataset_contribute_form.step > 2) {
        $("#contribute-warning").dialog({
          resizable: false,
          autoOpen: false,
          modal: true,
          height: 170,
          width: 400,
          buttons: {
            "No": function () {
              $(this).dialog("close");
              return false;
            },
            "Yes, continue to previous step": function () {
              $(this).dialog('close');
              prevStatus = 1;
              $("#edit-prev").click();
              return true;
            }
          }
        });
        $('#edit-prev').click(function (e) {
          if(!e.isTrigger && prevStatus === 0) {
            e.preventDefault();
            $("#contribute-warning").dialog('open');
            return false;
          }
        });
      }
      else {
        $('#contribute-warning').hide();
      }
      if (Drupal.settings.dataset_contribute_form && Drupal.settings.dataset_contribute_form.step > 2) {
        $("#cancel-warning").dialog({
          resizable: false,
          autoOpen: false,
          modal: true,
          height: 170,
          width: 400,
          buttons: {
            "No": function () {
              $(this).dialog("close");
              return false;
            },
            "Yes, cancel": function () {
              $(this).dialog('close');
              cancelStatus = 1;
              $(".contribute-cancel").click();
              return true;
            }
          }
        });
        $('.contribute-cancel').click(function (e) {
          if(!e.isTrigger && cancelStatus === 0) {
            e.preventDefault();
            $("#cancel-warning").dialog('open');
          }else{
            window.location = $('.contribute-cancel').attr('href');
          }
        });
      }
      else {
        $("#cancel-warning").hide();
      }
    }
  };
})(jQuery, Drupal, this, this.document);

