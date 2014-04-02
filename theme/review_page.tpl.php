<div id = "review-page">
  <?php foreach ($steps as $step => $step_info) { ?>
    <div class = "step-section step-section-<?php print $step; ?>">
      <h3 class = "step-title"><?php print $step_info['title']; ?></h3>
      <table class = "step-table">
      <?php foreach ($step_info['fields'] as $field_name => $field_info) { ?>
        <tr>
          <td class = "step-field-label"><?php print $field_info['label']; ?></td>
          <td class = "step-field-value"><?php print $field_info['value_label']; ?></td>
          <td class = "step-field-edit">
            <a href="#" onClick="document.getElementById('edit-step<?php print $step;?>-change').click();">edit</a>
          </td>
        </tr>
      <?php } ?>
      </table>
    </div>
  <?php } ?>
</div>
