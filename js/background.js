chrome.runtime.onInstalled.addListener(function() {
  console.log('FUNCTION is running!');
});
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});
chrome.contextMenus.create(contextMenuItem);
