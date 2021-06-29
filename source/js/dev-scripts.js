(function() {

// MOCKING TYPEAHEAD FUNCTIONALITY
  var drawerSearchInput = $('#drawer-search-input');
  drawerSearchInput.keyup(function(){
    var cnt = drawerSearchInput.val().length;
    if ( cnt > 0) {
      $('[data-context="search-main-suggestions"]').slideDown(200);
    } else {
      $('[data-context="search-main-suggestions"]').slideUp(200);
    }
  })
  if (drawerSearchInput.blur && drawerSearchInput.val() != true) {
      $('[data-context="search-main-suggestions"]').slideUp(200);
  };

  var searchInput = $('#search-input');
  searchInput.keyup(function(){
    var cnt = searchInput.val().length;
    if ( cnt > 0) {
      $('[data-context="search-main-suggestions"]').slideDown(200);
    } else {
      $('[data-context="search-main-suggestions"]').slideUp(200);
    }
  })
  if (searchInput.blur && searchInput.val() != true) {
      $('[data-context="search-main-suggestions"]').slideUp(200);
  }
// ------- END MOCK TYPEAHEAD

})();