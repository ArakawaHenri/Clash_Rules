(function() {
    'use strict';
    try{
        window.location.href=getParams("pfurl");
    }catch(err){
        console.error(err);
        window.location.href=decodeURIComponent(/pfurl\=(.*?)&+/.exec(window.location.href)[1])
    }
})();