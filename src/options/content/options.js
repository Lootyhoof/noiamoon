Components.utils.import("resource://gre/modules/AddonManager.jsm");

if (typeof noia4themeconf == "undefined") {var noia4themeconf = {};};
if (!noia4themeconf.settings) {noia4themeconf.settings = {};};

noia4themeconf.settings = {

prefs:			Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.noiaop."),
prefsLwT:		Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("lightweightThemes."),
stringBundle:	Components.classes["@mozilla.org/intl/stringbundle;1"].getService(Components.interfaces.nsIStringBundleService).createBundle("chrome://noiaop/locale/noiaop.properties"),

sss: Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService),
ios: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService),

tabfontcolorsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
tabactfontcolorsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
toolbarfontcolorsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
statusbarfontcolorsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
dropdownmenufontcolorsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),

tabfontshadowsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
tabactfontshadowsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
toolbarfontshadowsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
statusbarfontshadowsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),
dropdownmenufontshadowsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),

tabbgcolorsheet: Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI("data:text/css;charset=utf-8," + encodeURIComponent(''), null, null),

needsRestart: 			false,
hasChangedValues: 		false,
personaSkinOnStartup:	false,

init: function() {

	this.applyCSS("fixes",true);
	
	if (this.prefs.getBoolPref("favicon_w") && this.prefs.getBoolPref("favicon") && this.prefs.getBoolPref("favicon_hg")){
		this.applyCSS("favicon_hg",true);
	} else if (this.prefs.getBoolPref("favicon_w") && this.prefs.getBoolPref("favicon")){
		this.applyCSS("favicon",true);
	}	

	switch (this.prefs.getCharPref("skin")) {
		case "skin_graylight": 	this.applyCSS("skin_graylight",true); 	break;
		case "skin_graydark": 	this.applyCSS("skin_graydark",true);  	break;
		case "skin_gray_f3": 	this.applyCSS("skin_gray_f3",true);  	break;
		case "skin_black": 		this.applyCSS("skin_black",true);  		break;
		case "skin_black_f3": 	this.applyCSS("skin_black_f3",true);	break;
		case "skin_blue": 		this.applyCSS("skin_blue",true);  		break;
		case "skin_blue_f3":	this.applyCSS("skin_blue_f3",true);		break;
		case "skin_ff4def": 	this.applyCSS("skin_ff4def",true);		break;
		case "skin_glass1":		this.applyCSS("skin_glass1",true);		break;
		case "skin_glass2": 	this.applyCSS("skin_glass2",true);		break;
	}
	
	switch (this.prefs.getCharPref("appbutton")) {
		case "appbutorg": 		this.applyCSS("appbutorg",true);  		break;
		case "appbutaurora":	this.applyCSS("appbutaurora",true);		break;
		case "appbutnightly": 	this.applyCSS("appbutnightly",true);	break;
		case "appbutao":		this.applyCSS("appbutao",true);			break;
		case "appbutat": 		this.applyCSS("appbutat",true);			break;
	}

	switch (this.prefs.getCharPref("hovandactmenu")) {
		case "haamtransp": 		this.applyCSS("haamtransp",true);  		break;
		case "haampurple":		this.applyCSS("haampurple",true);		break;
		case "haamblue": 		this.applyCSS("haamblue",true);			break;
		case "haamsemitransp":	this.applyCSS("haamsemitransp",true);	break;
	}
	
	switch (this.prefs.getCharPref("scrollbars")) {
		case "scrollbars1": 	this.applyCSS("scrollbars1",true);	break;
		case "scrollbars2":		this.applyCSS("scrollbars2",true);	break;
	}

	switch (this.prefs.getCharPref("ntabs")) {
		case "tabs_gray": 		this.applyCSS("tabs_gray",true);  	break;
		case "tabs_gray_m": 	this.applyCSS("tabs_gray_m",true);  break;
		case "tabs_gray_c": 	this.applyCSS("tabs_gray_c",true);  break;
		case "tabs_black": 		this.applyCSS("tabs_black",true);  	break;
		case "tabs_blue": 		this.applyCSS("tabs_blue",true);  	break;
		case "tabs_ff4def": 	this.applyCSS("tabs_ff4def",true);  break;
		case "tabs_glass1": 	this.applyCSS("tabs_glass1",true);  break;
		case "tabs_glass2": 	this.applyCSS("tabs_glass2",true);  break;
		case "tabs_glass3": 	this.applyCSS("tabs_glass3",true);  break;
		case "noiatabs1": 		this.applyCSS("noiatabs1",true);  	break;
		case "noiatabs2":		this.applyCSS("noiatabs2",true);	break;
		case "noiatabs3": 		this.applyCSS("noiatabs3",true);	break;
		case "noiatabs4":		this.applyCSS("noiatabs4",true);	break;
		case "noiatabs5": 		this.applyCSS("noiatabs5",true);	break;
	}

	switch (this.prefs.getCharPref("tabprogress")) {
		case "tabprog": 		this.applyCSS("tabprog",true);  	break;
		case "tabprog2":		this.applyCSS("tabprog2",true);		break;
		case "tabprog3": 		this.applyCSS("tabprog3",true);		break;
	}

	switch (this.prefs.getCharPref("tabactblink")) {
		case "act1": 			this.applyCSS("act1",true); 		break;
		case "act2":			this.applyCSS("act2",true);			break;
		case "act3": 			this.applyCSS("act3",true);			break;
	}
	
	switch (this.prefs.getCharPref("alttabthrobber")) {
		case "alttabthr1": 		this.applyCSS("alttabthr1",true); 	break;
		case "alttabthr2":		this.applyCSS("alttabthr2",true);	break;
	}
	
	if (this.prefs.getBoolPref("titlebarosd"))		{ this.applyCSS("titlebarosd",true); }
	if (this.prefs.getBoolPref("altmb"))			{ this.applyCSS("altmb",true); }
	if (this.prefs.getBoolPref("appbut"))			{ this.applyCSS("appbut",true); }
	if (this.prefs.getBoolPref("appbut_nt"))		{ this.applyCSS("appbut_nt",true); }
	if (this.prefs.getBoolPref("appbutdm"))			{ this.applyCSS("appbutdm",true); }
	if (this.prefs.getBoolPref("bfdm2"))			{ this.applyCSS("bfdm2",true); }
	if (this.prefs.getBoolPref("bmfolder"))			{ this.applyCSS("bmfolder",true); }
	if (this.prefs.getBoolPref("butdark"))			{ this.applyCSS("butdark",true); }
	if (this.prefs.getBoolPref("butglass"))			{ this.applyCSS("butglass",true); }
	if (this.prefs.getBoolPref("butsemiround"))		{ this.applyCSS("butsemiround",true); }
	if (this.prefs.getBoolPref("cleaner"))			{ this.applyCSS("cleaner",true); }
	if (this.prefs.getBoolPref("closebut"))			{ this.applyCSS("closebut",true); }
	if (this.prefs.getBoolPref("closebutbig"))		{ this.applyCSS("closebutbig",true); }
	if (this.prefs.getBoolPref("closebuthide"))		{ this.applyCSS("closebuthide",true); }
	if (this.prefs.getBoolPref("closebut_alw"))		{ this.applyCSS("closebut_alw",true); }
	if (this.prefs.getBoolPref("ddboldfont"))		{ this.applyCSS("ddboldfont",true); }
	if (this.prefs.getBoolPref("dddb"))				{ this.applyCSS("dddb",true); }
	if (this.prefs.getBoolPref("ddg"))				{ this.applyCSS("ddg",true); }
	if (this.prefs.getBoolPref("ddgb"))				{ this.applyCSS("ddgb",true); }
	if (this.prefs.getBoolPref("ff4deftbb"))		{ this.applyCSS("ff4deftbb",true); }
	if (this.prefs.getBoolPref("ff4deftbb2"))		{ this.applyCSS("ff4deftbb2",true); }
	if (this.prefs.getBoolPref("fullglassdd"))		{ this.applyCSS("fullglassdd",true); }
	if (this.prefs.getBoolPref("fullglassnopref"))	{ this.applyCSS("fullglassnopref",true); }
	if (this.prefs.getBoolPref("fullglasstoolt"))	{ this.applyCSS("fullglasstoolt",true); }
	if (this.prefs.getBoolPref("hideclose1"))		{ this.applyCSS("hideclose1",true); }
	if (this.prefs.getBoolPref("hideclose2"))		{ this.applyCSS("hideclose2",true); }
	if (this.prefs.getBoolPref("hidetabbarbg"))		{ this.applyCSS("hidetabbarbg",true); }
	if (this.prefs.getBoolPref("highbook"))			{ this.applyCSS("highbook",true); }
	if (this.prefs.getBoolPref("hightabs"))			{ this.applyCSS("hightabs",true); }
	if (this.prefs.getBoolPref("icorot"))			{ this.applyCSS("icorot",true); }
	if (this.prefs.getBoolPref("icorot2"))			{ this.applyCSS("icorot2",true); }
	if (this.prefs.getBoolPref("lowtabs"))			{ this.applyCSS("lowtabs",true); }
	if (this.prefs.getBoolPref("menuspace"))		{ this.applyCSS("menuspace",true); }
	if (this.prefs.getBoolPref("nbtaba"))			{ this.applyCSS("nbtaba",true); }
	if (this.prefs.getBoolPref("nbtabh"))			{ this.applyCSS("nbtabh",true); }
	if (this.prefs.getBoolPref("noactblueb"))		{ this.applyCSS("noactblueb",true); }
	if (this.prefs.getBoolPref("noactblueblack"))	{ this.applyCSS("noactblueblack",true); }
	if (this.prefs.getBoolPref("noactblueg"))		{ this.applyCSS("noactblueg",true); }
	if (this.prefs.getBoolPref("bfdm1"))			{ this.applyCSS("bfdm1",true); }
	if (this.prefs.getBoolPref("persona"))			{ this.applyCSS("persona",true); }
	if (this.prefs.getBoolPref("roundtab"))			{ this.applyCSS("roundtab",true); }
	if (this.prefs.getBoolPref("roundttab"))		{ this.applyCSS("roundttab",true); }
	if (this.prefs.getBoolPref("roxp"))				{ this.applyCSS("roxp",true); }
	if (this.prefs.getBoolPref("smallfw"))			{ this.applyCSS("smallfw",true); }
	if (this.prefs.getBoolPref("smallfw2"))			{ this.applyCSS("smallfw2",true); }
	if (this.prefs.getBoolPref("smalltbb"))			{ this.applyCSS("smalltbb",true); }
	if (this.prefs.getBoolPref("tabclose"))			{ this.applyCSS("tabclose",true); }
	if (this.prefs.getBoolPref("tabtextmargin"))	{ this.applyCSS("tabtextmargin",true); }
	if (this.prefs.getBoolPref("tbbgh"))			{ this.applyCSS("tbbgh",true); }
	if (this.prefs.getBoolPref("tbbgh2"))			{ this.applyCSS("tbbgh2",true); }
	if (this.prefs.getBoolPref("tbbgray"))			{ this.applyCSS("tbbgray",true); }
	if (this.prefs.getBoolPref("tbnocheckbg"))		{ this.applyCSS("tbnocheckbg",true); }
	if (this.prefs.getBoolPref("tooltip1"))			{ this.applyCSS("tooltip1",true); }
	if (this.prefs.getBoolPref("urlbarbf"))			{ this.applyCSS("urlbarbf",true); }
	if (this.prefs.getBoolPref("wincon1"))			{ this.applyCSS("wincon1",true); }
	if (this.prefs.getBoolPref("wincon2"))			{ this.applyCSS("wincon2",true); }	
	if (this.prefs.getBoolPref("smallfw3"))			{ this.applyCSS("smallfw3",true); }

	if (Components.classes["@mozilla.org/preferences-service;1"]
	.getService(Components.interfaces.nsIPrefService)
		.getBranch("general.skins.").getCharPref("selectedSkin")=="noia4"){
		
		//Set fonts and shadows on startup only if Noia4 theme is enabled
		if(this.prefs.getBoolPref("tabfontcustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("tabfontcolor"), "tabfontcolor", true);
		}

		if(this.prefs.getBoolPref("tabhfontcustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("tabactfontcolor"), "tabactfontcolor", true);
		}
		
		if(this.prefs.getBoolPref("tbfontcustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("toolbarfontcolor"), "toolbarfontcolor", true);
		}
		
		if(this.prefs.getBoolPref("sbfontcustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("statusbarfontcolor"), "statusbarfontcolor", true);
		}	
		
		if(this.prefs.getBoolPref("ddfontcustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("dropdownmenufontcolor"), "dropdownmenufontcolor", true);
		}	

		if(this.prefs.getBoolPref("tabtscustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("tabfontshadow"), "tabfontshadow", true);
		}
		
		if(this.prefs.getBoolPref("tabhtscustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("tabactfontshadow"), "tabactfontshadow", true);
		}
		
		if(this.prefs.getBoolPref("tbtscustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("toolbarfontshadow"), "toolbarfontshadow", true);
		}
		
		if(this.prefs.getBoolPref("sbtscustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("statusbarfontshadow"), "statusbarfontshadow", true);
		}
		
		if(this.prefs.getBoolPref("ddtscustom") == true) {
			this.fontappearanceChange(this.prefs.getCharPref("dropdownmenufontshadow"), "dropdownmenufontshadow", true);
		}
		
		if (this.prefs.getBoolPref("owntabs"))	{
			this.manageTabSheet(true);
		}
	
	}
	
},

// *********************************************************************************************************************
// **** Startup and shutdown functions
// *********************************************************************************************************************
// Get options from prefs for options dialog
manager_init: function() {

	if(document.getElementById('n4favicon_protabw').checked==false){
		document.getElementById("n4favicon_protab").disabled=true;
	}	
	if(document.getElementById('n4favicon_protab').checked==false){
		document.getElementById("n4favicon_protabhg").disabled=true;
	}
	
	// Initialize the radthis.ios from the prefs
	this.setDialogElements();
	
	document.documentElement.getButton("extra2").type = "menu";
    document.documentElement.getButton("extra2").setAttribute("popup", "tc_settingsPopup");
	
	// May we enable the Personas support?
	this.personaSkinEnabled();
	this.personaSkinOnStartup = this.isPersonaSkinEnabled();

	document.getElementById("Statusline1").value = this.stringBundle.GetStringFromName("status.msg.optionsinfo1");
	document.getElementById("Statusline2").value = this.stringBundle.GetStringFromName("status.msg.optionsinfo2");

	return true;
},

// *********************************************************************************************************************
unload: function() {

	var app        = Components.classes["@mozilla.org/toolkit/app-startup;1"].getService(Components.interfaces.nsIAppStartup);
	var promptSvc  = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);
	var personaSkinSelected;

	personaSkinSelected = this.isPersonaSkinEnabled();
	// Had the user activated the Noia theme before calling us?
	// If not - and he changed anything - we will do it for him and restart Firefox
	this.activateThemeNoia();

	// Is the Persona skin selected?
	if (personaSkinSelected) {
		this.prefsLwT.setBoolPref("isThemeSelected",true);
		this.prefsLwT.setBoolPref("persisted.footerURL",true);
		this.prefsLwT.setBoolPref("persisted.headerURL",true);
	} else {
		this.prefsLwT.setBoolPref("isThemeSelected",false);
		this.prefsLwT.setBoolPref("persisted.footerURL",false);
		this.prefsLwT.setBoolPref("persisted.headerURL",false);
	}

	if (this.needsRestart &&
		// Prompting the user for restart allowance is a good practise AND
		// it solves the racing condition in activateThemeNoia() where AddonManager.getAddonByID need some time
		// to activate the new theme (else we are faced with the fact that this unload() function is more quicker
		// finished - and the browser is restarting - before the new theme is set.
		promptSvc.confirm(null,
			this.stringBundle.GetStringFromName("popup.title"),
			this.stringBundle.GetStringFromName("popup.msg.restart")
		)) {
		app.quit(app.eForceQuit | app.eRestart);
	}
	return true;
},

// *********************************************************************************************************************
// **** Helper and other miscellaneous functions
// *********************************************************************************************************************
activateThemeNoia: function() {

	// Insprired by Firefox/omni.ja/safemode.js
	const NOIA_THEME_ID   = "noia-theme@addons.palemoon.org";
	const NOIA_THEME_NAME = "noiamoon";

	var isNoiaSkin         = false;
	try {
		isNoiaSkin = (Components.classes["@mozilla.org/preferences-service;1"]
			.getService(Components.interfaces.nsIPrefService)
				.getBranch("general.skins.").getCharPref("selectedSkin") == NOIA_THEME_NAME) ? true : false;
	} catch(e) {}

    if (!isNoiaSkin && this.hasChangedValues) {
		// Activating our theme disables automatically the default theme (which can not be done by a code like below)
		AddonManager.getAddonByID(NOIA_THEME_ID, function (addon) {
			addon.userDisabled = false;
		});
		this.needsRestart = true;
	}
},

// *********************************************************************************************************************
changePref_And_CSS_Bool: function(which,value) {

	this.prefs.setBoolPref(which,value);
	
	this.applyCSS(which,value);

	// As this function is called by all other theme/tweaks/fixes-oriented functions it is enough to refresh the UI
	// (the dialog radio buttons) once here. This should save CPU-cycles and unnessary calls and flickers
	this.setDialogElements();

	this.hasChangedValues = true;	// for activateThemeNoia and possible restart
},

// *********************************************************************************************************************
changePref_And_CSS_String: function(which,value) {

	this.prefs.setCharPref(which,value);
	
	this.applyCSS(value,true);

	// As this function is called by all other theme/tweaks/fixes-oriented functions it is enough to refresh the UI
	// (the dialog radio buttons) once here. This should save CPU-cycles and unnessary calls and flickers
	this.setDialogElements();

	this.hasChangedValues = true;	// for activateThemeNoia and possible restart
},

// *********************************************************************************************************************
unsetPref_And_CSS_Bool: function(which) {

	this.prefs.setBoolPref(which,false);
	this.applyCSS(which,false);

	this.hasChangedValues = true;	// for activateThemeNoia and possible restart
},

// *********************************************************************************************************************
unsetPref_And_CSS_String: function(which,value) {

	this.prefs.setCharPref(which,value);
	this.applyCSS(value,false);

},

// *********************************************************************************************************************
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

openHelp: function() {
	openDialog("chrome://noiaop/content/overview/overview.html", "", "scrollbars=yes, resizable=yes, width=600, height=600");
},

// *********************************************************************************************************************
isPersonaSkinEnabled: function() {

	return (
		this.prefs.getBoolPref("persona")
	);
},

// *********************************************************************************************************************
// For applying Personas (checking whether we have a persona and if it was selected before Noia)
personaSkinEnabled: function() {

	try{
		var hasLwTheme        = this.prefsLwT.prefHasUserValue("usedThemes");
		var isLwThemeSelected = this.prefsLwT.getBoolPref("isThemeSelected");
	}
	catch(err){}
		
	if (!hasLwTheme) {
		document.getElementById("PersonasCheckbox").disabled = "true";
		document.getElementById("persona_skin").disabled = "true";
		this.prefs.setBoolPref("persona",   false);
	}

	// If the user starts Noia manager for the first time after selecting a Persona (via Add-ons manager),
	// we will guide him to skin preference tab.
	// This combination is unique, because when the user decides not to use Persona support of Noia we will set
	// the lightweightThemes preferences to false on leaving the configurator dialog
	if (hasLwTheme && isLwThemeSelected && !this.isPersonaSkinEnabled()) {
		document.getElementById("tctoptabbox").selectedIndex = 0;
		document.getElementById("tcskintabbox").selectedIndex = 1;
		document.getElementById("Statusline1").value = this.stringBundle.GetStringFromName("status.msg.persona1");
		document.getElementById("Statusline2").value = this.stringBundle.GetStringFromName("status.msg.persona2");
	}
	return hasLwTheme;
},

// *********************************************************************************************************************
// **** The function which do the real skin modifications
// *********************************************************************************************************************
applyCSS: function(which,enable) {

	// Apply or remove the style sheets
	function manageCSS(file) {
		let uri = ios.newURI(c + file,null,null);
		
		try{
			if (enable) {
				if (!sss.sheetRegistered(uri,sss.AGENT_SHEET))
					sss.loadAndRegisterSheet(uri,sss.AGENT_SHEET);
			} else {
				if (sss.sheetRegistered(uri,sss.AGENT_SHEET))
					sss.unregisterSheet(uri,sss.AGENT_SHEET);
			}
		}catch(e){}
	}

	// declaring these variables as constants should be more efficient, as the compiler do only need to calculate them once
	const sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
	const ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
	const c   = "chrome://browser/skin/tcsettings/";

	switch (which) {
	
		case "skin_graydark":		manageCSS("skin_graydark.css");			break;
		case "skin_gray_f3":		manageCSS("skin_gray_f3.css");			break;
		case "skin_graylight":		manageCSS("skin_graylight.css");		break;	
		case "skin_black":			manageCSS("skin_black.css");			break;
		case "skin_black_f3":		manageCSS("skin_black_f3.css");			break;
		case "skin_blue":			manageCSS("skin_blue.css");				break;
		case "skin_blue_f3":		manageCSS("skin_blue_f3.css");			break;		
		case "skin_ff4def":			manageCSS("skin_ff4def.css");			break;
		case "skin_glass1":			manageCSS("skin_glass1.css");			break;
		case "skin_glass2":			manageCSS("skin_glass2.css");			break;
		
		case "tabs_gray": 			manageCSS("tabs_gray.css");  			break;
		case "tabs_gray_m": 		manageCSS("tabs_gray_m.css");  			break;
		case "tabs_gray_c": 		manageCSS("tabs_gray_c.css");  			break;
		case "tabs_black": 			manageCSS("tabs_black.css");  			break;
		case "tabs_blue": 			manageCSS("tabs_blue.css");  			break;
		case "tabs_ff4def": 		manageCSS("tabs_ff4def.css");  			break;
		case "tabs_glass1": 		manageCSS("tabs_glass1.css");  			break;
		case "tabs_glass2": 		manageCSS("tabs_glass2.css");  			break;
		case "tabs_glass3": 		manageCSS("tabs_glass3.css");  			break;
		
		case "titlebarosd":			manageCSS("titlebar_os_default.css");	break;
		case "altmb":				manageCSS("altmenubar.css");			break;
		case "alttabthr1":			manageCSS("alt_throbber1.css");			break;
		case "alttabthr2":			manageCSS("alt_throbber2.css");			break;
		case "appbut":				manageCSS("appbut_icon.css");			break;
		case "appbut_nt":			manageCSS("appbut_icon_nt.css");		break;
		case "appbutao":			manageCSS("appbut_ao.css");				break;
		case "appbutat":			manageCSS("appbut_at.css");				break;
		case "appbutdm":			manageCSS("appbut_dm.css");				break;
		case "appbutorg":			manageCSS("appbut_org.css");			break;
		case "appbutaurora":		manageCSS("appbut_aurora.css");			break;
		case "appbutnightly":		manageCSS("appbut_nightly.css");		break;
		case "bfdm2":				manageCSS("bfdm2.css");					break;
		case "bmfolder":			manageCSS("bookmarkfolder.css");		break;
		case "butdark":				manageCSS("buttons_dark.css");			break;
		case "butglass":			manageCSS("buttons_glass.css");			break;
		case "butsemiround":		manageCSS("buttons_semiround.css");		break;
		case "cleaner":				manageCSS("cleaner.css");				break;
		case "closebut":			manageCSS("closebutton.css");			break;
		case "closebutbig":			manageCSS("closebutton2.css");			break;
		case "closebuthide":		manageCSS("closebuttonhide.css");		break;
		case "closebut_alw":		manageCSS("closebutton_always.css");	break;
		case "ddboldfont":			manageCSS("ddboldfont.css");			break;
		case "dddb":				manageCSS("dd_deep_black.css");			break;
		case "ddg":					manageCSS("dd_glass.css");				break;
		case "ddgb":				manageCSS("dd_glass_black.css");		break;
		case "favicon":				manageCSS("favicon.css");				break;
		case "favicon_hg":			manageCSS("favicon_hideglobe.css");		break;
		case "fixes":				manageCSS("fixes.css");					break;
		case "ff4deftbb":			manageCSS("ff4deftbb.css");				break;
		case "ff4deftbb2":			manageCSS("ff4deftbb2.css");			break;
		case "fullglassdd":			manageCSS("fullglassdd.css");			break;
		case "fullglassnopref":		manageCSS("fullglassnopref.css");		break;
		case "fullglasstoolt":		manageCSS("fullglass_tooltip.css");		break;
		case "haamtransp":			manageCSS("no_actblue_menu.css");		break;
		case "haampurple":			manageCSS("no_actblue_menu2.css");		break;
		case "haamblue":			manageCSS("no_actblue_menu3.css");		break;
		case "haamsemitransp":		manageCSS("no_actblue_menu4.css");		break;
		case "hideclose1":			manageCSS("hideclose1.css");			break;
		case "hideclose2":			manageCSS("hideclose2.css");			break;
		case "hidetabbarbg":		manageCSS("hidetabbarbg.css");			break;
		case "highbook":			manageCSS("high_bookbar.css");			break;
		case "hightabs":			manageCSS("hightabs.css");				break;
		case "icorot":				manageCSS("iconrot.css");				break;
		case "icorot2":				manageCSS("iconrot2.css");				break;
		case "lightxptb":			manageCSS("light_tb_gray_xp.css");		break;
		case "lowtabs":				manageCSS("lowtabs.css");				break;
		case "nbtaba":				manageCSS("nbtaba.css");				break;
		case "nbtabh":				manageCSS("nbtabh.css");				break;
		case "noactblueb":			manageCSS("no_actblue_blue.css");		break;
		case "noactblueblack":		manageCSS("no_actblue_black.css");		break;
		case "noactblueg":			manageCSS("no_actblue_gray.css");		break;
		case "bfdm1":				manageCSS("bfdm1.css");					break;
		case "menuspace":			manageCSS("menu_space.css");			break;
		case "noiatabs1":			manageCSS("noiatabs.css");				break;
		case "noiatabs2":			manageCSS("noiatabs2.css");				break;
		case "noiatabs3":			manageCSS("noiatabs3.css");				break;
		case "noiatabs4":			manageCSS("noiatabs4.css");				break;
		case "noiatabs5":			manageCSS("noiatabs5.css");				break;
		case "roundtab":			manageCSS("round-tab.css");				break;
		case "roundttab":			manageCSS("roundtabstop.css");			break;
		case "roxp":				manageCSS("rounded_menu.css");			break;
		case "scrollbars1":			manageCSS("scrollbars1.css");			break;
		case "scrollbars2":			manageCSS("scrollbars2.css");			break;
		case "smallfw":				manageCSS("smallforward.css");			break;
		case "smallfw2":			manageCSS("smallforward2.css");			break;
		case "smallfw3":			manageCSS("smallforward3.css");			break;
		case "smalltbb":			manageCSS("smaller_tb_buttons.css");	break;
		case "act1":				manageCSS("tabblinkact.css");			break;
		case "act2":				manageCSS("tabblinkact2.css");			break;
		case "act3":				manageCSS("tabblinkact3.css");			break;
		case "persona":				manageCSS("skin_persona.css");			break;
		case "tabclose":			manageCSS("tabclose.css");				break;
		case "tabprog1":			manageCSS("tabprog.css");				break;
		case "tabprog2":			manageCSS("tabprog2.css");				break;
		case "tabprog3":			manageCSS("tabprog3.css");				break;
		case "tabtextmargin":		manageCSS("tabtext_margins.css");		break;
		case "tbnocheckbg":			manageCSS("tbnocheckbg.css");			break;
		case "tbbgh":				manageCSS("tbbgh.css");					break;
		case "tbbgh2":				manageCSS("tbbgh2.css");				break;
		case "tbbgray":				manageCSS("tbbgray.css");				break;
		case "tooltip1":			manageCSS("tooltip1.css");				break;
		case "urlbarbf":			manageCSS("urlbarbf.css");				break;
		case "wincon1":				manageCSS("wincon1.css");				break;
		case "wincon2":				manageCSS("wincon2.css");				break;
	}
},

// *********************************************************************************************************************
// **** Get options from prefs for options dialog
// *********************************************************************************************************************
setDialogElements: function() {

	this.hideShowSkinSettings();
	
	var current_tab = this.prefs.getCharPref("ntabs");
	
	if(this.prefs.getCharPref("skin")=="skin_ff4def" || current_tab=="noiatabs1" || current_tab=="noiatabs2" || current_tab=="noiatabs3" || current_tab=="noiatabs4" || current_tab=="noiatabs5"){
		document.getElementById("rounded_tab1").disabled=true;
		document.getElementById("rounded_tab2").disabled=true;
	} else {
		document.getElementById("rounded_tab1").disabled=false;
		document.getElementById("rounded_tab2").disabled=false;	
	}
	
	// hide settings that are unsupported by MacOSX
	if (navigator.appVersion.indexOf("Mac")!=-1) {

		document.getElementById('skinop_DropDGray').disabled = true;
		document.getElementById('skinop_DropDBlack').disabled = true;
		document.getElementById('skinop_DropDdarkBlack').disabled = true;
		document.getElementById('tc_applicationbutton').disabled = true;
		document.getElementById('Appbut_nt').disabled = true;
		document.getElementById('Appbut').disabled = true;
		document.getElementById('Appbutdm').disabled = true;
		document.getElementById('AltmbCheckbox').disabled = true;
		document.getElementById('TitlebarosdCheckbox').disabled = true;
		document.getElementById('Wincon1Checkbox').disabled = true;
		document.getElementById('Wincon2Checkbox').disabled = true;
		document.getElementById('Ff4deftbbCheckbox').disabled = true;
		document.getElementById('Ff4deftbb2Checkbox').disabled = true;
		
		document.getElementById("StatuslineMac").value = this.stringBundle.GetStringFromName("status.msg.macosx");
	} else{
		document.getElementById("StatuslineMac").style.visibility='collapse';
	}

	// ******** Tab fonts - set Colorpicker colors
	document.getElementById("Tabfontcolor").color=this.prefs.getCharPref("tabfontcolor");
	document.getElementById("Tabactfontcolor").color=this.prefs.getCharPref("tabactfontcolor");
	document.getElementById("Toolbarfontcolor").color=this.prefs.getCharPref("toolbarfontcolor");
	document.getElementById("Statusbarfontcolor").color=this.prefs.getCharPref("statusbarfontcolor");
	document.getElementById("Dropdownmenufontcolor").color=this.prefs.getCharPref("dropdownmenufontcolor");
	
	document.getElementById("Tabfontshadow").color=this.prefs.getCharPref("tabfontshadow");
	document.getElementById("Tabactfontshadow").color=this.prefs.getCharPref("tabactfontshadow");
	document.getElementById("Toolbarfontshadow").color=this.prefs.getCharPref("toolbarfontshadow");
	document.getElementById("Statusbarfontshadow").color=this.prefs.getCharPref("statusbarfontshadow");
	document.getElementById("Dropdownmenufontshadow").color=this.prefs.getCharPref("dropdownmenufontshadow");
	
	document.getElementById("Tabbgcolor").color=this.prefs.getCharPref("tabbgcolor");
	document.getElementById("Tabbgopacity").value=this.prefs.getCharPref("tabbgcoloropacity");
	
	document.getElementById("Tabhovbgcolor").color=this.prefs.getCharPref("tabhovbgcolor");
	document.getElementById("Tabhovbgopacity").value=this.prefs.getCharPref("tabhovbgcoloropacity");
	
	document.getElementById("Tabselbgcolor").color=this.prefs.getCharPref("tabselbgcolor");
	document.getElementById("Tabselbgopacity").value=this.prefs.getCharPref("tabselbgcoloropacity");

	document.getElementById("Tabpbgcolor").color=this.prefs.getCharPref("tabpbgcolor");
	document.getElementById("Tabpbgopacity").value=this.prefs.getCharPref("tabpbgcoloropacity");
	
	document.getElementById("Tabphovbgcolor").color=this.prefs.getCharPref("tabphovbgcolor");
	document.getElementById("Tabphovbgopacity").value=this.prefs.getCharPref("tabphovbgcoloropacity");
	
	document.getElementById("Tabpselbgcolor").color=this.prefs.getCharPref("tabpselbgcolor");
	document.getElementById("Tabpselbgopacity").value=this.prefs.getCharPref("tabpselbgcoloropacity");
	
	document.getElementById("Tabnbgcolor").color=this.prefs.getCharPref("tabnbgcolor");
	document.getElementById("Tabnbgopacity").value=this.prefs.getCharPref("tabnbgcoloropacity");
	
	document.getElementById("Tabnhovbgcolor").color=this.prefs.getCharPref("tabnhovbgcolor");
	document.getElementById("Tabnhovbgopacity").value=this.prefs.getCharPref("tabnhovbgcoloropacity");

},

// *********************************************************************************************************************
// **** Reset all tweaks with one button click
// *********************************************************************************************************************
tweaksOff: function(){
	this.unsetPref_And_CSS_Bool("titlebarosd");
	this.unsetPref_And_CSS_Bool("altmb");
	this.prefChangeString("alttabthrobber","alttabthr0");
	this.unsetPref_And_CSS_Bool("appbut");
	this.unsetPref_And_CSS_Bool("appbut_nt");
	this.prefChangeString("appbutton","appbutnoia");
	this.unsetPref_And_CSS_Bool("appbutdm");
	this.unsetPref_And_CSS_Bool("bfdm1");
	this.unsetPref_And_CSS_Bool("bfdm2");
	this.unsetPref_And_CSS_Bool("bmfolder");
	this.unsetPref_And_CSS_Bool("butdark");
	this.unsetPref_And_CSS_Bool("butglass");
	this.unsetPref_And_CSS_Bool("butsemiround");
	this.unsetPref_And_CSS_Bool("cleaner");
	this.unsetPref_And_CSS_Bool("closebut");
	this.unsetPref_And_CSS_Bool("closebutbig");
	this.unsetPref_And_CSS_Bool("closebuthide");
	this.unsetPref_And_CSS_Bool("closebut_alw");
	this.unsetPref_And_CSS_Bool("ddboldfont");
	this.unsetPref_And_CSS_Bool("dddb");
	this.unsetPref_And_CSS_Bool("ddg");
	this.unsetPref_And_CSS_Bool("ddgb");
	this.unsetPref_And_CSS_Bool("ff4deftbb");
	this.unsetPref_And_CSS_Bool("ff4deftbb2");
	this.unsetPref_And_CSS_Bool("hideclose1");
	this.unsetPref_And_CSS_Bool("hideclose2");
	this.unsetPref_And_CSS_Bool("hidetabbarbg");
	this.unsetPref_And_CSS_Bool("highbook");
	this.unsetPref_And_CSS_Bool("hightabs");
	this.unsetPref_And_CSS_Bool("icorot");
	this.unsetPref_And_CSS_Bool("icorot2");
	this.unsetPref_And_CSS_Bool("lowtabs");
	this.unsetPref_And_CSS_Bool("menuspace");
	this.unsetPref_And_CSS_Bool("nbtaba");
	this.unsetPref_And_CSS_Bool("nbtabh");
	this.unsetPref_And_CSS_Bool("noactblueb");
	this.unsetPref_And_CSS_Bool("noactblueblack");
	this.unsetPref_And_CSS_Bool("noactblueg");
	this.prefChangeString("hovandactmenu","haamdef");
	this.prefChangeString("ntabs","tabs_gray_m");
	this.unsetPref_And_CSS_Bool("roundtab");
	this.unsetPref_And_CSS_Bool("roundttab");
	this.unsetPref_And_CSS_Bool("roxp");
	this.unsetPref_And_CSS_Bool("smallfw");
	this.unsetPref_And_CSS_Bool("smallfw2");
	this.unsetPref_And_CSS_Bool("smallfw3");
	this.unsetPref_And_CSS_Bool("smalltbb");
	this.prefChangeString("tabactblink","act0");
	this.unsetPref_And_CSS_Bool("tabclose");
	this.prefChangeString("tabprogress","tabprog0");
	this.unsetPref_And_CSS_Bool("tabtextmargin");
	this.unsetPref_And_CSS_Bool("tooltip1");
	this.unsetPref_And_CSS_Bool("tbbgh");
	this.unsetPref_And_CSS_Bool("tbbgh2");
	this.unsetPref_And_CSS_Bool("tbbgray");
	this.unsetPref_And_CSS_Bool("tbnocheckbg");
	this.unsetPref_And_CSS_Bool("urlbarbf");
	this.unsetPref_And_CSS_Bool("wincon1");
	this.unsetPref_And_CSS_Bool("wincon2");
	
	if(this.prefs.getBoolPref("owntabs")==true){
		this.prefChangeBool(false, 'owntabs');
	}
	
	this.setDialogElements();
},


hideShowSkinSettings: function() {
	// only show options for a specific skin
	document.getElementById("skinop_roundtab").style.visibility='visible';
	document.getElementById("skinop_HideTabbarBg").style.visibility='visible';
	document.getElementById("skinop_NoLinesOnToolbars").style.visibility='visible';
	document.getElementById("skinop_DropDGray").style.visibility='collapse';
	document.getElementById("skinop_DropDBlack").style.visibility='collapse';
	document.getElementById("skinop_DropDdarkBlack").style.visibility='collapse';
	document.getElementById("skinop_DropDGlass").style.visibility='collapse';
	document.getElementById("skinop_NoGlassPref").style.visibility='collapse';
	document.getElementById("skinop_Fullglasstooltip").style.visibility='collapse';

	switch (this.prefs.getCharPref("skin")) {
		case "skin_gray":
			document.getElementById("skinop_DropDGray").style.visibility='visible';
		break;
		case "skin_graylight":
			document.getElementById("skinop_DropDGray").style.visibility='visible';
		break;
		case "skin_graydark":
			document.getElementById("skinop_DropDGray").style.visibility='visible';
		break;
		case "skin_gray_f3":
			document.getElementById("skinop_DropDGray").style.visibility='visible';
		break;
		case "skin_black":
			document.getElementById("skinop_NoLinesOnToolbars").style.visibility='collapse';
			document.getElementById("skinop_DropDBlack").style.visibility='visible';
			document.getElementById("skinop_DropDdarkBlack").style.visibility='visible';
		break;
		case "skin_black_f3":
			document.getElementById("skinop_NoLinesOnToolbars").style.visibility='collapse';
			document.getElementById("skinop_DropDBlack").style.visibility='visible';
			document.getElementById("skinop_DropDdarkBlack").style.visibility='visible';
		break;
		case "skin_ff4def":
			document.getElementById("skinop_NoLinesOnToolbars").style.visibility='collapse';
			document.getElementById("skinop_HideTabbarBg").style.visibility='collapse';
		break;
		case "skin_glass1":
			document.getElementById("skinop_NoLinesOnToolbars").style.visibility='collapse';
			document.getElementById("skinop_DropDGray").style.visibility='visible';
			document.getElementById("skinop_HideTabbarBg").style.visibility='collapse';
		break;
		case "skin_glass2":
			document.getElementById("skinop_NoLinesOnToolbars").style.visibility='collapse';
			document.getElementById("skinop_roundtab").style.visibility='collapse';
			document.getElementById("skinop_DropDGlass").style.visibility='visible';
			document.getElementById("skinop_NoGlassPref").style.visibility='visible';
			document.getElementById("skinop_Fullglasstooltip").style.visibility='visible';
			document.getElementById("skinop_HideTabbarBg").style.visibility='collapse';
		break;
		case "skin_persona":
			document.getElementById("skinop_NoLinesOnToolbars").style.visibility='collapse';
			document.getElementById("skinop_DropDGray").style.visibility='visible';
			document.getElementById("skinop_HideTabbarBg").style.visibility='collapse';
		break;
	}

	// only show 'actblue' option for specific tab
	document.getElementById("skinop_NoActBlueGrayTab").style.visibility='collapse';
	document.getElementById("skinop_NoActBlueBlackTab").style.visibility='collapse';
	document.getElementById("skinop_NoActBlueBlueTab").style.visibility='collapse';
	
	if(this.prefs.getCharPref("skin")!="skin_persona"){
		switch (this.prefs.getCharPref("ntabs")) {
			case "tabs_gray":
				document.getElementById("skinop_NoActBlueGrayTab").style.visibility='visible';
			break;
			case "tabs_black":
				document.getElementById("skinop_NoActBlueBlackTab").style.visibility='visible';
			break;
			case "tabs_blue":
				document.getElementById("skinop_NoActBlueBlueTab").style.visibility='visible';
			break;
		}
	}
},

// *********************************************************************************************************************
themeChangePersona: function(value,which) {

		if (this.personaSkinEnabled()) {
			// First call standard theme handler function
			this.prefChangeString('skin','skin_persona');
			this.prefChangeString('ntabs','tabs_custom');
		}
		else {
			// If Persona support is disabled, do nothing,
			// only refresh UI
			this.setDialogElements();
		}

		document.getElementById("Statusline1").value = this.stringBundle.GetStringFromName("status.msg.restart");
		document.getElementById("Statusline2").value = "";
		
		this.changePref_And_CSS_Bool(which,value);
		this.needsRestart = true;
},

//***********************************************************************************************************************

// *********************************************************************************************************************
// **** Functions for Fonts
// *********************************************************************************************************************

tabbgChange:function(value){

	this.setFontWindowValues();
	this.manageTabSheet(value);

},

setFontWindowValues: function(){

	// Tab settings
	var vTabbgopacity = document.getElementById("Tabbgopacity").value;
	var vTabhovbgopacity = document.getElementById("Tabhovbgopacity").value;
	var vTabselbgopacity = document.getElementById("Tabselbgopacity").value;
	
	if(vTabbgopacity>-1&&vTabbgopacity<100&&vTabbgopacity.length!=0){}
	else vTabbgopacity=55;
	
	if(vTabhovbgopacity>-1&&vTabhovbgopacity<100&&vTabhovbgopacity.length!=0){}
	else vTabhovbgopacity=20;
	
	if(vTabselbgopacity>-1&&vTabselbgopacity<100&&vTabselbgopacity.length!=0){}
	else vTabselbgopacity=40;
	
	this.prefs.setCharPref("tabbgcolor",document.getElementById("Tabbgcolor").color);
	this.prefs.setCharPref("tabbgcoloropacity",vTabbgopacity);

	this.prefs.setCharPref("tabhovbgcolor",document.getElementById("Tabhovbgcolor").color);
	this.prefs.setCharPref("tabhovbgcoloropacity",vTabhovbgopacity);

	this.prefs.setCharPref("tabselbgcolor",document.getElementById("Tabselbgcolor").color);
	this.prefs.setCharPref("tabselbgcoloropacity",vTabselbgopacity);


	var hexcolor=document.getElementById("Tabbgcolor").color;
	var rgba = 'rgba('+parseInt(hexcolor.substring(1,3),16)+','+parseInt(hexcolor.substring(3,5),16)+','+parseInt(hexcolor.substring(5,7),16)+',0.'+vTabbgopacity+')';

	var hexcolorhov=document.getElementById("Tabhovbgcolor").color;
	var rgbahov = 'rgba('+parseInt(hexcolorhov.substring(1,3),16)+','+parseInt(hexcolorhov.substring(3,5),16)+','+parseInt(hexcolorhov.substring(5,7),16)+',0.'+vTabhovbgopacity+')';

	var hexcolorsel=document.getElementById("Tabselbgcolor").color;
	var rgbasel = 'rgba('+parseInt(hexcolorsel.substring(1,3),16)+','+parseInt(hexcolorsel.substring(3,5),16)+','+parseInt(hexcolorsel.substring(5,7),16)+',0.'+vTabselbgopacity+')';

	
	this.prefs.setCharPref('tabbgcolorrgb',rgba);
	this.prefs.setCharPref('tabhovbgcolorrgb',rgbahov);
	this.prefs.setCharPref('tabselbgcolorrgb',rgbasel);
	
	//Tab [pinned] settings
	var vTabpbgopacity = document.getElementById("Tabpbgopacity").value;
	var vTabphovbgopacity = document.getElementById("Tabphovbgopacity").value;
	var vTabpselbgopacity = document.getElementById("Tabpselbgopacity").value;	
	
	if(vTabpbgopacity>-1&&vTabpbgopacity<100&&vTabpbgopacity.length!=0){}
	else vTabpbgopacity=55;
	
	if(vTabphovbgopacity>-1&&vTabphovbgopacity<100&&vTabphovbgopacity.length!=0){}
	else vTabphovbgopacity=20;
	
	if(vTabpselbgopacity>-1&&vTabpselbgopacity<100&&vTabpselbgopacity.length!=0){}
	else vTabpselbgopacity=40;
	
	this.prefs.setCharPref("tabpbgcolor",document.getElementById("Tabpbgcolor").color);
	this.prefs.setCharPref("tabpbgcoloropacity",vTabpbgopacity);

	this.prefs.setCharPref("tabphovbgcolor",document.getElementById("Tabphovbgcolor").color);
	this.prefs.setCharPref("tabphovbgcoloropacity",vTabphovbgopacity);

	this.prefs.setCharPref("tabpselbgcolor",document.getElementById("Tabpselbgcolor").color);
	this.prefs.setCharPref("tabpselbgcoloropacity",vTabpselbgopacity);
	
	
	var phexcolor=document.getElementById("Tabpbgcolor").color;
	var prgba = 'rgba('+parseInt(phexcolor.substring(1,3),16)+','+parseInt(phexcolor.substring(3,5),16)+','+parseInt(phexcolor.substring(5,7),16)+',0.'+vTabpbgopacity+')';

	var phexcolorhov=document.getElementById("Tabphovbgcolor").color;
	var prgbahov = 'rgba('+parseInt(phexcolorhov.substring(1,3),16)+','+parseInt(phexcolorhov.substring(3,5),16)+','+parseInt(phexcolorhov.substring(5,7),16)+',0.'+vTabphovbgopacity+')';

	var phexcolorsel=document.getElementById("Tabpselbgcolor").color;
	var prgbasel = 'rgba('+parseInt(phexcolorsel.substring(1,3),16)+','+parseInt(phexcolorsel.substring(3,5),16)+','+parseInt(phexcolorsel.substring(5,7),16)+',0.'+vTabpselbgopacity+')';

	
	this.prefs.setCharPref('tabpbgcolorrgb',prgba);
	this.prefs.setCharPref('tabphovbgcolorrgb',prgbahov);
	this.prefs.setCharPref('tabpselbgcolorrgb',prgbasel);

	//NewTab Settings
	var vTabnbgopacity = document.getElementById("Tabnbgopacity").value;
	var vTabnhovbgopacity = document.getElementById("Tabnhovbgopacity").value;	

	if(vTabnbgopacity>-1&&vTabnbgopacity<100&&vTabnbgopacity.length!=0){}
	else vTabnbgopacity=55;
	
	if(vTabnhovbgopacity>-1&&vTabnhovbgopacity<100&&vTabnhovbgopacity.length!=0){}
	else vTabnhovbgopacity=20;
	
	this.prefs.setCharPref("tabnbgcolor",document.getElementById("Tabnbgcolor").color);
	this.prefs.setCharPref("tabnbgcoloropacity",vTabnbgopacity);

	this.prefs.setCharPref("tabnhovbgcolor",document.getElementById("Tabnhovbgcolor").color);
	this.prefs.setCharPref("tabnhovbgcoloropacity",vTabnhovbgopacity);		
	
	
	var nhexcolor=document.getElementById("Tabnbgcolor").color;
	var nrgba = 'rgba('+parseInt(nhexcolor.substring(1,3),16)+','+parseInt(nhexcolor.substring(3,5),16)+','+parseInt(nhexcolor.substring(5,7),16)+',0.'+vTabnbgopacity+')';

	var nhexcolorhov=document.getElementById("Tabnhovbgcolor").color;
	var nrgbahov = 'rgba('+parseInt(nhexcolorhov.substring(1,3),16)+','+parseInt(nhexcolorhov.substring(3,5),16)+','+parseInt(nhexcolorhov.substring(5,7),16)+',0.'+vTabnhovbgopacity+')';

	this.prefs.setCharPref('tabnbgcolorrgb',nrgba);
	this.prefs.setCharPref('tabnhovbgcolorrgb',nrgbahov);
	
	if(this.prefs.getBoolPref('owntabs')) this.manageTabSheet(true);

},

manageTabSheet: function(value){

	removeOldSheet(this.tabbgcolorsheet);
	
	this.tabbgcolorsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
		.tabbrowser-tab:not(:hover):not([selected]):not([pinned]){\
			background:'+this.prefs.getCharPref('tabbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabbrowser-tab:hover:not([selected]):not([pinned]){\
			background:'+this.prefs.getCharPref('tabhovbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabbrowser-tab[selected]:not([pinned]){\
			background:'+this.prefs.getCharPref('tabselbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabbrowser-tab:not(:hover):not([selected])[pinned]{\
			background:'+this.prefs.getCharPref('tabpbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabbrowser-tab:hover:not([selected])[pinned]{\
			background:'+this.prefs.getCharPref('tabphovbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabbrowser-tab[selected][pinned]{\
			background:'+this.prefs.getCharPref('tabpselbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabs-newtab-button{\
			background:'+this.prefs.getCharPref('tabnbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
		.tabs-newtab-button:hover{\
			background:'+this.prefs.getCharPref('tabnhovbgcolorrgb')+' linear-gradient(rgba(251,252,253,.65), rgba(246,247,248,.17) 39%, rgba(231,232,233,.35) 61%, rgba(225,226,229,.25)) !important;}\
	'), null, null);

	
	if (value==true) applyNewSheet(this.tabbgcolorsheet);
	  else removeOldSheet(this.tabbgcolorsheet);

	function removeOldSheet(oldsheet){

	  const sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

		if (sss.sheetRegistered(oldsheet,sss.AGENT_SHEET)) sss.unregisterSheet(oldsheet,sss.AGENT_SHEET);
	}

	function applyNewSheet(newsheet){

	  const sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

		if (!sss.sheetRegistered(newsheet,sss.AGENT_SHEET)) sss.loadAndRegisterSheet(newsheet,sss.AGENT_SHEET);
	}

},

fontappearanceChange:function(value,which,enable){

	if(enable==true) this.prefs.setCharPref(which,value);
	
	//Colors
	switch (which) {
		case "tabfontcolor": 
						
			if (enable==true && this.prefs.getBoolPref("tabfontcustom") == true){
				removeOldSheet(this.tabfontcolorsheet);
				this.tabfontcolorsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					.tabbrowser-tab:not(:hover):not([selected]){\
						 color:'+value+' !important;}\
				'), null, null);
				applyNewSheet(this.tabfontcolorsheet);
				}
			else if(enable==false){
				removeOldSheet(this.tabfontcolorsheet);
			}
		break;
		
		case "tabactfontcolor":
			
			if (enable==true && this.prefs.getBoolPref("tabhfontcustom") == true){
				removeOldSheet(this.tabactfontcolorsheet);
				this.tabactfontcolorsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					.tabbrowser-tab:hover,\
					.tabbrowser-tab[selected]{\
						 color:'+value+' !important;}\
				'), null, null);
				applyNewSheet(this.tabactfontcolorsheet);
			}
			else if(enable==false){
				removeOldSheet(this.tabactfontcolorsheet);
			}
		break;
		
		case "toolbarfontcolor":
			
			if (enable==true && this.prefs.getBoolPref("tbfontcustom") == true){
				removeOldSheet(this.toolbarfontcolorsheet);
				this.toolbarfontcolorsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					menubar > menu,\
					toolbar:not(#addon-bar):not(#status-bar):not(#TabsToolbar):not(#developer-toolbar):not(#inspector-toolbar):not(.devtools-toolbar),\
					toolbar:not(#inspector-toolbar):not(.devtools-toolbar) toolbarbutton:not(.devtools-toolbarbutton):not(.developer-toolbar-button):not(#appmenu-toolbar-button) {\
					  color: '+value+' !important;}\
				'), null, null);
				applyNewSheet(this.toolbarfontcolorsheet);
			}
			else if(enable==false){
				removeOldSheet(this.toolbarfontcolorsheet);
			}
		break;
		
		case "statusbarfontcolor":
			
			if (enable==true && this.prefs.getBoolPref("sbfontcustom") == true){
				removeOldSheet(this.statusbarfontcolorsheet);
				this.statusbarfontcolorsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					#status4evar-status-text,findbar description,findbar label,findbar label[anonid="find-label"],#browser-bottombox,\
					#browser-bottombox toolbarbutton:not(.devtools-toolbarbutton):not(.developer-toolbar-button),\
					#browser-bottombox description,#status-bar{\
					  color: '+value+' !important;}\
				'), null, null);
				applyNewSheet(this.statusbarfontcolorsheet);
			}
			else if(enable==false){
				removeOldSheet(this.statusbarfontcolorsheet);
			}
		break;
		
		case "dropdownmenufontcolor":
			
			if (enable==true && this.prefs.getBoolPref("ddfontcustom") == true){
				removeOldSheet(this.dropdownmenufontcolorsheet);
				this.dropdownmenufontcolorsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					menuitem:not(:hover):not([_moz-menuactive]),\
					menupopup > menu:not(:hover):not([_moz-menuactive]):not(.blocked-bug),\
					menupopup:not(:hover):not([_moz-menuactive]),\
					#appmenu_webDeveloper:not(:hover):not([_moz-menuactive]),\
					.splitmenu-menuitem:not(:hover):not([_moz-menuactive]),\
					\
					menuitem[_moz-menuactive],\
					menupopup > menu[_moz-menuactive]:not(.blocked-bug),\
					menupopup[_moz-menuactive],\
					#appmenu_webDeveloper[_moz-menuactive],\
					.splitmenu-menuitem[_moz-menuactive]{\
						color: '+value+' !important;}\
				'), null, null);
				applyNewSheet(this.dropdownmenufontcolorsheet);
			}
			else if(enable==false){
				removeOldSheet(this.dropdownmenufontcolorsheet);
			}
		break;
		
		//Shadows
		case "tabfontshadow":

			if (enable==true && this.prefs.getBoolPref("tabtscustom") == true){
				removeOldSheet(this.tabfontshadowsheet);
				this.tabfontshadowsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					.tabbrowser-tab:not(:hover):not([selected]){\
						 text-shadow: '+value+' 1px 1px 1.5px !important;}\
				'), null, null);
				applyNewSheet(this.tabfontshadowsheet);
				}
			else if(enable==false){
				removeOldSheet(this.tabfontshadowsheet);
			}
		break;
		
		case "tabactfontshadow":
			
			if (enable==true && this.prefs.getBoolPref("tabhtscustom") == true){
				removeOldSheet(this.tabactfontshadowsheet);
				this.tabactfontshadowsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					.tabbrowser-tab:hover,\
					.tabbrowser-tab[selected]{\
						 text-shadow: '+value+' 1px 1px 1.5px !important;}\
				'), null, null);
				applyNewSheet(this.tabactfontshadowsheet);
			}
			else if(enable==false){
				removeOldSheet(this.tabactfontshadowsheet);
			}
		break;
		
		case "toolbarfontshadow":
			
			if (enable==true && this.prefs.getBoolPref("tbtscustom") == true){
				removeOldSheet(this.toolbarfontshadowsheet);
				this.toolbarfontshadowsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					menubar > menu,\
					toolbar:not(#addon-bar):not(#status-bar):not(#TabsToolbar):not(#developer-toolbar):not(#inspector-toolbar):not(.devtools-toolbar),\
					toolbar:not(#inspector-toolbar):not(.devtools-toolbar) toolbarbutton:not(.devtools-toolbarbutton):not(.developer-toolbar-button):not(#appmenu-toolbar-button){\
					  text-shadow: '+value+' 1px 1px 1.5px !important;}\
				'), null, null);
				applyNewSheet(this.toolbarfontshadowsheet);
			}
			else if(enable==false){
				removeOldSheet(this.toolbarfontshadowsheet);
			}
		break;
		
		case "statusbarfontshadow":
			
			if (enable==true && this.prefs.getBoolPref("sbtscustom") == true){
				removeOldSheet(this.statusbarfontshadowsheet);
				this.statusbarfontshadowsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					#status4evar-status-text,findbar description,findbar label,findbar label[anonid="find-label"],#browser-bottombox,\
					#browser-bottombox toolbarbutton:not(.devtools-toolbarbutton):not(.developer-toolbar-button),\
					#browser-bottombox description,#status-bar{\
					  text-shadow: '+value+' 1px 1px 1.5px !important;}\
				'), null, null);
				applyNewSheet(this.statusbarfontshadowsheet);
			}
			else if(enable==false){
				removeOldSheet(this.statusbarfontshadowsheet);
			}
		break;
		
		case "dropdownmenufontshadow":
			
			if (enable==true && this.prefs.getBoolPref("ddtscustom") == true){
				removeOldSheet(this.dropdownmenufontshadowsheet);
				this.dropdownmenufontshadowsheet=this.ios.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
					menuitem:not(:hover):not([_moz-menuactive]),\
					menupopup > menu:not(:hover):not([_moz-menuactive]):not(.blocked-bug),\
					menupopup:not(:hover):not([_moz-menuactive]),\
					#appmenu_webDeveloper:not(:hover):not([_moz-menuactive]),\
					.splitmenu-menuitem:not(:hover):not([_moz-menuactive]),\
					\
					menuitem[_moz-menuactive],\
					menupopup > menu[_moz-menuactive]:not(.blocked-bug),\
					menupopup[_moz-menuactive],\
					#appmenu_webDeveloper[_moz-menuactive],\
					.splitmenu-menuitem[_moz-menuactive]{\
						text-shadow: '+value+' 1px 1px 1.5px !important;}\
				'), null, null);
				applyNewSheet(this.dropdownmenufontshadowsheet);
			}
			else if(enable==false){
				removeOldSheet(this.dropdownmenufontshadowsheet);
			}
		break;
	}

	
	function removeOldSheet(oldsheet){

	  const sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
	
		if (sss.sheetRegistered(oldsheet,sss.AGENT_SHEET)) sss.unregisterSheet(oldsheet,sss.AGENT_SHEET);
	}

	function applyNewSheet(newsheet){

	  const sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
	
		if (!sss.sheetRegistered(newsheet,sss.AGENT_SHEET)) sss.loadAndRegisterSheet(newsheet,sss.AGENT_SHEET);
	}
},

// *********************************************************************************************************************
// **** Functions for the miscellaneous Noia options
// *********************************************************************************************************************
prefChangeBool: function(value,which) {

	switch (which) {

		case "owntabs":

			this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
			this.changePref_And_CSS_String("ntabs","tabs_custom");
		
			this.tabbgChange(value);
		
		break;
		
		case "appbut":
			this.unsetPref_And_CSS_Bool("appbut_nt");
		break;

		case "appbut_nt":
			this.unsetPref_And_CSS_Bool("appbut");
		break;
		
		case "bfdm1":
			this.unsetPref_And_CSS_Bool("bfdm2");
		break;
			
		case "bfdm2":
			this.unsetPref_And_CSS_Bool("bfdm1");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;

		case "butdark":
			this.unsetPref_And_CSS_Bool("butglass");
		break;

		case "butglass":
			this.unsetPref_And_CSS_Bool("butdark");
		break;
		
		case "closebut":
			this.unsetPref_And_CSS_Bool("closebutbig");
			break;

		case "closebutbig":
			this.unsetPref_And_CSS_Bool("closebut_alw");
			this.unsetPref_And_CSS_Bool("closebut");
		break;
			
		case "closebut_alw":
			this.unsetPref_And_CSS_Bool("tabclose");
			this.unsetPref_And_CSS_Bool("closebutbig");
			this.unsetPref_And_CSS_Bool("closebuthide");
		break;
		
		case "closebuthide":
			this.unsetPref_And_CSS_Bool("closebut_alw");
		break;
			
		case "ddg":
			this.unsetPref_And_CSS_Bool("ddgb");
			this.unsetPref_And_CSS_Bool("dddb");
		break;

		case "ddgb":
			this.unsetPref_And_CSS_Bool("ddg");
			this.unsetPref_And_CSS_Bool("dddb");
		break;

		case "dddb":
			this.unsetPref_And_CSS_Bool("ddg");
			this.unsetPref_And_CSS_Bool("ddgb");
		break;

		case "ff4deftbb":
			this.unsetPref_And_CSS_Bool("bfdm2");
			this.unsetPref_And_CSS_Bool("tbbgh");
			this.unsetPref_And_CSS_Bool("tbbgh2");
			this.unsetPref_And_CSS_Bool("smalltbb");
			this.unsetPref_And_CSS_Bool("smallfw");
			this.unsetPref_And_CSS_Bool("smallfw2");
			this.unsetPref_And_CSS_Bool("smallfw3");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;

		case "ff4deftbb2":
			this.unsetPref_And_CSS_Bool("bfdm2");
			this.unsetPref_And_CSS_Bool("tbbgh");
			this.unsetPref_And_CSS_Bool("tbbgh2");
			this.unsetPref_And_CSS_Bool("smalltbb");
			this.unsetPref_And_CSS_Bool("smallfw");
			this.unsetPref_And_CSS_Bool("smallfw2");
			this.unsetPref_And_CSS_Bool("smallfw3");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
		break;

		case "icorot":
			this.unsetPref_And_CSS_Bool("icorot2");
		break;

		case "icorot2":
			this.unsetPref_And_CSS_Bool("icorot");
		break;
		
		case "hightabs":
			this.unsetPref_And_CSS_Bool("lowtabs");
		break;

		case "lowtabs":
			this.unsetPref_And_CSS_Bool("hightabs");
		break;
		
		case "noactblueb":
			this.unsetPref_And_CSS_Bool("noactblueg");
			this.unsetPref_And_CSS_Bool("noactblueblack");
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_String("tabactblink",this.prefs.getCharPref("tabactblink"));
			this.changePref_And_CSS_String("tabactblink","act0");
		break;

		case "noactblueblack":
			this.unsetPref_And_CSS_Bool("noactblueb");
			this.unsetPref_And_CSS_Bool("noactblueg");
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_String("tabactblink",this.prefs.getCharPref("tabactblink"));
			this.changePref_And_CSS_String("tabactblink","act0");
		break;

		case "noactblueg":
			this.unsetPref_And_CSS_Bool("noactblueb");
			this.unsetPref_And_CSS_Bool("noactblueblack");
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_String("tabactblink",this.prefs.getCharPref("tabactblink"));
			this.changePref_And_CSS_String("tabactblink","act0");
		break;

		case "roundtab":
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_Bool("roundttab");
		break;

		case "roundttab":
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_Bool("roundtab");
		break;

		case "smallfw":
			this.unsetPref_And_CSS_Bool("smallfw2");
			this.unsetPref_And_CSS_Bool("smallfw3");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;

		case "smallfw2":
			this.unsetPref_And_CSS_Bool("smallfw");
			this.unsetPref_And_CSS_Bool("smallfw3");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;

		case "smallfw3":
			this.unsetPref_And_CSS_Bool("smallfw");
			this.unsetPref_And_CSS_Bool("smallfw2");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;
			
		case "smalltbb":
			this.unsetPref_And_CSS_Bool("tbbgh2");
			this.unsetPref_And_CSS_Bool("smallfw3");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;

		case "tabclose":
			this.unsetPref_And_CSS_Bool("closebut_alw");
		break;

		case "tbbgh":
			this.unsetPref_And_CSS_Bool("tbbgh2");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
		break;

		case "tbbgh2":
			this.unsetPref_And_CSS_Bool("tbbgh");
			this.unsetPref_And_CSS_Bool("smalltbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb");
			this.unsetPref_And_CSS_Bool("ff4deftbb2");
			this.unsetPref_And_CSS_Bool("smallfw3");
		break;
			
		case "wincon1":
			this.unsetPref_And_CSS_Bool("wincon2");
		break;
			
		case "wincon2":
			this.unsetPref_And_CSS_Bool("wincon1");
		break;
	}

	this.changePref_And_CSS_Bool(which,value);
	this.activateThemeNoia();
	
	// Has to be done for font settings after some settings are changed with 'this.changePref_And_CSS_Bool(which,value);'
	switch (which) {
		case "tabfontcustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("tabfontcolor"),'tabfontcolor',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("tabfontcolor"),'tabfontcolor',true);}
		break;
		case "tabhfontcustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("tabactfontcolor"),'tabactfontcolor',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("tabactfontcolor"),'tabactfontcolor',true);}
		break;
		case "tbfontcustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("toolbarfontcolor"),'toolbarfontcolor',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("toolbarfontcolor"),'toolbarfontcolor',true);}
		break;
		case "sbfontcustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("statusbarfontcolor"),'statusbarfontcolor',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("statusbarfontcolor"),'statusbarfontcolor',true);}
		break;
		case "ddfontcustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("dropdownmenufontcolor"),'dropdownmenufontcolor',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("dropdownmenufontcolor"),'dropdownmenufontcolor',true);}
		break;

		case "tabtscustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("tabfontshadow"),'tabfontshadow',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("tabfontshadow"),'tabfontshadow',true);}
		break;
		case "tabhtscustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("tabactfontshadow"),'tabactfontshadow',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("tabactfontshadow"),'tabactfontshadow',true);}
		break;
		case "tbtscustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("toolbarfontshadow"),'toolbarfontshadow',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("toolbarfontshadow"),'toolbarfontshadow',true);}
		break;
		case "sbtscustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("statusbarfontshadow"),'statusbarfontshadow',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("statusbarfontshadow"),'statusbarfontshadow',true);}
		break;
		case "ddtscustom":
			if (value==false) {this.fontappearanceChange(this.prefs.getCharPref("dropdownmenufontshadow"),'dropdownmenufontshadow',false);}
			else if (value==true) {this.fontappearanceChange(this.prefs.getCharPref("dropdownmenufontshadow"),'dropdownmenufontshadow',true);}
		break;
	}	
},

prefChangeString: function(which,value) {

	switch (which) {

		case "skin":
			this.unsetPref_And_CSS_String("skin",this.prefs.getCharPref("skin"));
			this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));

			this.unsetPref_And_CSS_Bool("cleaner");
			this.unsetPref_And_CSS_Bool("dddb");
			this.unsetPref_And_CSS_Bool("ddg");
			this.unsetPref_And_CSS_Bool("ddgb");
			this.unsetPref_And_CSS_Bool("fullglassdd"); // unset glass dd menu
			this.unsetPref_And_CSS_Bool("fullglassnopref");
			this.unsetPref_And_CSS_Bool("fullglasstoolt");
			this.unsetPref_And_CSS_Bool("hidetabbarbg");
			this.unsetPref_And_CSS_Bool("noactblueb");
			this.unsetPref_And_CSS_Bool("noactblueblack");
			this.unsetPref_And_CSS_Bool("noactblueg");
			this.unsetPref_And_CSS_Bool("roxp");
			this.unsetPref_And_CSS_Bool("tooltip1");

			
			this.prefChangeBool(false,'tabtscustom'); // shadows off
			this.prefChangeBool(false,'tabhtscustom');
			this.prefChangeBool(false,'tbtscustom');
			this.prefChangeBool(false,'sbtscustom');
			this.prefChangeBool(false,'ddtscustom');

			this.prefChangeBool(false,'tabfontcustom'); // set font colors to default on theme change
			this.prefChangeBool(false,'tabhfontcustom');
			this.prefChangeBool(false,'tbfontcustom');
			this.prefChangeBool(false,'sbfontcustom');
			this.prefChangeBool(false,'ddfontcustom');
			
			this.prefChangeString('scrollbars',"scrollbars1"); // set default gray scrollbars

			if(value=="skin_ff4def"){
				document.getElementById("rounded_tab1").disabled=true;
				document.getElementById("rounded_tab2").disabled=true;
			} else {
				document.getElementById("rounded_tab1").disabled=false;
				document.getElementById("rounded_tab2").disabled=false;	
			}
			
			if(this.prefs.getBoolPref("persona") == true){
				this.unsetPref_And_CSS_Bool("persona");
				this.needsRestart = true;
				document.getElementById("Statusline1").value = this.stringBundle.GetStringFromName("status.msg.restart");
			}
			
			if(this.prefs.getBoolPref("owntabs")==true){
				this.prefChangeBool(false, 'owntabs');
			}

			switch (value) {
				case "skin_gray":
					this.prefChangeString("ntabs","tabs_gray_m");
				break;
				case "skin_graylight":
					this.prefChangeString("ntabs","tabs_gray_m");
				break;
				case "skin_graydark":
					this.prefChangeString("ntabs","tabs_gray_m");
				break;
				case "skin_gray_f3":
					this.prefChangeString("ntabs","tabs_gray_m");
				break;
				case "skin_black":
					this.prefChangeString("ntabs","tabs_black");
					
					this.prefs.setCharPref("toolbarfontcolor","#FFFFFF");
					this.prefs.setCharPref("statusbarfontcolor","#FFFFFF");
					this.prefs.setCharPref("dropdownmenufontcolor","#FFFFFF");
					this.prefChangeBool(true,'tbfontcustom');		// set toolbar font to white on theme change to black
					this.prefChangeBool(true,'sbfontcustom');		// set statusbar font to white on theme change to black
					this.prefChangeBool(true,'ddfontcustom');		// set dd-menus font to white on theme change to black
		
					this.prefChangeString('scrollbars',"scrollbars2");

					this.unsetPref_And_CSS_Bool("tbnocheckbg");
				break;
				case "skin_black_f3":
					this.prefChangeString("ntabs","tabs_black");
					
					this.prefs.setCharPref("toolbarfontcolor","#FFFFFF");
					this.prefs.setCharPref("statusbarfontcolor","#FFFFFF");
					this.prefs.setCharPref("dropdownmenufontcolor","#FFFFFF");
					this.prefChangeBool(true,'tbfontcustom');		// set toolbar font to white on theme change to black
					this.prefChangeBool(true,'sbfontcustom');		// set statusbar font to white on theme change to black
					this.prefChangeBool(true,'ddfontcustom');		// set dd-menus font to white on theme change to black
					
					this.prefChangeString('scrollbars',"scrollbars2");

					this.unsetPref_And_CSS_Bool("tbnocheckbg");
				break;
				case "skin_blue":
					this.prefChangeString("ntabs","tabs_blue");
				break;
				case "skin_blue_f3":
					this.prefChangeString("ntabs","tabs_blue");
				break;
				case "skin_ff4def":
					this.prefChangeString("ntabs","tabs_ff4def");
				break;
				case "skin_glass1":
					this.prefChangeString("ntabs","tabs_glass1");
				break;	
				case "skin_glass2":
					this.prefChangeString("ntabs","tabs_glass1");
					this.changePref_And_CSS_Bool("fullglassdd",true);
				break;
			}
			
		break;
		
		case "scrollbars":
			this.unsetPref_And_CSS_String("scrollbars","scrollbars1");
			this.unsetPref_And_CSS_String("scrollbars","scrollbars2");
			this.unsetPref_And_CSS_String("scrollbars","scrollbarsdef");
		break;

		case "appbutton":
			this.unsetPref_And_CSS_String("appbutton","appbutnoia");
			this.unsetPref_And_CSS_String("appbutton","appbutao");
			this.unsetPref_And_CSS_String("appbutton","appbutat");
			this.unsetPref_And_CSS_String("appbutton","appbutorg");
			this.unsetPref_And_CSS_String("appbutton","appbutaurora");
			this.unsetPref_And_CSS_String("appbutton","appbutnightly");
		break;
		
		case "hovandactmenu":
			this.unsetPref_And_CSS_String("hovandactmenu","haamdef");
			this.unsetPref_And_CSS_String("hovandactmenu","haamtransp");
			this.unsetPref_And_CSS_String("hovandactmenu","haampurple");
			this.unsetPref_And_CSS_String("hovandactmenu","haamblue");
			this.unsetPref_And_CSS_String("hovandactmenu","haamsemitransp");
		break;
		
		case "ntabs":
			
			if(value=="tabs_black"){
				this.prefs.setCharPref("tabfontcolor","#FFFFFF");
				this.prefs.setCharPref("tabactfontcolor","#FFFFFF");

				this.prefChangeBool(true,'tabfontcustom');		// set tab font to white on theme change to black
				this.prefChangeBool(true,'tabhfontcustom');		// set tab hover font to white on theme change to black
			} else{
				this.prefChangeBool(false,'tabfontcustom');		// set tab font to black on theme change to black
				this.prefChangeBool(false,'tabhfontcustom');	// set tab hover font on theme change to black	
			}

			if(this.prefs.getCharPref("skin")=="skin_ff4def" || value=="noiatabs1" || value=="noiatabs2" || value=="noiatabs3" || value=="noiatabs4" || value=="noiatabs5"){
				document.getElementById("rounded_tab1").disabled=true;
				document.getElementById("rounded_tab2").disabled=true;
			} else {
				document.getElementById("rounded_tab1").disabled=false;
				document.getElementById("rounded_tab2").disabled=false;	
			}
			
			if(this.prefs.getBoolPref("owntabs")) this.prefChangeBool(false,"owntabs");
			
			this.unsetPref_And_CSS_Bool("noactblueb");
			this.unsetPref_And_CSS_Bool("noactblueblack");
			this.unsetPref_And_CSS_Bool("noactblueg");
			this.unsetPref_And_CSS_Bool("roundtab");
			this.unsetPref_And_CSS_Bool("roundttab");
			this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
			this.unsetPref_And_CSS_String("tabprogress",this.prefs.getCharPref("tabprogress"));
			this.changePref_And_CSS_String("tabprogress","tabprog0");
			this.unsetPref_And_CSS_String("tabactblink",this.prefs.getCharPref("tabactblink"));
			this.changePref_And_CSS_String("tabactblink","act0");
		break;
		
		case "tabprogress":
			this.unsetPref_And_CSS_String("tabprogress",this.prefs.getCharPref("tabprogress"));
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_String("alttabthrobber",this.prefs.getCharPref("alttabthrobber"));
			this.changePref_And_CSS_String("alttabthrobber","alttabthr0");
		break;
		
		case "tabactblink":
			this.unsetPref_And_CSS_Bool("noactblueb");
			this.unsetPref_And_CSS_Bool("noactblueblack");
			this.unsetPref_And_CSS_Bool("noactblueg");
			var check_tabs=this.prefs.getCharPref("ntabs");
			if (check_tabs=="noiatabs1" || check_tabs=="noiatabs2" || check_tabs=="noiatabs3" || check_tabs=="noiatabs4" || check_tabs=="noiatabs5"){
				this.unsetPref_And_CSS_String("ntabs",this.prefs.getCharPref("ntabs"));
				this.changePref_And_CSS_String("ntabs","tabs_gray");
			}
			this.unsetPref_And_CSS_String("tabactblink",this.prefs.getCharPref("tabactblink"));
		break;
		
		case "alttabthrobber":
			this.unsetPref_And_CSS_String("alttabthrobber",this.prefs.getCharPref("alttabthrobber"));
			this.unsetPref_And_CSS_String("tabprogress",this.prefs.getCharPref("tabprogress"));
			this.changePref_And_CSS_String("tabprogress","tabprog0");
		break;

	}
	
	this.hideShowSkinSettings();
	this.changePref_And_CSS_String(which,value);
	this.activateThemeNoia();
	
},

exportData: function() {

  var patterns = new Array;
  patterns[0] = "Noiapreferences-DO_NOT_EDIT";
  var z = 1, pref;
	
	//themes
	patterns[1]="skin:"+this.prefs.getCharPref("skin");
	patterns[2]="ntabs:"+this.prefs.getCharPref("ntabs");
	patterns[3]="persona="+this.prefs.getBoolPref("persona");
	
	//extra theme settings
	patterns[4]="roxp="+this.prefs.getBoolPref("roxp");
	patterns[5]="noactblueg="+this.prefs.getBoolPref("noactblueg");
	patterns[6]="hidetabbarbg="+this.prefs.getBoolPref("hidetabbarbg");
	patterns[7]="cleaner="+this.prefs.getBoolPref("cleaner");
	patterns[8]="ddg="+this.prefs.getBoolPref("ddg");
	patterns[9]="noactblueblack="+this.prefs.getBoolPref("noactblueblack");
	patterns[10]="ddgb="+this.prefs.getBoolPref("ddgb");
	patterns[11]="dddb="+this.prefs.getBoolPref("dddb");
	patterns[12]="noactblueb="+this.prefs.getBoolPref("noactblueb");
	patterns[13]="fullglassdd="+this.prefs.getBoolPref("fullglassdd");
	patterns[14]="fullglassnopref="+this.prefs.getBoolPref("fullglassnopref");
	
	//fonts
	patterns[15]="tabfontcustom="+this.prefs.getBoolPref("tabfontcustom");
	patterns[16]="tabfontcolor:"+this.prefs.getCharPref("tabfontcolor");
	patterns[17]="tabhfontcustom="+this.prefs.getBoolPref("tabhfontcustom");
	patterns[18]="tabactfontcolor:"+this.prefs.getCharPref("tabactfontcolor");
	patterns[19]="tbfontcustom="+this.prefs.getBoolPref("tbfontcustom");
	patterns[20]="toolbarfontcolor:"+this.prefs.getCharPref("toolbarfontcolor");
	patterns[21]="sbfontcustom="+this.prefs.getBoolPref("sbfontcustom");
	patterns[22]="statusbarfontcolor:"+this.prefs.getCharPref("statusbarfontcolor");
	patterns[23]="ddfontcustom="+this.prefs.getBoolPref("ddfontcustom");
	patterns[24]="dropdownmenufontcolor:"+this.prefs.getCharPref("dropdownmenufontcolor");
	patterns[25]="tabtscustom="+this.prefs.getBoolPref("tabtscustom");
	patterns[26]="tabfontshadow:"+this.prefs.getCharPref("tabfontshadow");
	patterns[27]="tabhtscustom="+this.prefs.getBoolPref("tabhtscustom");
	patterns[28]="tabactfontshadow:"+this.prefs.getCharPref("tabactfontshadow");
	patterns[29]="tbtscustom="+this.prefs.getBoolPref("tbtscustom");
	patterns[30]="toolbarfontshadow:"+this.prefs.getCharPref("toolbarfontshadow");
	patterns[31]="sbtscustom="+this.prefs.getBoolPref("sbtscustom");
	patterns[32]="statusbarfontshadow:"+this.prefs.getCharPref("statusbarfontshadow");
	patterns[33]="ddtscustom="+this.prefs.getBoolPref("ddtscustom");
	patterns[34]="dropdownmenufontshadow:"+this.prefs.getCharPref("dropdownmenufontshadow");
	
	//tweaks page 1 (main)
	patterns[35]="appbutton:"+this.prefs.getCharPref("appbutton");
	patterns[36]="appbut_nt="+this.prefs.getBoolPref("appbut_nt");
	patterns[37]="appbut="+this.prefs.getBoolPref("appbut");
	patterns[38]="appbutdm="+this.prefs.getBoolPref("appbutdm");
	patterns[39]="butdark="+this.prefs.getBoolPref("butdark");
	patterns[40]="butglass="+this.prefs.getBoolPref("butglass");
	patterns[41]="butsemiround="+this.prefs.getBoolPref("butsemiround");
	patterns[42]="scrollbars:"+this.prefs.getCharPref("scrollbars");
	
	//tweaks page 2 (tabs 1)
	patterns[43]="hightabs="+this.prefs.getBoolPref("hightabs");
	patterns[44]="closebutbig="+this.prefs.getBoolPref("closebutbig");
	patterns[45]="closebut="+this.prefs.getBoolPref("closebut");
	patterns[46]="closebut_alw="+this.prefs.getBoolPref("closebut_alw");
	patterns[47]="closebuthide="+this.prefs.getBoolPref("closebuthide");
	patterns[48]="tabclose="+this.prefs.getBoolPref("tabclose");
	patterns[49]="roundtab="+this.prefs.getBoolPref("roundtab");
	patterns[50]="roundttab="+this.prefs.getBoolPref("roundttab");
	patterns[51]="nbtabh="+this.prefs.getBoolPref("nbtabh");
	patterns[52]="nbtaba="+this.prefs.getBoolPref("nbtaba");
	patterns[53]="tabtextmargin="+this.prefs.getBoolPref("tabtextmargin");
	patterns[54]="tabactblink:"+this.prefs.getCharPref("tabactblink");
	patterns[55]="alttabthrobber:"+this.prefs.getCharPref("alttabthrobber");
	patterns[56]="tabprogress:"+this.prefs.getCharPref("tabprogress");
	
	//tweaks page 3 (tabs 2)
	patterns[57]="owntabs="+this.prefs.getBoolPref("owntabs");
	patterns[58]="tabbgcolor:"+this.prefs.getCharPref("tabbgcolor");
	patterns[59]="tabbgcolorrgb:"+this.prefs.getCharPref("tabbgcolorrgb");
	patterns[60]="tabbgcoloropacity:"+this.prefs.getCharPref("tabbgcoloropacity");
	patterns[61]="tabhovbgcolor:"+this.prefs.getCharPref("tabhovbgcolor");
	patterns[62]="tabhovbgcolorrgb:"+this.prefs.getCharPref("tabhovbgcolorrgb");
	patterns[63]="tabhovbgcoloropacity:"+this.prefs.getCharPref("tabhovbgcoloropacity");
	patterns[64]="tabselbgcolor:"+this.prefs.getCharPref("tabselbgcolor");
	patterns[65]="tabselbgcolorrgb:"+this.prefs.getCharPref("tabselbgcolorrgb");
	patterns[66]="tabselbgcoloropacity:"+this.prefs.getCharPref("tabselbgcoloropacity");	
	patterns[67]="tabpbgcolor:"+this.prefs.getCharPref("tabpbgcolor");
	patterns[68]="tabpbgcolorrgb:"+this.prefs.getCharPref("tabpbgcolorrgb");
	patterns[69]="tabpbgcoloropacity:"+this.prefs.getCharPref("tabpbgcoloropacity");
	patterns[70]="tabphovbgcolor:"+this.prefs.getCharPref("tabphovbgcolor");
	patterns[71]="tabphovbgcolorrgb:"+this.prefs.getCharPref("tabphovbgcolorrgb");	
	patterns[72]="tabphovbgcoloropacity:"+this.prefs.getCharPref("tabphovbgcoloropacity");
	patterns[73]="tabpselbgcolor:"+this.prefs.getCharPref("tabpselbgcolor");
	patterns[74]="tabpselbgcolorrgb:"+this.prefs.getCharPref("tabpselbgcolorrgb");
	patterns[75]="tabpselbgcoloropacity:"+this.prefs.getCharPref("tabpselbgcoloropacity");
	patterns[76]="tabnbgcolor:"+this.prefs.getCharPref("tabnbgcolor");	
	patterns[77]="tabnbgcolorrgb:"+this.prefs.getCharPref("tabnbgcolorrgb");
	patterns[78]="tabnbgcoloropacity:"+this.prefs.getCharPref("tabnbgcoloropacity");
	patterns[79]="tabnhovbgcolor:"+this.prefs.getCharPref("tabnhovbgcolor");
	patterns[80]="tabnhovbgcolorrgb:"+this.prefs.getCharPref("tabnhovbgcolorrgb");
	patterns[81]="tabnhovbgcoloropacity:"+this.prefs.getCharPref("tabnhovbgcoloropacity");

	//tweaks page 4 (toolbar)
	patterns[82]="ff4deftbb="+this.prefs.getBoolPref("ff4deftbb");
	patterns[83]="ff4deftbb2="+this.prefs.getBoolPref("ff4deftbb2");
	patterns[84]="smalltbb="+this.prefs.getBoolPref("smalltbb");
	patterns[85]="tbbgray="+this.prefs.getBoolPref("tbbgray");
	patterns[86]="smallfw="+this.prefs.getBoolPref("smallfw");
	patterns[87]="smallfw2="+this.prefs.getBoolPref("smallfw2");
	patterns[88]="smallfw3="+this.prefs.getBoolPref("smallfw3");
	patterns[89]="tbbgh="+this.prefs.getBoolPref("tbbgh");
	patterns[90]="tbbgh2="+this.prefs.getBoolPref("tbbgh2");
	patterns[91]="tbnocheckbg="+this.prefs.getBoolPref("tbnocheckbg");
	patterns[92]="bfdm1="+this.prefs.getBoolPref("bfdm1");
	patterns[93]="bfdm2="+this.prefs.getBoolPref("bfdm2");
	
	//tweaks page 5
	patterns[94]="altmb="+this.prefs.getBoolPref("altmb");
	patterns[95]="highbook="+this.prefs.getBoolPref("highbook");
	patterns[96]="urlbarbf="+this.prefs.getBoolPref("urlbarbf");
	patterns[97]="ddboldfont="+this.prefs.getBoolPref("ddboldfont");
	patterns[98]="hideclose1="+this.prefs.getBoolPref("hideclose1");
	patterns[99]="hideclose2="+this.prefs.getBoolPref("hideclose2");
	patterns[100]="bmfolder="+this.prefs.getBoolPref("bmfolder");
	patterns[101]="icorot="+this.prefs.getBoolPref("icorot");
	patterns[102]="icorot2="+this.prefs.getBoolPref("icorot2");
	patterns[103]="tooltip1="+this.prefs.getBoolPref("tooltip1");
	patterns[104]="wincon1="+this.prefs.getBoolPref("wincon1");
	patterns[105]="wincon2="+this.prefs.getBoolPref("wincon2");
	patterns[106]="hovandactmenu:"+this.prefs.getCharPref("hovandactmenu");

	//protab
	patterns[107]="favicon_w="+this.prefs.getBoolPref("favicon_w");
	patterns[108]="favicon="+this.prefs.getBoolPref("favicon");
	patterns[109]="favicon_hg="+this.prefs.getBoolPref("favicon_hg");
	
	//newer settings
	patterns[110]="lowtabs="+this.prefs.getBoolPref("lowtabs");
	patterns[111]="menuspace="+this.prefs.getBoolPref("menuspace");
	patterns[112]="fullglasstoolt="+this.prefs.getBoolPref("fullglasstoolt");
	patterns[113]="titlebarosd="+this.prefs.getBoolPref("titlebarosd");
	
  this.saveToFile(patterns);
  return true;
},

saveToFile: function(patterns) {

  const nsIFilePicker = Components.interfaces.nsIFilePicker;
  var fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
  var stream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);

  fp.init(window, null, nsIFilePicker.modeSave);
  fp.defaultExtension = "txt";
  fp.defaultString = "Noia_Preferences";
  fp.appendFilters(nsIFilePicker.filterText);

  if (fp.show() != nsIFilePicker.returnCancel) {
    let file = fp.file;
    if (!/\.txt$/.test(file.leafName.toLowerCase()))
      file.leafName += ".txt";
    if (file.exists())
      file.remove(true);
    file.create(file.NORMAL_FILE_TYPE, parseInt("0666", 8));
    stream.init(file, 0x02, 0x200, null);

    for (var i = 0; i < patterns.length ; i++) {
      patterns[i]=patterns[i]+"\n";
      stream.write(patterns[i], patterns[i].length);
    }
    stream.close();
  }
},

importData: function () {
   var pattern = this.loadFromFile();

   if (!pattern) return false;
   var i;
   if(pattern[0]!="Noiapreferences-DO_NOT_EDIT") {
      document.getElementById("Statusline1").value = this.stringBundle.GetStringFromName("status.msg.impexp1");
	  document.getElementById("Statusline2").value = this.stringBundle.GetStringFromName("status.msg.impexp2");
      return false;
   }

   var prefName, prefValue;
   
   /* first 'for' checks ...
	* ...skin settings and enables one skin.
	* ...settings, that have to be disabled and disables them.
	* ...string settings and enables/disables them.
	*/
   for (i=1; i<pattern.length; i++){
      var index = pattern[i].indexOf("=");
	  var index2 = pattern[i].indexOf(":");
      if (index > 0){
         prefName  = pattern[i].substring(0,index);
         prefValue = pattern[i].substring(index+1,pattern[i].length);
		 
		 if(i>2&&prefValue.length>4){
			this.prefChangeBool(false,''+prefName+'');
		 }
      }
	  else if (index2 > 0){
         prefName  = pattern[i].substring(0,index2);
         prefValue = pattern[i].substring(index2+1,pattern[i].length);
		 
		 this.prefs.setCharPref(''+prefName+'',''+prefValue+'');
		 
		 if(prefName=="skin") this.prefChangeString(prefName,prefValue);
		 if(prefName=="ntabs") this.prefChangeString(prefName,prefValue);
      }
   }

   /* second 'for' checks ...
	* ...settings, that have to be enabled and enables them.
	*/   
   for (i=1; i<pattern.length; i++){
      var index = pattern[i].indexOf("=");
      if (index > 0){
         prefName  = pattern[i].substring(0,index);
         prefValue = pattern[i].substring(index+1,pattern[i].length);
		 
		 if(i>2&&prefValue.length==4) {
			this.prefChangeBool(true,''+prefName+'');
		 }
      }
   }

	this.manager_init();

    document.getElementById("Statusline1").value = this.stringBundle.GetStringFromName("status.msg.impexp3");
	document.getElementById("Statusline2").value = this.stringBundle.GetStringFromName("status.msg.restart3");
	
	return true;
},

loadFromFile: function() {

   const nsIFilePicker = Components.interfaces.nsIFilePicker;
   var fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
   var stream = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
   var streamIO = Components.classes["@mozilla.org/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStream);

   fp.init(window, null, nsIFilePicker.modeOpen);
   fp.appendFilters(nsIFilePicker.filterText);

   if (fp.show() != nsIFilePicker.returnCancel) {
      stream.init(fp.file, 0x01, parseInt("0444", 8), null);
      streamIO.init(stream);
      var input = streamIO.read(stream.available());
      streamIO.close();
      stream.close();

      var linebreak = input.match(/(((\n+)|(\r+))+)/m)[1];
      return input.split(linebreak);
   }
   return null;
},

restoreDefaults: function(){
	//reset tab bg color and font settings
	this.prefs.setCharPref("tabbgcolor","#CCCCCC");
	this.prefs.setCharPref("tabbgcoloropacity","20");
	this.prefs.setCharPref("tabhovbgcolor","#66FFFF");
	this.prefs.setCharPref("tabhovbgcoloropacity","30");
	this.prefs.setCharPref("tabselbgcolor","#3366FF");
	this.prefs.setCharPref("tabselbgcoloropacity","60");
	this.prefs.setCharPref("tabpbgcolor","#CCCCCC");
	this.prefs.setCharPref("tabpbgcoloropacity","20");
	this.prefs.setCharPref("tabphovbgcolor","#66FFFF");
	this.prefs.setCharPref("tabphovbgcoloropacity","30");
	this.prefs.setCharPref("tabpselbgcolor","#3366FF");
	this.prefs.setCharPref("tabpselbgcoloropacity","40");
	this.prefs.setCharPref("tabnbgcolor","#CCCCCC");
	this.prefs.setCharPref("tabnbgcoloropacity","20");
	this.prefs.setCharPref("tabnhovbgcolor","#66FFFF");
	this.prefs.setCharPref("tabnhovbgcoloropacity","30");
	this.prefs.setCharPref("tabbgcolorrgb","rgba(204,204,204,0.20)");
	this.prefs.setCharPref("tabhovbgcolorrgb","rgba(102,255,255,0.30)");
	this.prefs.setCharPref("tabselbgcolorrgb","rgba(51,102,255,0.60)");
	this.prefs.setCharPref("tabpbgcolorrgb","rgba(204,204,204,0.20)");
	this.prefs.setCharPref("tabphovbgcolorrgb","rgba(102,255,255,0.30)");
	this.prefs.setCharPref("tabpselbgcolorrgb","rgba(51,102,255,0.40)");
	this.prefs.setCharPref("tabnbgcolorrgb","rgba(204,204,204,0.20)");
	this.prefs.setCharPref("tabnhovbgcolorrgb","rgba(102,255,255,0.30)");
	this.prefs.setCharPref("tabfontcolor","#33FF33");
	this.prefs.setCharPref("tabactfontcolor","#33FF33");
	this.prefs.setCharPref("toolbarfontcolor","#33FF33");
	this.prefs.setCharPref("statusbarfontcolor","#33FF33");
	this.prefs.setCharPref("dropdownmenufontcolor","#33FF33");
	this.prefs.setCharPref("tabfontshadow","#000000");
	this.prefs.setCharPref("tabactfontshadow","#000000");
	this.prefs.setCharPref("toolbarfontshadow","#000000");
	this.prefs.setCharPref("statusbarfontshadow","#000000");
	this.prefs.setCharPref("dropdownmenufontshadow","#000000");
	
	this.prefChangeString('skin',"skin_gray");
	this.tweaksOff();
},

faviconOption1: function(){
	
	var promptSvc = Components.classes["@mozilla.org/embedcomp/prompt-service;1"].getService(Components.interfaces.nsIPromptService);
	
	if(document.getElementById('n4favicon_protabw').checked==false){
		if(!confirm(this.stringBundle.GetStringFromName("favicon.msg"))){
			this.prefs.setBoolPref('favicon_w',false);
			document.getElementById("n4favicon_protab").disabled=true;
			document.getElementById("n4favicon_protabhg").disabled=true;
			document.getElementById('n4favicon_protabw').checked=false;
			document.getElementById('n4favicon_protab').checked=false;
			document.getElementById('n4favicon_protabhg').checked=false;

			if (this.prefs.getBoolPref("favicon") == true){
				this.prefs.setBoolPref('favicon',false);
				this.prefs.setBoolPref('favicon_hg',false);
				this.needsRestart = true;				
			}
		}
		else {
			this.prefs.setBoolPref('favicon_w',true);
			document.getElementById("n4favicon_protab").disabled=false;
			document.getElementById("n4favicon_protabhg").disabled=true;
			document.getElementById('n4favicon_protabw').checked=true;
			document.getElementById('n4favicon_protab').checked=false;
			document.getElementById('n4favicon_protabhg').checked=false;
			
			if (this.prefs.getBoolPref("favicon") == true){
				this.prefs.setBoolPref('favicon',false);
				this.prefs.setBoolPref('favicon_hg',false);
				this.needsRestart = true;				
			}
		}
	}else {
		document.getElementById("n4favicon_protab").disabled=true;
		document.getElementById("n4favicon_protabhg").disabled=true;
		document.getElementById('n4favicon_protab').checked=false;
		document.getElementById('n4favicon_protabhg').checked=false;
		
		if (this.prefs.getBoolPref("favicon") == true){
			this.prefs.setBoolPref('favicon',false);
			this.prefs.setBoolPref('favicon_hg',false);
			this.needsRestart = true;				
		}
	}
},

faviconOption2: function(){
	
	if (this.prefs.getBoolPref("favicon_w") == true){
	
		if(document.getElementById('n4favicon_protab').checked==false){
			this.prefs.setBoolPref('favicon_hg',false);
			document.getElementById("n4favicon_protabhg").disabled=false;
			document.getElementById('n4favicon_protabhg').checked=false;
			this.needsRestart = true;
		} else {
			this.prefs.setBoolPref('favicon',true);
			this.prefs.setBoolPref('favicon_hg',false);
			document.getElementById("n4favicon_protabhg").disabled=true;
			document.getElementById('n4favicon_protab').checked=true;
			this.needsRestart = true;
		}
	}
},

faviconOption3: function(){

	this.needsRestart = true;

},

noia4newTab: function () {
	var tab = document.getElementById("content").addTab("about:blank");
	document.getElementById("content").selectedTab = tab;
	document.getElementById("urlbar").focus();
}

}
// *********************************************************************************************************************

noia4themeconf.settings.init();