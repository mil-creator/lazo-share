// Supabase reports a failed verification by redirecting to the Site URL with an
// `error` parameter. It can arrive in the fragment (implicit style) or the query
// string depending on the flow, so check both rather than guessing.
//
// Nothing here is trusted or rendered: we only test whether an error key exists
// and toggle between two static blocks already present in the HTML. No values
// from the URL ever reach the DOM, so there is no injection surface.
(function () {
  function hasError(source) {
    if (!source) return false;
    try {
      return new URLSearchParams(source).has('error');
    } catch (e) {
      return false;
    }
  }

  var failed =
    hasError(window.location.hash.replace(/^#/, '')) ||
    hasError(window.location.search.replace(/^\?/, ''));

  if (!failed) return;

  var ok = document.getElementById('ok');
  var err = document.getElementById('err');
  if (ok && err) {
    ok.className = 'hidden';
    err.className = '';
  }
})();
