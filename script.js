// Optional: set circular progress via data attribute for conic-gradient
document.querySelectorAll('.circle[data-pct]').forEach(function (el) {
  var pct = el.getAttribute('data-pct');
  el.style.setProperty('--pct', pct);
});
