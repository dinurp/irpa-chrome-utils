// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var chrome = ctx.addApplication('chrome', {"nature":"UIAUTOMATION"});

chrome.mainChromeWindow = chrome.addPage('mainChromeWindow', {"comment":"Pane - New Tab - Google Chrome"});

chrome.dlgChromeLeaveSite = chrome.addPage('dlgChromeLeaveSite', {"comment":"Pane - New Tab - Google Chrome"});

chrome.pChromerLeaveSite = chrome.addPage('pChromerLeaveSite', {"comment":"Pane - New Tab - Google Chrome"});
chrome.pChromerLeaveSite.stMainInstruction = chrome.pChromerLeaveSite.addItem('stMainInstruction');
chrome.pChromerLeaveSite.btLeave = chrome.pChromerLeaveSite.addItem('btLeave', {"mustExist":true});
chrome.pChromerLeaveSite.btCancel = chrome.pChromerLeaveSite.addItem('btCancel', {"mustExist":true});

chrome.pControlPane = chrome.addPage('pControlPane', {"comment":"Pane - about:blank - Google Chrome"});
chrome.pControlPane.btClose = chrome.pControlPane.addItem('btClose', {"mustExist":true});
chrome.pControlPane.btMinimize = chrome.pControlPane.addItem('btMinimize');
chrome.pControlPane.btRestore = chrome.pControlPane.addItem('btRestore');

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
