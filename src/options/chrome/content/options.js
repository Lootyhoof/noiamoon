if (!noiamoonop){var noiamoonop = {};}
if (!noiamoonop.options){noiamoonop.options = {};}

noiamoonop.options = {

prefs: Components.classes["@mozilla.org/preferences-service;1"]
    .getService(Components.interfaces.nsIPrefService)
    .getBranch("extensions.noiamoonop."),

//get options from prefs for options dialog
init: function(){
    var prefs = this.prefs,idTmp;

    function set(id,pref){
        idTmp = document.getElementById(id);
        if (prefs.getBoolPref(pref) == true){
            idTmp.value = 1;
        } else {
            idTmp.value = 0;
        }
    }
    set("SemiRoundedtabRadio","semiroundedtab");
	set("rdtabRadio","rdtab");
	set("sqtabRadio","sqtab");	
	set("rdbuttonRadio","rdbutton");
	set("rdmenubuttonRadio","rdmenubutton");
	set("rdtabboxRadio","rdtabbox");
	set("bookmarkRadio","bookmark");
	set("addonRadio","addon");
	
	if (prefs.getBoolPref("grey") == false){
		document.getElementById('grey2Radio').disabled = true;
		document.getElementById('darkerRadio').disabled = true;
		document.getElementById('tabbarRadio').disabled = true;	
	}
	
	if (prefs.getBoolPref("grey") == true) {
		document.getElementById('grey2Radio').disabled = false;
		document.getElementById('darkerRadio').disabled = false;
		document.getElementById('tabbarRadio').disabled = false;	
	}
	
	if (prefs.getBoolPref("dark") == true) {
		document.getElementById('stripRadio').disabled = true;	
		document.getElementById('noiamoonpersona').disabled = true;
	}		
	
	if (prefs.getBoolPref("dark") == false) {
		document.getElementById('stripRadio').disabled = false;	
		document.getElementById('noiamoonpersona').disabled = false;		
	}	
	
	var xulRuntime = Components.classes["@mozilla.org/xre/app-info;1"]
        .getService(Components.interfaces.nsIXULRuntime);
		
	if ("Darwin" == xulRuntime.OS) {	
		document.getElementById('normalRadio').disabled = true;	
		document.getElementById('grey2Radio').disabled = true;	
	}
	
	if ("Linux" == xulRuntime.OS) {	
		document.getElementById('normalRadio').disabled = true;	
		document.getElementById('grey2Radio').disabled = true;	
	}
	
},
tOpen: function(url) {

	var wm  = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService();
	var wmi = wm.QueryInterface(Components.interfaces.nsIWindowMediator);
	var win = wmi.getMostRecentWindow("navigator:browser");
	if (win) {
		let tab = win.gBrowser.addTab(url);
		win.gBrowser.selectedTab = tab;
		return;
	}
},

resetnf: function() {
    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService)
        .getBranch("extensions.noiamoonop.");

		this.prefs.clearUserPref("dark");
		this.prefs.setBoolPref("grey",true);		
		this.prefs.clearUserPref("blue");
		this.prefs.clearUserPref("grey2");
		this.prefs.clearUserPref("semiroundedtab");		
		this.prefs.clearUserPref("rdtab");
		this.prefs.clearUserPref("sqtab");
		this.prefs.clearUserPref("shadow");
		this.prefs.clearUserPref("closebutton");
		this.prefs.clearUserPref("findbartop");
		this.prefs.clearUserPref("noline");
		this.prefs.clearUserPref("tabbar");
		this.prefs.clearUserPref("strip");
		this.prefs.clearUserPref("solid");
		this.prefs.clearUserPref("tabbottom");
		this.prefs.clearUserPref("normal");
		this.prefs.clearUserPref("tbnormal");
		this.prefs.clearUserPref("darker");
		this.prefs.clearUserPref("light");
		this.prefs.clearUserPref("hide");
		this.prefs.clearUserPref("rdbutton");
		this.prefs.clearUserPref("rdmenubutton");
		this.prefs.clearUserPref("rdtabbox");
		this.prefs.clearUserPref("warm");
		this.prefs.clearUserPref("red");
		this.prefs.clearUserPref("red2");
		this.prefs.clearUserPref("bookmark");
		this.prefs.clearUserPref("addon");
		this.prefs.clearUserPref("personalbutton");
		this.prefs.clearUserPref("toolbarbutton");
		this.prefs.clearUserPref("navbarbutton");
		this.prefs.clearUserPref("movable");
		this.prefs.clearUserPref("plain");
		this.prefs.clearUserPref("background");	
		this.prefs.clearUserPref("fix");
		this.prefs.clearUserPref("ontop");		
		this.prefs.setBoolPref("dark2",false);
		this.prefs.setBoolPref("blue2",false);
		this.prefs.setBoolPref("noline2",false);
		this.prefs.setBoolPref("tabbar2",true);	
},

//when you press a radio
radioChange: function(value,which){

    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService)
        .getBranch("extensions.noiamoonop.");
		
	var prefgen = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("");
		
    this.applyCSS(which,value);
    if (which == "menuicons" || which == "buttonicons"){
        if (value == true){
            value = false;
        } else {
            value = true;
        }
    }
	
    this.prefs.setBoolPref(which,value);
	
	var xulRuntime = Components.classes["@mozilla.org/xre/app-info;1"]
        .getService(Components.interfaces.nsIXULRuntime);
		  
    // if ("Darwin" == xulRuntime.OS) {
	//	if(which=="dark"){
	//	if (prefs.getBoolPref("dark") == true) {
	//	this.prefs.setBoolPref("dark2",true);this.applyCSS("dark2",true);
	//}
	//else {
	//    this.prefs.setBoolPref("dark2",false);this.applyCSS("dark2",false);
	//}
	//}
	//}
	
	
    // Set attribute on #main-window for use by Noia Fox theme.
    this.firefox = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).
      getMostRecentWindow( "navigator:browser" ).document;
      this.mainWindow = this.firefox.getElementById("main-window");
    
	if ("Darwin" == xulRuntime.OS) {
	  this.mainWindow.setAttribute("nfdarwin",true);
	} else {
	  this.mainWindow.setAttribute("nfdarwin",false);
	}
	
	if ("Linux" == xulRuntime.OS) {
	  this.mainWindow.setAttribute("nflinux",true);
	} else {
	  this.mainWindow.setAttribute("nflinux",false);
	}
	
	if (prefs.getBoolPref("dark") == true){
	  this.mainWindow.setAttribute("nfblack",true);
	} else {
	  this.mainWindow.setAttribute("nfblack",false);
	}
	if (prefs.getBoolPref("strip") == true){
	  this.mainWindow.setAttribute("nfstrip",true);
	} else {
	  this.mainWindow.setAttribute("nfstrip",false);
	}
	if (prefs.getBoolPref("solid") == true){
	  this.mainWindow.setAttribute("nfsolid",true);
	} else {
	  this.mainWindow.setAttribute("nfsolid",false);
	}
	if (prefs.getBoolPref("noline") == true){
	  this.mainWindow.setAttribute("nfnoline",true);
	} else {
	  this.mainWindow.setAttribute("nfnoline",false);
	}
    if (prefs.getBoolPref("tabbar") == true){
	  this.mainWindow.setAttribute("nftabbar",true);
	} else {
	  this.mainWindow.setAttribute("nftabbar",false);
	}
	
	if (prefs.getBoolPref("tabbottom") == true){
	  this.mainWindow.setAttribute("nfbottom",true);
	} else {
	  this.mainWindow.setAttribute("nfbottom",false);
	}
	if (prefs.getBoolPref("blue") == true){
	  this.mainWindow.setAttribute("nfblue",true);
	} else {
	  this.mainWindow.setAttribute("nfblue",false);
	}
	if (prefs.getBoolPref("light") == true){
	  this.mainWindow.setAttribute("nflight",true);
	} else {
	  this.mainWindow.setAttribute("nflight",false);
	}
	if (prefs.getBoolPref("rdtab") == true){
	  this.mainWindow.setAttribute("nfrdtab",true);
	} else {
	  this.mainWindow.setAttribute("nfrdtab",false);
	}
	if (prefs.getBoolPref("normal") == true){
	  this.mainWindow.setAttribute("nfnormal",true);
	} else {
	  this.mainWindow.setAttribute("nfnormal",false);
	}
	
	
	if(which=="tabbottom"){
	if (prefs.getBoolPref("tabbottom") == true){
	if (prefgen.getBoolPref("browser.tabs.onTop") == true){
		this.prefs.setBoolPref("ontop",true);}	
	if (prefgen.getBoolPref("browser.tabs.onTop") == false){
		this.prefs.setBoolPref("ontop",false);}
	}
		prefgen.setBoolPref("browser.tabs.onTop",false);	
	}
	if(which=="ontop"){	
	if (prefs.getBoolPref("ontop") == true){
		this.prefs.setBoolPref("tabbottom",false);this.applyCSS("tabbottom",false);		
	}
	}
	
	if(which=="tabbottom"){
	if (prefs.getBoolPref("tabbottom") == false){
	if (prefs.getBoolPref("ontop") == false) {
		prefgen.setBoolPref("browser.tabs.onTop",false);
	}
	if (prefs.getBoolPref("ontop") == true) {
		prefgen.setBoolPref("browser.tabs.onTop",true);
	}				
	}
	}
		
	if (prefs.getBoolPref("grey") == false){
	if (prefs.getBoolPref("blue") == false){
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("light") == false){	
	if (prefs.getBoolPref("noline") == false){
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",true);
	}
    }
	}
	}
	}
	
	if (prefs.getBoolPref("grey") == false){
	if (prefs.getBoolPref("blue") == false){
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("light") == false){	
	if (prefs.getBoolPref("noline") == true){
		this.prefs.setBoolPref("tabbar2",true);this.applyCSS("tabbar2",true);
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",false);
	}
    }
	}
	}
	}
	
	if (prefs.getBoolPref("grey") == false){
	if (prefs.getBoolPref("blue") == false){
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("light") == false){
		this.prefs.setBoolPref("grey",true);this.applyCSS("grey",true);
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
		this.prefs.setBoolPref("light",false);this.applyCSS("light",false);
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
		this.prefs.setBoolPref("dark2",false);this.applyCSS("dark2",false);
		this.prefs.setBoolPref("solid",true);this.applyCSS("solid",true);
		this.mainWindow.setAttribute("nfblue",false);
		this.mainWindow.setAttribute("nfblack",false);
		this.mainWindow.setAttribute("nflight",false);
    }
	}
	}
	}
	
		
	if(which=="dark"){
	if (prefs.getBoolPref("dark") == true){
		this.prefs.setBoolPref("dark2",true);this.applyCSS("dark2",true);
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
		this.prefs.setBoolPref("noline",false);this.applyCSS("noline",false);
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
		this.prefs.setBoolPref("grey",false);this.applyCSS("grey",false);
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
		this.prefs.setBoolPref("light",false);this.applyCSS("light",false);
		this.prefs.setBoolPref("blue",false);this.applyCSS("blue",false);
		this.mainWindow.setAttribute("nfblue",false);
		this.mainWindow.setAttribute("nflight",false);
	}
	}	
	
	if(which=="grey"){
	if (prefs.getBoolPref("grey") == true){
		this.prefs.setBoolPref("dark",false);this.applyCSS("dark",false);
		this.prefs.setBoolPref("dark2",false);this.applyCSS("dark2",false);
		this.prefs.setBoolPref("blue",false);this.applyCSS("blue",false);
		this.prefs.setBoolPref("light",false);this.applyCSS("light",false);
		this.prefs.setBoolPref("solid",true);this.applyCSS("solid",true);
		this.mainWindow.setAttribute("nfblue",false);
		this.mainWindow.setAttribute("nfblack",false);
		this.mainWindow.setAttribute("nflight",false);
	}
	}	
	
	if(which=="grey"){
	if (prefs.getBoolPref("grey") == true){
	if (prefs.getBoolPref("noline") == false){
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",true);
	}
	}
	}	
	
	if(which=="grey"){
	if (prefs.getBoolPref("grey") == true){
	if (prefs.getBoolPref("noline") == true){
		this.prefs.setBoolPref("tabbar2",true);this.applyCSS("tabbar2",true);
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",false);
	}
	}
	}	
	
	if(which=="blue"){
	if (prefs.getBoolPref("blue") == true){
		this.prefs.setBoolPref("dark",false);this.applyCSS("dark",false);
		this.prefs.setBoolPref("dark2",false);this.applyCSS("dark2",false);
		this.prefs.setBoolPref("grey",false);this.applyCSS("grey",false);
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
		this.prefs.setBoolPref("light",false);this.applyCSS("light",false);
		this.mainWindow.setAttribute("nfblack",false);
		this.mainWindow.setAttribute("nflight",false);
	}
	}
	
	if(which=="grey2"){
		if (prefs.getBoolPref("grey2") == true){
		if (prefs.getBoolPref("dark") == true){
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
		}
		}
	}
	
	if(which=="darker"){
		if (prefs.getBoolPref("darker") == true){
		if (prefs.getBoolPref("dark") == true){
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
		}
		}
	}
	
	if(which=="light"){
		if (prefs.getBoolPref("light") == true){
		this.prefs.setBoolPref("grey",false);this.applyCSS("grey",false);
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
		this.prefs.setBoolPref("dark",false);this.applyCSS("dark",false);
		this.prefs.setBoolPref("dark2",false);this.applyCSS("dark2",false);
		this.prefs.setBoolPref("blue",false);this.applyCSS("blue",false);
		this.mainWindow.setAttribute("nfblue",false);
		this.mainWindow.setAttribute("nfblack",false);		
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
		}
	}
	
	if(which=="light"){
		if (prefs.getBoolPref("light") == false){
		if (prefs.getBoolPref("noline") == false){
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",true);
	}
	}
	}
	
	if(which=="light"){
		if (prefs.getBoolPref("light") == false){
		if (prefs.getBoolPref("noline") == true){
		this.prefs.setBoolPref("tabbar2",true);this.applyCSS("tabbar2",true);
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",false);
	}
	}
	}
		
	
	if(which=="normal"){
		if (prefs.getBoolPref("normal") == true){
				if (prefs.getBoolPref("grey2") == true){
					this.prefs.setBoolPref("normal",false);this.applyCSS("normal",false);
				}
		}
	}
	
	if(which=="grey2"){
		if (prefs.getBoolPref("grey2") == true){
				if (prefs.getBoolPref("normal") == true){
					this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
				}
		}
	}
	

	if(which=="semiroundedtab"){
		this.prefs.setBoolPref("rdtab",false);this.applyCSS("rdtab",false);
		this.prefs.setBoolPref("sqtab",false);this.applyCSS("sqtab",false);
	}
	
	if(which=="rdtab"){
		this.prefs.setBoolPref("semiroundedtab",false);this.applyCSS("semiroundedtab",false);
		this.prefs.setBoolPref("sqtab",false);this.applyCSS("sqtab",false);
	}
	
	if(which=="sqtab"){
		this.prefs.setBoolPref("semiroundedtab",false);this.applyCSS("semiroundedtab",false);
		this.prefs.setBoolPref("rdtab",false);this.applyCSS("rdtab",false);
	}
	
	if(which=="hide"){
		this.prefs.setBoolPref("tabbottom",false);this.applyCSS("tabbottom",false);
	}
	
	if(which=="tabbottom"){
		this.prefs.setBoolPref("hide",false);this.applyCSS("hide",false);
	}
	
	if(which=="tabbar"){
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("blue") == true){
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
	}
	}
	}
	
	if(which=="tabbar"){
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("light") == true){
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
	}
	}
	}
	
	if(which=="grey2"){
	if (prefs.getBoolPref("grey2") == true){
	if (prefs.getBoolPref("blue") == true){
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
	}
	}
	}
	
	if(which=="grey2"){
	if (prefs.getBoolPref("grey2") == true){
	if (prefs.getBoolPref("light") == true){
		this.prefs.setBoolPref("grey2",false);this.applyCSS("grey2",false);
	}
	}
	}
	
	if(which=="darker"){
	if (prefs.getBoolPref("darker") == true){
	if (prefs.getBoolPref("blue") == true){
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
	}
	}
	}
	
	if(which=="darker"){
	if (prefs.getBoolPref("darker") == true){
	if (prefs.getBoolPref("light") == true){
		this.prefs.setBoolPref("darker",false);this.applyCSS("darker",false);
	}
	}
	}
	
	if(which=="tabbar"){
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("noline") == false){
	if (prefs.getBoolPref("dark") == true){
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
	}
	}
	}
	}
	
	if(which=="tabbar"){
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("noline") == true){
	if (prefs.getBoolPref("dark") == true){
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);		
	}
	}
	}
	}
	
	if(which=="tabbar"){
	if (prefs.getBoolPref("tabbar") == false){	
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
	}
	}

	if(which=="noline"){
	if (prefs.getBoolPref("noline") == true){
	if (prefs.getBoolPref("tabbar") == true){
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
		this.prefs.setBoolPref("tabbar",true);this.applyCSS("tabbar",true);
	}
	}
	}
	if(which=="noline"){
	if (prefs.getBoolPref("noline") == true){
	if (prefs.getBoolPref("tabbar") == false){
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
	}
	}
	}
	if(which=="noline"){
	if (prefs.getBoolPref("noline") == false){
	if (prefs.getBoolPref("tabbar") == false){
		this.prefs.setBoolPref("tabbar2",false);this.applyCSS("tabbar2",false);
		this.prefs.setBoolPref("tabbar",false);this.applyCSS("tabbar",false);
	}
	}
	}

	if (prefs.getBoolPref("noline") == false){
	if (prefs.getBoolPref("tabbar") == true){
	if (prefs.getBoolPref("dark") == false){
		this.prefs.setBoolPref("tabbar2",true);this.applyCSS("tabbar2",true);
		this.applyCSS("tabbar",false);
	}
	}
	}

	
	if (prefs.getBoolPref("dark") == true){
	if (prefs.getBoolPref("strip") == true){
		this.prefs.setBoolPref("strip",false);this.applyCSS("strip",false);
	}
	}
	
	if (prefs.getBoolPref("dark") == true){
	if (prefs.getBoolPref("solid") == true){
		this.applyCSS("solid",false);
		this.applyCSS("solid2",true);
	}
	}
	
	if (prefs.getBoolPref("dark") == true){
	if (prefs.getBoolPref("solid") == false){
		this.applyCSS("solid",false);
		this.applyCSS("solid2",false);
	}
	}
	
	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("solid") == true){
		this.applyCSS("solid",true);
		this.applyCSS("solid2",false);
	}
	}

	if (prefs.getBoolPref("dark") == false){
	if (prefs.getBoolPref("noline") == true){
		this.prefs.setBoolPref("noline2",true);this.applyCSS("noline2",true);
	}
	}
	
	if (prefs.getBoolPref("noline") == false){
		this.prefs.setBoolPref("noline2",false);this.applyCSS("noline2",false);
	}
	
	if(which=="red"){
	if (prefs.getBoolPref("red") == true){
		this.prefs.setBoolPref("red2",false);this.applyCSS("red2",false);
	}
	}
	
	if(which=="red2"){
	if (prefs.getBoolPref("red2") == true){
		this.prefs.setBoolPref("red",false);this.applyCSS("red",false);
	}
	}
	
	this.init();
},

applyCSS: function(which,enable){

    function applyIt(file){
        var uri = ios.newURI(c + file,null,null);
        if (enable == false){
            if (sss.sheetRegistered(uri,sss.AGENT_SHEET)){
                sss.unregisterSheet(uri,sss.AGENT_SHEET);
            }
        } else {
            if (!sss.sheetRegistered(uri,sss.AGENT_SHEET)){
                sss.loadAndRegisterSheet(uri,sss.AGENT_SHEET);
            }
        }
    }
    var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"]
        .getService(Components.interfaces.nsIStyleSheetService);
    var ios = Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var uri;
    var c = "chrome://noiamoonoptions/content/";

		if (which == "semiroundedtab"){
        applyIt("semi_rounded_tab.css");
    }	
		if (which == "dark"){
        applyIt("dark.css");
    }
		if (which == "blue"){
        applyIt("blue.css");
    }	
		if (which == "grey"){
        applyIt("grey.css");
    }
		if (which == "darker"){
        applyIt("darker.css");
    }
	
		if (which == "light"){
        applyIt("light.css");
    }
		if (which == "grey2"){
        applyIt("grey2.css");
    }
		if (which == "dark2"){
        applyIt("dark2.css");
    }
		if (which == "rdtab"){
        applyIt("rdtab.css");
    }
		if (which == "sqtab"){
        applyIt("sqtab.css");
    }
		if (which == "shadow"){
        applyIt("shadow.css");
    }
	    if (which == "closebutton"){
        applyIt("closebutton.css");
    }
	    if (which == "findbartop"){
        applyIt("findbartop.css");
    }
		if (which == "noline"){
        applyIt("noline.css");
    }	
		if (which == "noline2"){
        applyIt("noline2.css");
    }
	    if (which == "tabbar"){
        applyIt("tabbar.css");
    }
		if (which == "strip"){
        applyIt("strip.css");
    }
		if (which == "solid"){
        applyIt("solid.css");
    }
		if (which == "solid2"){
        applyIt("solid2.css");
    }
		if (which == "tabbar2"){
        applyIt("tabbar2.css");
	}
		if (which == "tabbottom"){
        applyIt("tabbottom.css");
    }
	    if (which == "normal"){
        applyIt("normal.css");
    }
		if (which == "hide"){
        applyIt("hide.css");
    }
		if (which == "rdbutton"){
        applyIt("rdbutton.css");
    }
		if (which == "rdmenubutton"){
        applyIt("rdmenubutton.css");
    }
		if (which == "rdtabbox"){
        applyIt("rdtabbox.css");
    }
		if (which == "warm"){
        applyIt("warm.css");
    }
		if (which == "red"){
        applyIt("red.css");
    }
		if (which == "red2"){
        applyIt("red2.css");
    }
		if (which == "bookmark"){
        applyIt("bookmark.css");
    }
		if (which == "addon"){
        applyIt("addon.css");
    }			
		if (which == "personalbutton"){
        applyIt("personalbutton.css");
    }
		if (which == "toolbarbutton"){
        applyIt("toolbarbutton.css");
    }
		if (which == "navbarbutton"){
        applyIt("navbar.css");
    }
		if (which == "movable"){
        applyIt("movable.css");
    }
		if (which == "fix"){
        applyIt("fix.css");
    }
	}
};
