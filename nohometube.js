var ids = ["browse-items-primary", "masthead-appbar", "feed"];
var funcao = function () {
    for (i = 0; i < ids.length; i++) {
        node = document.getElementById(ids[i]);
        if (node && node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
};
var target = document.querySelector('#body-container');
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        funcao();
    });
});
var config = {
    attributes: true
    , childList: true
    , characterData: true
    , subtree: true
};
observer.observe(target, config);