
// ----------------------------------------------------------------
//   Test menu for scenario closePage 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'closePage', 'Test closePage', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			chrome.scenarios.closePage.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario closePage Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: closePage
// ----------------------------------------------------------------
chrome.scenario({ closePage: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(chrome.steps.clickCloseButton, chrome.steps.ChromeClosing, 'Default');
	sc.step(chrome.steps.clickCloseButton, chrome.steps.DismissConfirm, 'confirm');
	sc.step(chrome.steps.ChromeClosing, null);
	sc.step(chrome.steps.DismissConfirm, null);
}}, ctx.dataManagers.rootData).setId('8ab33be9-380c-4a3e-9c50-219d38936e6c') ;

// ----------------------------------------------------------------
//   Step: clickCloseButton
// ----------------------------------------------------------------
chrome.step({ clickCloseButton: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('closePage', 'cbad932c-4c3c-459b-8924-32bdaa6ef541') ;
	// Wait until the Page loads
	chrome.pControlPane.wait(function(ev) {
		// Clicks  Close button
		chrome.pControlPane.btClose.click();
		// Wait until the Page loads
		chrome.pControlPane.wait(function(ev) {
			sc.endStep('Default'); // ChromeClosing
			return;
		});
		// Wait until the Page loads
		chrome.pChromerLeaveSite.wait(function(ev) {
			sc.endStep('confirm'); // DismissConfirm
			return;
		});
	});
}});

// ----------------------------------------------------------------
//   Step: ChromeClosing
// ----------------------------------------------------------------
chrome.step({ ChromeClosing: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('closePage', '005407a9-af9e-44cc-8479-c6f38f610d2d') ;
	// Wait until the Page loads
	chrome.pControlPane.wait(function(ev) {
		sc.endStep(); // end Scenario
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: DismissConfirm
// ----------------------------------------------------------------
chrome.step({ DismissConfirm: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('closePage', 'f9b43df7-ebd8-4e21-8f2d-f4aabb8f4285') ;
	// Wait until the Page loads
	chrome.pChromerLeaveSite.wait(function(ev) {
		chrome.pChromerLeaveSite.btLeave.click();
		sc.endStep(); // end Scenario
		return;
	});
}});
