<?php
/* This will give an error. Note the output
 * above, which is before the header() call */
header('Location: /public/');
exit;
?>
