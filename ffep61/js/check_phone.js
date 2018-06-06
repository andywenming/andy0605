new (function () {
    function initialize() {
        var isUC = (/Mozilla\/5\.0\(x11\;U;Linuxi686;zh-CN;rv:1\.2\.3\.4\)Gecko/i.test(navigator.userAgent.replace(/ /g, ""))) || /mobile|ucbrowser|ucweb/i.test(navigator.userAgent);
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) || isUC) {
            if (window.location.href.indexOf("?mobile") < 0) {
                try {
                    var isIndex = /(index\.)/i.test(location.pathname);
                    if (!isIndex) {
                        isIndex = (location.pathname == "" || location.pathname == "/");
                    }
                    if ((/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || isUC) && (location.search.indexOf("gomobile=1") == -1) && !/\/m\//.test(location.href)) {
                        //优先判断新的移动适配方案
                        var linkArr = document.getElementsByTagName("link");

                        for (var i = 0; i < linkArr.length; i++) {
                            var _link = linkArr[i];
                            var _rel = _link.getAttribute("rel");
                            if (_rel == "alternate") {
                                var _href = _link.getAttribute("href");
                                location.href = _href;
                                return;
                            }
                        }
                        //end
                        if (isIndex) {
                            if (typeof mobileUrl == "undefined")
                                location.href = "/m/index.html?gomobile=1";
                            else
                                location.href = mobileUrl.indexOf("gomobile") > -1 ? mobileUrl : mobileUrl + "?gomobile=1";
                        }
                        else {
                            if (typeof mobileUrl == "undefined") {
                                var nodes = location.pathname.split("/");
                                if (nodes.length > 0)
                                    location.href = "/m/" + nodes[nodes.length - 1];
                                else
                                    location.href = "/m/";
                            }
                            else {
                                location.href = mobileUrl;
                            }
                        }
                    }
                    else if (/iPad/i.test(navigator.userAgent)) {
                    } else {
                        //window.location.href = "/m/index.html";
                    }
                } catch (e) { }
            }
        }
    }
    initialize();
    setTimeout(initialize, 200);
    setTimeout(initialize, 500);
    setTimeout(initialize, 700);
    setTimeout(initialize, 900);
    setTimeout(initialize, 1200);
})(); 