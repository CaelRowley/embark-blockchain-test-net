$(document).ready(function() {

  $("#blockchain button.set").click(function() {
  	var value = parseInt($("#blockchain input.text").val(), 10);
  	SimpleStorage.methods.set(value).send({from: web3.eth.defaultAccount});
  });

  $("#blockchain button.get").click(function() {
   SimpleStorage.methods.get().call().then(function(value) { console.log(value) });
  });
});
