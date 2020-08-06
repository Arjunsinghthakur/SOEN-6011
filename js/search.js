new WOW().init();


(async function() {

    var searchIndex = await fetch('/search.json').then((res) => res.json()).then((res) => res.search);
    var resultsUI = document.querySelector('.search-results');
    var searchInput = document.querySelector('#search-input');
    $(document).keypress(
        function(event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });
    // clear the current results
    var clearResults = function() {
        while (resultsUI.firstChild) {
            resultsUI.removeChild(resultsUI.firstChild);
        }

    }

    var resultItemUI = (title, count, url, match, line) => `
        <a href="${url}">${title} <span class="badge badge-primary badge-pill">${count}</span></a>
        <p>...<strong>${match}</strong> ${line}...</p>
        
    `;

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
        if (results.length == 0) {
            var listItem = document.createElement('li');
            listItem.textContent = "No results found"
            resultsUI.appendChild(listItem);
        }
        for (var item in results) {
            var listItem = document.createElement('li');
            listItem.className = "list-group-item d-flex flex-column justify-content-start bg-dark";
            var found = [...results[item].text.matchAll(str)];
            var firstIdx = found[0].index;
            var searchText = found[0].input.substring(firstIdx, firstIdx + 50);
            listItem.innerHTML = resultItemUI(results[item].title,
                found.length,
                results[item].url,
                str,
                searchText.substring(str.length))
            resultsUI.appendChild(listItem);
        }
    }


    // listen for input changes
    searchInput.addEventListener('input', function(event) {
        var str = searchInput.value
        if (str.length > 2) {
            find(str);
        } else {
            clearResults();
        }
    });

})();