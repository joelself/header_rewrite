/* global cdnDomain, devDomain */
(function (doc) {

"use strict";

var REGEX_GIST_URL = /^(https?):\/\/gist\.githubusercontent\.com\/(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+\..+)$/i;
var REGEX_RAW_URL  = /^(https?):\/\/raw\.github(?:usercontent)?\.com\/([^\/]+\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+\..+)/i;
var REGEX_REPO_URL = /^(https?):\/\/github\.com\/(.+?)\/(.+?)\/(?:(?:blob|raw)\/)?(.+?\/.+)/i;
var REGEX_DROPBOX_URL = /^(https?):\/\/www\.dropbox\.com\/s\/([a-z0-9]+?)\/(.+\.[^?]+)(\?.*)?/i;
var REGEX_BITBUCKET_URL = /^(https?):\/\/bitbucket\.org\/(.*?)\/raw\/([a-f0-9]+)\/(.+\..+)$/i;
var REGEX_FILESANYWHERE_URL = /^(https?):\/\/personal\.filesanywhere\.com\/fatemp\/([0-9]+?)\/([0-9]+?)\/([0-9A-Z]+?)\/(.*)$/i;
var REGEX_LAUNCHPAD_URL = /^(https?):\/\/bazaar\.launchpad\.net\/~(.+?)\/(.+)$/i;

var devEl  = doc.getElementById('url-dev');
var prodEl = doc.getElementById('url-prod');
var urlEl  = doc.getElementById('url');

urlEl.addEventListener('input', function () {
    var url = urlEl.value.trim();

    if (REGEX_RAW_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_RAW_URL, '$1://' + devDomain + '/$2/$3');
        prodEl.value = url.replace(REGEX_RAW_URL, '$1://' + cdnDomain + '/$2/$3');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');
    } else if (REGEX_REPO_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_REPO_URL, '$1://' + devDomain + '/$2/$3/$4');
        prodEl.value = url.replace(REGEX_REPO_URL, '$1://' + cdnDomain + '/$2/$3/$4');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');
    } else if (REGEX_GIST_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_GIST_URL, '$1://' + devDomain + '/$2');
        prodEl.value = url.replace(REGEX_GIST_URL, '$1://' + cdnDomain + '/$2');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');
    } else if(REGEX_DROPBOX_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_DROPBOX_URL, '$1://' + devDomain + '/s/$2/$3');
        prodEl.value = url.replace(REGEX_DROPBOX_URL, '$1://' + cdnDomain + '/s/$2/$3');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');        
    } else if(REGEX_BITBUCKET_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_BITBUCKET_URL, '$1://' + devDomain + '/$2/raw/$3/$4');
        prodEl.value = url.replace(REGEX_BITBUCKET_URL, '$1://' + cdnDomain + '/$2/raw/$3/$4');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');        
    }  else if(REGEX_FILESANYWHERE_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_FILESANYWHERE_URL, '$1://' + devDomain + '/fatemp/$2/$3/$4/$5');
        prodEl.value = url.replace(REGEX_FILESANYWHERE_URL, '$1://' + cdnDomain + '/fatemp/$2/$3/$4/$5');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');        
    }   else if(REGEX_LAUNCHPAD_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = url.replace(REGEX_LAUNCHPAD_URL, '$1://' + devDomain + '/~$2/$3');
        prodEl.value = url.replace(REGEX_LAUNCHPAD_URL, '$1://' + cdnDomain + '/~$2/$3');

        devEl.classList.add('valid');
        prodEl.classList.add('valid');        
    } else {
        urlEl.classList.remove('valid');

        if (url.length) {
            urlEl.classList.add('invalid');
        } else {
            urlEl.classList.remove('invalid');
        }

        devEl.value  = '';
        prodEl.value = '';

        devEl.classList.remove('valid');
        prodEl.classList.remove('valid');
    }
}, false);

devEl.addEventListener('focus', onFocus);
prodEl.addEventListener('focus', onFocus);

function onFocus(e) {
    setTimeout(function () {
        e.target.select();
    }, 1);
}

}(document));
