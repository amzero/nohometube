var funcao = function() {
    var node = document.getElementById("browse-items-primary");
	if (node && node.parentNode) {
	  node.parentNode.removeChild(node);
	}

	node = document.getElementById("masthead-appbar");
	if (node && node.parentNode) {
		 node.parentNode.removeChild(node);
	}
		
	node = document.getElementById("feed");
	if (node && node.parentNode) {
		 node.parentNode.removeChild(node);
	}
};

// seleciona o nó alvo #page-container
var target = document.querySelector('#page-container');
 
// cria uma nova instância de observador
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    //console.log(mutation.type);
    //alert("FOI");
    funcao();
  });    
});
 
// configuração do observador:
var config = { attributes: true, childList: true, characterData: true, subtree: true };
//var config = { childList: true, subtree: true };
 
// passar o nó alvo, bem como as opções de observação
observer.observe(target, config);