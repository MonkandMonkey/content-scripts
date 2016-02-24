chrome extension: 
	"A simple content scripts example."
2016/2/24
[MonkandMokey]
------------------------------------------
chrome extension has 3 main kinds: 
	1. browser action
	2. page action
	3. content scripts
This example is a content scripts. Which means it works in the background.
For more details, you can find in chrome extension's official documents.
---------------------------------------------------------------------------
Function:
	Get the tagname of the focus DOM element which is being clicked.
	There will be an alert popup, and the DOM element will change its background color into orange.
--------------------------------------------------------------------------------
Note:
	* In manifest.json, you can choose the websites which will allow the extension to run. 
	  eg: "matches":["http://news.163.com/*"]
	* Sometimes the CSP(content security policy) will bring you some limitation in your javascript. When it happens, look for the chrome extension's document for help.
	  You may need to change your code a little bit. Chrome did all these for better security.
------------------------------------------------
File Lists:
	* manifest.json: 
		List the files' name so that chrome will find them.
		Assign the attributes that needed.
	* popup.js:
		The function and logic is reliazed here.
		