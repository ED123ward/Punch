export function completeEmail(){
    window.WebViewJavascriptBridge.callHandler(
        'completeEmail',''
        , function(responseData) {
           
        }
    );
}

export function browser(url) {
  window.WebViewJavascriptBridge.callHandler(
    "browser",
    url,
    function (responseData) {
      
    }
  );
}


