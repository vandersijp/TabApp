alsCodeCompare = function(val1, val2) {
    if (typeof val1 == 'undefined') return false;
    if (typeof val2 == 'undefined') return false;
    return (val2.toLowerCase() == val1.toLowerCase());
}

alsGetDomainRoot = function() {
    var root = "";
    var host = window.location.hostname;
    if (host == 'localhost') {
        // replace only replacs the first occurence
        // see http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
        root = window.location.pathname.split("/").join("");
    } else {
        root = host.split(".")[0];
    }
    return root;
}
