//from Stylish v1.0.8
//http://userstyles.org
//the below is GPL v3

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function noiaMoonOptions() {}

noiaMoonOptions.prototype = {
  classDescription: "nmoStartup",
  contractID: "@nmoptions.ext/startup;1",
  classID: Components.ID("{a5e395d9-d32f-48c2-9626-626a2cd81e4e}"),
  QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsISupports,Components.interfaces.nsIObserver]),


  observe: function(aSubject,aTopic,aData) {
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
      
      switch(xulRuntime.OS) {
        case "Darwin":
          doc.getElementById('main-window').setAttribute('nmdarwin',true);
          break;
        case "Linux":
          doc.getElementById('main-window').setAttribute('nmlinux',true);
          break;
        case "WINNT":
          doc.getElementById('main-window').setAttribute('nmwinnt',true);
          break;
        default:
          doc.getElementById('main-window').setAttribute('nmother',true);
          break;
      }

      if (prefs.getBoolPref("dark") == true) {
        doc.getElementById('main-window').setAttribute('nmblack',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmblack',false);
      }
      if (prefs.getBoolPref("strip") == true) {
        doc.getElementById('main-window').setAttribute('nmstrip',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmstrip',false);
      }
      if (prefs.getBoolPref("solid") == true) {
        doc.getElementById('main-window').setAttribute('nmsolid',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmsolid',false);
      }
      if (prefs.getBoolPref("noline") == true) {
        doc.getElementById('main-window').setAttribute('nmnoline',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmnoline',false);
      }
      if (prefs.getBoolPref("tabbar") == true) {
        doc.getElementById('main-window').setAttribute('nmtabbar',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmtabbar',false);
      }
      if (prefs.getBoolPref("tabbottom") == true) {
        doc.getElementById('main-window').setAttribute('nmbottom',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmbottom',false);
      }
      if (prefs.getBoolPref("blue") == true) {
        doc.getElementById('main-window').setAttribute('nmblue',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmblue',false);
      }
      if (prefs.getBoolPref("light") == true) {
        doc.getElementById('main-window').setAttribute('nmlight',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmlight',false);
      }
      if (prefs.getBoolPref("rdtab") == true) {
        doc.getElementById('main-window').setAttribute('nmrdtab',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmrdtab',false);
      }
      if (prefs.getBoolPref("normal") == true) {
        doc.getElementById('main-window').setAttribute('nmnormal',true);
      } else {
        doc.getElementById('main-window').setAttribute('nmnormal',false);
      }
    }

    //apply the style sheets
    function applyIt(file) {
      var uri = ios.newURI(c + file,null,null);
      if (!sss.sheetRegistered(uri,sss.AGENT_SHEET)) {
        sss.loadAndRegisterSheet(uri,sss.AGENT_SHEET);
      }
    }
    
    var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"]
      .getService(Components.interfaces.nsIStyleSheetService);
    var ios = Components.classes["@mozilla.org/network/io-service;1"]
      .getService(Components.interfaces.nsIIOService);
    var uri;
    var c = "chrome://noiamoonoptions/content/";

    if (prefs.getBoolPref("semiroundedtab") == true) {
      applyIt("semi_rounded_tab.css");
    }
    
    if (prefs.getBoolPref("grey") == false) {
      if (prefs.getBoolPref("blue") == false) {
        if (prefs.getBoolPref("dark") == false) {
          if (prefs.getBoolPref("light") == false) {
            applyIt("grey.css");
            prefs.setBoolPref("grey",true);
          }
        }
      }
    }
    
    if (prefs.getBoolPref("grey") == true) {
      if (prefs.getBoolPref("blue") == false) {
        if (prefs.getBoolPref("dark") == false) {
          if (prefs.getBoolPref("light") == true) {
            prefs.setBoolPref("grey",false);
          }
        }
      }
    }

    if (prefs.getBoolPref("rdtab") == false) {
      if (prefs.getBoolPref("sqtab") == false) {
        if (prefs.getBoolPref("semiroundedtab") == false) {
          applyIt("sqtab.css");
          prefs.setBoolPref("sqtab",true);
        }
      }
    }
    
    if (prefs.getBoolPref("dark") == true) {
      applyIt("dark.css");
      prefs.setBoolPref("tabbar",false);
      prefs.setBoolPref("darker",false);
      prefs.setBoolPref("light",false);
    }

    if (prefs.getBoolPref("dark") == true) {
      applyIt("dark2.css");
    }
    
    if (prefs.getBoolPref("blue") == true) {
      applyIt("blue.css");
    }
    
    if (prefs.getBoolPref("grey") == true) {
      applyIt("grey.css");
    }
    
    if (prefs.getBoolPref("grey2") == true) {
      applyIt("grey2.css");
    }
    
    if (prefs.getBoolPref("darker") == true) {
      applyIt("darker.css");
    }
    
    if (prefs.getBoolPref("light") == true) {
      applyIt("light.css");
    }
    
    if (prefs.getBoolPref("shadow") == true) {
      applyIt("shadow.css");
    }
    
    if (prefs.getBoolPref("closebutton") == true) {
      applyIt("closebutton.css");
    }
    
    if (prefs.getBoolPref("findbartop") == true) {
      applyIt("findbartop.css");
    }
    
    if (prefs.getBoolPref("noline") == true) {
      applyIt("noline.css");
    }
    
    if (prefs.getBoolPref("dark") == false) {
      if (prefs.getBoolPref("noline") == true) {
        applyIt("noline2.css");
      }
    }
    
    if (prefs.getBoolPref("tabbar") == true) {
      if (prefs.getBoolPref("noline") == true) {
        applyIt("tabbar.css");
      }
    }
    
    if (prefs.getBoolPref("tabbar") == true) {
      if (prefs.getBoolPref("noline") == false) {
        applyIt("tabbar2.css");		
      }
    }	

    if (prefs.getBoolPref("strip") == true) {
      applyIt("strip.css");
    }	
    
    if (prefs.getBoolPref("semiroundedtab") == true) {
      applyIt("semi_rounded_tab.css");
    }
    
    if (prefs.getBoolPref("rdtab") == true) {
      applyIt("rdtab.css");
    }
    
    if (prefs.getBoolPref("sqtab") == true) {
      applyIt("sqtab.css");
    }
    
    if (prefs.getBoolPref("dark") == true) {
      if (prefs.getBoolPref("solid") == true) {
        applyIt("solid2.css");
      }
    }	
    
    if (prefs.getBoolPref("dark") == false) {
      if (prefs.getBoolPref("solid") == true) {
        applyIt("solid.css");
      }
    }

    if (prefs.getBoolPref("tabbottom") == true) {
      applyIt("tabbottom.css");
    }
    
    if (prefs.getBoolPref("normal") == true) {
      applyIt("normal.css");
    }
    
    if (prefs.getBoolPref("hide") == true) {
      applyIt("hide.css");
    }
    
    if (prefs.getBoolPref("rdbutton") == true) {
      applyIt("rdbutton.css");
    }
    
    if (prefs.getBoolPref("rdmenubutton") == true) {
      applyIt("rdmenubutton.css");
    }
    
    if (prefs.getBoolPref("rdtabbox") == true) {
      applyIt("rdtabbox.css");
    }
    
    if (prefs.getBoolPref("warm") == true) {
      applyIt("warm.css");
    }
    
    if (prefs.getBoolPref("red") == true) {
      applyIt("red.css");
    }
    
    if (prefs.getBoolPref("red2") == true) {
      applyIt("red2.css");
    }
    
    if (prefs.getBoolPref("bookmark") == true) {
      applyIt("bookmark.css");
    }
    
    if (prefs.getBoolPref("addon") == true) {
      applyIt("addon.css");
    }
    
    if (prefs.getBoolPref("personalbutton") == true) {
      applyIt("personalbutton.css");
    }
    
    if (prefs.getBoolPref("toolbarbutton") == true) {
      applyIt("toolbarbutton.css");
    }
    
    if (prefs.getBoolPref("navbarbutton") == true) {
      applyIt("navbar.css");
    }
    
    if (prefs.getBoolPref("fix") == true) {
      applyIt("fix.css");
    }
  }
};

if (XPCOMUtils.generateNSGetFactory) {
    var NSGetFactory = XPCOMUtils.generateNSGetFactory([noiaMoonOptions]);
} else {
    var NSGetModule = XPCOMUtils.generateNSGetModule([noiaMoonOptions]);
}
