<div id = "progress-bar">
  <?php foreach ($steps as $step => $step_info) { ?>
    <div class="progress-section progress-<?php print $step_info['state'];?>">
      <a href="#" onClick="document.getElementById('edit-step<?php print $step;?>-change').click(); return false;">
        <?php print $step .". ". $step_info['title']; ?>
      </a>
    </div>
  <?php } ?>
</div>
