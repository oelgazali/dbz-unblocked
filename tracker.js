function wsg_inject_script(url, cb) {
  var sc = document.createElement('script');
  sc.type = 'text/javascript';
  sc.src = url;
  sc.async = true;

  if (typeof cb === 'function')
    sc.onload = sc.onreadystatechange = cb;

  var first = document.getElementsByTagName('script')[0];
  first.parentNode.insertBefore(sc, first);
}

function w3counter(id) {
    
    if (typeof window._w3counter !== 'undefined') return;

    var info = '&userAgent=' + encodeURIComponent(navigator.userAgent);
    info += '&webpageName=' + encodeURIComponent(document.title);
    info += '&ref=' + encodeURIComponent(document.referrer);
    info += '&url=' + encodeURIComponent(window.location);
    info += '&width=' + screen.width;
    info += '&height=' + screen.height;
    info += '&rand=' + Math.round(1000*Math.random());

    var pageLoadTime = Date.now() - window.performance.timing.navigationStart;
    info += '&lt=' + pageLoadTime;

    wsg_inject_script('https://www.w3counter.com/track/pv?id=' + id + info);


    window._w3counter = id;


}


function w3counter_conversion(options) {

    var info = '&rand=' + Math.round(1000*Math.random());
    if (typeof options === 'object') {
        if (typeof options.goal !== 'undefined')
            info += '&goal=' + encodeURIComponent(options.goal);
        if (typeof options.revenue !== 'undefined')
            info += '&revenue=' + encodeURIComponent(options.revenue);
        if (typeof options.reference !== 'undefined')
            info += '&reference=' + encodeURIComponent(options.reference);
    }
    info += '&userAgent=' + encodeURIComponent(navigator.userAgent);
    info += '&url=' + encodeURIComponent(window.location);

    var url = 'https://www.w3counter.com/track/gc?id=148189' + info;
    wsg_inject_script(url);
    
}

if (typeof window._w3counter === 'undefined')
    w3counter(148189);

