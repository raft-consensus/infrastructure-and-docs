(function () {
  if (
    location.hostname === 'documentacion-raft.web.app' ||
    location.hostname === 'documentacion-raft.firebaseapp.com'
  ) {
    location.replace('https://docs.raft.andrescortes.dev' + location.pathname + location.search);
  }
})();