(() => {
  var addEventListener = Node.prototype.addEventListener;
  Node.prototype.addEventListener = function(type) {
    if (type === "wheel") {
      return;
    }
    return addEventListener.apply(this, arguments);
  };
})();