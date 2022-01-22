// @ts-nocheck

const vscode = require('vscode');
// const _ = require('lodash');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "linkify" is now active!');

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.linkify', function () {

		// vscode.workspace.textDocuments.forEach(function(item, index) {
		// 	console.log('item: '+JSON.stringify(item)+", index: "+index);
		// })
		let toRemoveStrings = [

			// n.b. forward slashes are required for regex
			"[\[|\]]", // remove square brackets
			"\(\d+\) ,", // take out e.g. `(21) ` from YouTube etc

			// remove site title
			" - Google Search ",
			" - Stack Overflow ",
			" - YouTube ",
			" - JIRA ",
			" - Confluence ",
			" - Jira ",
			" - Quora",
			"GitHub - ",
			" - Ask Different",
			" - Android Enthusiasts Stack Exchange",
			" - Wikipedia ",
			" - chrisjbird@gmail.com - Gmail ",
			
			// Google
			// TODO should check this is a Google query at this point, in case it messes up other URLs
			"oq=.*?\&",
			"rlz=.*?\&",
			"sxsrf=.*?\&",
			"ei=.*?\&",
			"ved=.*?\&",
			"gs_l=.*?\&",
			"gs_lcp=.*?\&",
			"gs_ssp=.*?\&",
			"uact=.*?\&",
			"aqs=.*?\&",
			"sourceid=.*?\&",
			"biw=.*?\&",
			"bih=.*?\&",
			"ei=.*?\&",
			"=.*?\&",
			// "ie=.*?[\&\)]" // takes off trailing `)`
			"ie=.*?\&",
			"sa=.*?\&",
			"stick=.*?\&",
			"sclient=.*?\&",
			"qsclient=.*?\&",

			// ebay
			"_trkparms=.*?\&",
			"_trksid=.*?\&",
			 


			// UTM
			"utm_campaign=.*?\&",
			"utm_medium=.*?\&",
			"utm_source=.*?\&",
			"hsCtaTracking=.*?\&",

// 			aws stuff:
// ```
// sc_icampaign
// sc_ichannel
// sc_ioutcome
// sc_icontent
// sc_iplace
// trkCampaign
// trk
// whats-new-cards.sort-by
// whats-new-cards.sort-order
// mkt_tok
// ```


		];

		const editor = vscode.window.activeTextEditor; 
		var selection = editor.selection; 
		var text = editor.document.getText(selection);
		// console.log('text: ' + text);

		let lines = text.split('\n');
		let newlines = [];
		lines.forEach(function(line) {
			// @ts-ignore
			console.log('orig line: ' + line);
			let linkStart = line.indexOf('(http');
			if (-1 != linkStart) {
				let nl = line;
				
				toRemoveStrings.forEach(replaceString => {
					console.log(`Trying replaceString: ${replaceString}`);
					// nl = nl.replace(/replaceString/, ''); //  This type of regex cannot be created dynamically.
					nl = nl.replace(new RegExp(replaceString, 'g'), ''); // 
				});
				// TODO factor these into func
				// nl = nl.replace(/[\[|\]]/g, ''); // remove square brackets

				// // remove site title
				// nl = nl.replace(/ - Google Search /g, '');
				// nl = nl.replace(/ - Stack Overflow /g, '');
				// nl = nl.replace(/ - YouTube /g, '');
				// nl = nl.replace(/ - JIRA /g, '');
				// nl = nl.replace(/ - Quora/g, '');
				// nl = nl.replace(/GitHub - /g, '');
				// nl = nl.replace(/ - Ask Different/g, '');
				// nl = nl.replace(/ - Android Enthusiasts Stack Exchange/g, '');

				// // take out e.g. `(21) ` from YouTube etc
				// // nl = nl.replace(/\([0-9]+\)/g, '');
				// nl = nl.replace(/\(\d+\) /g, ''); 

				// // Google
				// // TODO should check this is a Google query at this point, in case it messes up other URLs
				// nl = nl.replace(/oq=.*?\&/g, '');
				// nl = nl.replace(/rlz=.*?\&/g, '');
				// nl = nl.replace(/sxsrf=.*?\&/g, '');
				// nl = nl.replace(/ei=.*?\&/g, '');
				// nl = nl.replace(/ved=.*?\&/g, '');
				// nl = nl.replace(/gs_l=.*?\&/g, '');
				// nl = nl.replace(/gs_lcp=.*?\&/g, '');
				// nl = nl.replace(/uact=.*?\&/g, '');
				// nl = nl.replace(/aqs=.*?\&/g, '');
				// nl = nl.replace(/sourceid=.*?\&/g, '');
				// // nl = nl.replace(/ie=.*?[\&\)]/g, ''); // takes off trailing `)`
				// nl = nl.replace(/ie=.*?\&/g, '');
				// nl = nl.replace(/sa=.*?\&/g, '');
				// nl = nl.replace(/stick=.*?\&/g, '');
				// nl = nl.replace(/sclient=.*?\&/g, '');

				// // UTM
				// nl = nl.replace(/utm_campaign=.*?\&/g, '');
				// nl = nl.replace(/utm_medium=.*?\&/g, '');
				// nl = nl.replace(/utm_source=.*?\&/g, '');
				// nl = nl.replace(/hsCtaTracking=.*?\&/g, '');
				// TODO doesn't get last one as it doesn't end with `&`
				// TODO more elegant would be remove all params that are not `q`...
				// TODO   if it has `https://www.google.com/search?`:
					// remove everything until `oq=`
					// remove the rest

				linkStart = nl.indexOf('(http'); // as chars might have been removed
				nl = nl.substring(0, linkStart) + ']' + nl.substring(linkStart);
				nl = '[' + nl.trim();
				newlines.push(nl);
				// @ts-ignore
				console.log('newline: ' + nl);
			} else {
				if (line != 'Window') { // TODO doesn't work on Windows?
					newlines.push(line);
				}
			}

			let suspendedLinkStart = line.indexOf('(chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html');
			if (-1 != suspendedLinkStart) {
				let nl = line;
				console.log('newline: ' + nl);
				// suspended (by The Great Suspender) tabs in TabsOutliner are of form:
				// Page Title (chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Title&pos=x&uri=http://domain.com/path)
				// e.g.
				//     Devs - S1E1 "Episode 1" - Music and List of Songs (chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Devs%20-%20S1E1%20%22Episode%201%22%20-%20Music%20and%20List%20of%20Songs&pos=462&uri=https://www.what-song.com/Tvshow/100565/Devs/e/117188)
				// just need to take out `chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/suspended.html#ttl=Devs%20-%20S1E1%20%22Episode%201%22%20-%20Music%20and%20List%20of%20Songs&pos=462&uri=`
				// i.e. from `chrome-extension://klbibkeccnjlkjkiokjodocebajanakg/` to `&uri=` inclusive
				// and apply "normal" process
			}

		})

		let newText = newlines.join('\n');
		editor.edit(builder => builder.replace(selection, newText)); // replace the selection

		vscode.window.showInformationMessage('Linkified!');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {} // this method is called when your extension is deactivated

module.exports = { activate, deactivate }
