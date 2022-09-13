let $input    = document.getElementById('input-file'),
  $fileName = document.getElementById('file-name');

$input.addEventListener('change', function(){
$fileName.textContent = this.value;
});