// Shared mix / routine landing page (s/ and tr/s/): copies the link's ?d=
// payload into the "Open in Ninnim" button, so the app opens the share
// itself (ninnim://import?d=…). Reads nothing else and sends nothing.
(function () {
  var d = new URLSearchParams(window.location.search).get("d");
  var button = document.getElementById("open-app");
  if (d && button && /^[A-Za-z0-9_.~-]{1,4000}$/.test(d)) {
    button.href = "ninnim://import?d=" + encodeURIComponent(d);
  }
})();
