if (typeof noia4themefavicon == "undefined") {var noia4themefavicon = {};};
if (!noia4themefavicon.insert) {noia4themefavicon.insert = {};};

noia4themefavicon.insert = {

	init: function() {
		try{
			// If warning was accepted and favicon option was enabled and
			// the selected theme is 'noia4' theme --> add listeners
			// If not --> do not create favicon and do not add listeners
			if (Components.classes["@mozilla.org/preferences-service;1"]
					.getService(Components.interfaces.nsIPrefService)
						.getBranch("extensions.noiaop.").getBoolPref("favicon_w")
				&& Components.classes["@mozilla.org/preferences-service;1"]
					.getService(Components.interfaces.nsIPrefService)
						.getBranch("extensions.noiaop.").getBoolPref("favicon")
				&& Components.classes["@mozilla.org/preferences-service;1"]
					.getService(Components.interfaces.nsIPrefService)
						.getBranch("general.skins.").getCharPref("selectedSkin")=="noia4")
			{
						
				// Create an empty image element and insert it into identity-box
				var imageBox = document.createElement("image");
				imageBox.setAttribute("id", "noia4favicon");
				imageBox.setAttribute("class", "noia4favicongroup");
				document.getElementById("identity-box").insertBefore(imageBox, document.getElementById("identity-box").firstChild);

				// add window listener
				// call 'addNewN4FavImage' after page load	
				window.addEventListener("load", function load(event){
					window.removeEventListener("load", load, false); //remove listener, no longer needed
					gBrowser.addEventListener("DOMContentLoaded", noia4themefavicon.insert.addNewN4FavImage, false);
				},false);

				// add tab listener
				// call 'addNewN4FavImage' when tab gets modified (e.g. select, history back and forward etc.)	
				window.addEventListener("load", function load(event){
					window.removeEventListener("load", load, false); //remove listener, no longer needed
					gBrowser.tabContainer.addEventListener("TabAttrModified", noia4themefavicon.insert.addNewN4FavImage, false);
				},false);
				
			}
		} catch(e){}
	},

	// Fill image box with tab image from selected tab.
	// If there is no tab image available, use a Fx icon (ff4.png) instead.
	addNewN4FavImage: function(){

		// if tab image exists, show it as favicon 
		if(gBrowser.selectedTab.image) {
		  document.getElementById("noia4favicon").removeAttribute("blank");
		  document.getElementById("noia4favicon").setAttribute("src", gBrowser.selectedTab.image);
		}
		// if no tab image exists, show a default Fx icon
		if(!gBrowser.selectedTab.image) {
		  document.getElementById("noia4favicon").setAttribute("blank", true);
		  document.getElementById("noia4favicon").setAttribute("src", "chrome://global/skin/CuteMenus/ff4.png");
		}
		// make sure only corresponding favicon image is placed inside identity-box
		if(document.getElementById("noia4favicon").nextSibling.id == "noia4favicon") {
		  var favImage = document.getElementsByClassName("noia4favicongroup");
		  for(var i = 1; i < favImage.length; i++) favImage[i].parentNode.removeChild(favImage[i]);
		}
		
	}

}

noia4themefavicon.insert.init();