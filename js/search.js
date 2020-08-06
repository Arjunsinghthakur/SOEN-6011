new WOW().init();


(function() {

    var searchIndex = null;
    var searchUI = document.querySelector('.search-ui');
    var resultsUI = document.querySelector('.search-results');
    var searchInput = document.querySelector('#search-str');
    var footer = document.querySelector('footer');

    var btnHandler = function(selector, callback) {
            var btn = document.querySelector(selector);
            if (!btn) { return; }
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                callback();
            }, false);
        }
        // clear the current results
    var clearResults = function() {
        while (resultsUI.firstChild) {
            resultsUI.removeChild(resultsUI.firstChild);
        }
        // unhide the footer again
        footer.classList.remove('invisible');

    }

    // search and display
    var find = function(str) {

        str = str.toLowerCase();
        // look for matches in the search JSON
        var results = [];
        for (var item in searchIndex) {
            var found = searchIndex[item].text.indexOf(str);
            if (found != -1) {
                results.push(searchIndex[item])
            }
        }


        // build and insert the new result entries
        clearResults();
        footer.classList.add('invisible');
        if (results.length == 0) {
            var listItem = document.createElement('li');
            listItem.textContent = "No results found"
            resultsUI.appendChild(listItem);
        }
        for (var item in results) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            var p = document.createElement('p');

            var found = [...results[item].text.matchAll(str)];
            var firstIdx = found[0].index;
            link.textContent = `${results[item].title} (${found.length})`;
            var searchText = found[0].input.substring(firstIdx, firstIdx + 50);
            p.innerHTML = `...<strong>${str}</strong>  ${searchText.substring(str.length)}...`
            link.setAttribute('href', results[item].url);
            listItem.appendChild(link);
            listItem.appendChild(p)
            resultsUI.appendChild(listItem);
        }
    }

    // add an event listener for a click on the search link
    btnHandler('#search-str', async function() {

        // get the data
        searchIndex = await fetch('/search.json').then((res) => res.json()).then((res) => res.search);
       
        searchInput.focus();

        // listen for input changes
        searchInput.addEventListener('keyup', function(event) {
            var str = searchInput.value
            if (str.length > 2) {
                find(str);
            } else {
                clearResults();
            }
        });

    });
})();
