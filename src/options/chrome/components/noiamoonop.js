//from Stylish v1.0.8
//http://userstyles.org
//the below is GPL v3

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function noiaMoonOptions(){}

noiaMoonOptions.prototype = {
classDescription: "noiaMoonOptions Startup",
contractID: "@NoiaMoonOptions/startup;1",
classID: Components.ID("{be1828e0-65e7-11e0-ae3e-0800200c9a66}"),
QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsISupports,Components.interfaces.nsIObserver]),


observe: function(aSubject,aTopic,aData){


    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService)
        .getBranch("extensions.noiamoonop.");
		
	var watcher = Components.classes["@mozilla.org/embedcomp/window-watcher;1"].getService(Components.interfaces.nsIWindowWatcher);
	var listenOpen = {
    observe : function(aSubject, aTopic) {
    if(aTopic!="domwindowopened")
      return;
    aSubject.addEventListener("load", mainFunction, false);
    }
    };
	watcher.registerNotification(listenOpen);
    var mWindows = watcher.getWindowEnumerator();
    while (mWindows.hasMoreElements()) {
     mainFunction(mWindows.getNext());
    }
	function mainFunction(aWindow) {
    try {
    if(aWindow instanceof Components.interfaces.nsIDOMEvent) {
      aWindow = aWindow.currentTarget;
    }
    if(aWindow.document.documentElement.getAttribute("windowtype")!="navigator:browser")
      return;
    } catch(e) {}
    var doc = aWindow.document;
    aWindow.removeEventListener("load", mainFunction, false);
	var xulRuntime = Components.classes["@mozilla.org/xre/app-info;1"]
    .getService(Components.interfaces.nsIXULRuntime);
	
    // Set attribute on #main-window for use by Noia Moon theme.
		  
	if ("Darwin" == xulRuntime.OS) {
	  doc.getElementById('main-window').setAttribute('nfdarwin',true);
	} else {
	  doc.getElementById('main-window').setAttribute('nfdarwin',false);
	}
	
	if ("Linux" == xulRuntime.OS) {
	  doc.getElementById('main-window').setAttribute('nflinux',true);
	} else {
	  doc.getElementById('main-window').setAttribute('nflinux',false);
	}

	if (prefs.getBoolPref("dark") == true){
    doc.getElementById('main-window').setAttribute('nfblack',true);}
	else
	{
	doc.getElementById('main-window').setAttribute('nfblack',false);
	}
	if (prefs.getBoolPref("strip") == true){
	doc.getElementById('main-window').setAttribute('nfstrip',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfstrip',false);
	}
	if (prefs.getBoolPref("solid") == true){
	doc.getElementById('main-window').setAttribute('nfsolid',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfsolid',false);
	}
	if (prefs.getBoolPref("noline") == true){
	doc.getElementById('main-window').setAttribute('nfnoline',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfnoline',false);
	}
	if (prefs.getBoolPref("tabbar") == true){
	doc.getElementById('main-window').setAttribute('nftabbar',true);}
	else {
	doc.getElementById('main-window').setAttribute('nftabbar',false);
	}
	if (prefs.getBoolPref("tabbottom") == true){
	doc.getElementById('main-window').setAttribute('nfbottom',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfbottom',false);
	}
	if (prefs.getBoolPref("blue") == true){
	doc.getElementById('main-window').setAttribute('nfblue',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfblue',false);
    }
	if (prefs.getBoolPref("light") == true){
	doc.getElementById('main-window').setAttribute('nflight',true);}
	else {
	doc.getElementById('main-window').setAttribute('nflight',false);
	}
	if (prefs.getBoolPref("rdtab") == true){
	doc.getElementById('main-window').setAttribute('nfrdtab',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfrdtab',false);
	}
	if (prefs.getBoolPref("normal") == true){
	doc.getElementById('main-window').setAttribute('nfnormal',true);}
	else {
	doc.getElementById('main-window').setAttribute('nfnormal',false);
	}
 }



    //apply the style sheets
    function applyIt(file){
        var uri = ios.newURI(c + file,null,null);
        if (!sss.sheetRegistered(uri,sss.AGENT_SHEET)){
            sss.loadAndRegisterSheet(uri,sss.AGENT_SHEET);
        }
    }
    var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"]
        .getService(Components.interfaces.nsIStyleSheetService);
    var ios = Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var uri;
    var c = "chrome://noiamoonoptions/content/";

    if (prefs.getBoolPref("semiroundedtab") == true){
        applyIt("semi_rounded_tab.css");
    }
	
	if (prefs.getBoolPref("grey") == false){
	if (prefs.getBoolPref("blue") == false){
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("light") == false){
        applyIt("grey.css");
		prefs.setBoolPref("grey",true);
    }
	}
	}
	}
	
	if (prefs.getBoolPref("grey") == true){
	if (prefs.getBoolPref("blue") == false){
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("light") == true){
		prefs.setBoolPref("grey",false);
    }
	}
	}
	}

	if (prefs.getBoolPref("rdtab") == false){
	if (prefs.getBoolPref("sqtab") == false){
	if (prefs.getBoolPref("semiroundedtab") == false){
        applyIt("sqtab.css");
		prefs.setBoolPref("sqtab",true);
    }
	}
	}
	
    if (prefs.getBoolPref("dark") == true){
        applyIt("dark.css");
		prefs.setBoolPref("tabbar",false);
		prefs.setBoolPref("darker",false);
		prefs.setBoolPref("light",false);
    }

	var xulRuntime = Components.classes["@mozilla.org/xre/app-info;1"]
        .getService(Components.interfaces.nsIXULRuntime);
		  
    // if ("Darwin" == xulRuntime.OS) {
	// 	if (prefs.getBoolPref("dark") == true){
	// 	applyIt("dark2.css");
	// }
	// }
	
	if (prefs.getBoolPref("dark") == true){
	 	applyIt("dark2.css");
	}
	
	if (prefs.getBoolPref("blue") == true){
        applyIt("blue.css");
    }
	
	if (prefs.getBoolPref("grey") == true){
        applyIt("grey.css");
    }
	
	if (prefs.getBoolPref("grey2") == true){
        applyIt("grey2.css");
    }
	
	if (prefs.getBoolPref("darker") == true){
        applyIt("darker.css");
    }
	
	if (prefs.getBoolPref("light") == true){
        applyIt("light.css");
    }
	
	if (prefs.getBoolPref("shadow") == true){
        applyIt("shadow.css");
    }
	
	if (prefs.getBoolPref("closebutton") == true){
        applyIt("closebutton.css");
    }
	
	if (prefs.getBoolPref("findbartop") == true){
        applyIt("findbartop.css");
    }
	
    if (prefs.getBoolPref("noline") == true){
        applyIt("noline.css");
    }
	
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("noline") == true){
		applyIt("noline2.css");
	}
	}
	
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("noline") == true){
		applyIt("tabbar.css");
	}
	}
	
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("noline") == false){
		applyIt("tabbar2.css");		
	}
	}	

	if (prefs.getBoolPref("strip") == true){
        applyIt("strip.css");
    }	
	
	if (prefs.getBoolPref("semiroundedtab") == true){
        applyIt("semi_rounded_tab.css");
    }
	
    if (prefs.getBoolPref("rdtab") == true){
        applyIt("rdtab.css");
    }
	
	if (prefs.getBoolPref("sqtab") == true){
        applyIt("sqtab.css");
    }
	
	if (prefs.getBoolPref("dark") == true){
	if (prefs.getBoolPref("solid") == true){
		applyIt("solid2.css");
	}
	}	
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("solid") == true){
        applyIt("solid.css");
	}
	}

	if (prefs.getBoolPref("tabbottom") == true){
        applyIt("tabbottom.css");
    }
    if (prefs.getBoolPref("normal") == true){
        applyIt("normal.css");
    }
	if (prefs.getBoolPref("hide") == true){
        applyIt("hide.css");
    }
	if (prefs.getBoolPref("rdbutton") == true){
        applyIt("rdbutton.css");
    }
	if (prefs.getBoolPref("rdmenubutton") == true){
        applyIt("rdmenubutton.css");
    }
	if (prefs.getBoolPref("rdtabbox") == true){
        applyIt("rdtabbox.css");
    }
	if (prefs.getBoolPref("warm") == true){
        applyIt("warm.css");
    }
	if (prefs.getBoolPref("red") == true){
        applyIt("red.css");
    }
	if (prefs.getBoolPref("red2") == true){
        applyIt("red2.css");
    }
	if (prefs.getBoolPref("bookmark") == true){
        applyIt("bookmark.css");
    }
	if (prefs.getBoolPref("addon") == true){
        applyIt("addon.css");
    }
	if (prefs.getBoolPref("personalbutton") == true){
        applyIt("personalbutton.css");
    }
	if (prefs.getBoolPref("toolbarbutton") == true){
        applyIt("toolbarbutton.css");
    }
	if (prefs.getBoolPref("navbarbutton") == true){
        applyIt("navbar.css");
    }
	if (prefs.getBoolPref("fix") == true){
        applyIt("fix.css");
    }
	}
}

// this throws and is unnecessary in firefox 4+

if (XPCOMUtils.generateNSGetFactory)
    var NSGetFactory = XPCOMUtils.generateNSGetFactory([noiaMoonOptions]);
else
    var NSGetModule = XPCOMUtils.generateNSGetModule([noiaMoonOptions]);
