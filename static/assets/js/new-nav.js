(function() {
    function transformStart() {
        document.querySelector(".js-nav").classList.toggle("is-visible");
    }
    document.querySelector("#js-menu").addEventListener("click", transformStart);
})();
