var page = require('webpage').create();
page.viewportSize = {width: 1340,height: 768};
page.open('./index_v3.html', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    setTimeout(function(){
		page.render('./test.png');
		var base64 = page.renderBase64("PNG");
		console.log(base64);
		console.log("Test png rendered, exiting phantom..");
		phantom.exit();
	},30000)
  }
});