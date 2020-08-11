new WOW().init();


(function() {

    let searchIndex = null;
    const resultsUI = document.querySelector('.search-results');
    const searchInput = document.querySelector('#search-str');
    const footer = document.querySelector('footer');
    $(window).keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    const btnHandler = function(selector, callback) {
            const btn = document.querySelector(selector);
            if (!btn) { return; }
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                callback();
            }, false);
        }
        // clear the current results
    const clearResults = function() {
        while (resultsUI.firstChild) {
            resultsUI.removeChild(resultsUI.firstChild);
        }
        // unhide the footer again
        footer.classList.remove('invisible');

    }

    // search and display
    const find = function(str) {

        str = str.toLowerCase();
        // look for matches in the search JSON
        const results = [];
        searchIndex.forEach(item => {

        })
        for (const item in searchIndex) {
            if (Object.prototype.hasOwnProperty.call(searchIndex, item)) {
                const found = searchIndex[item].text.indexOf(str);
                if (found != -1) {
                    results.push(searchIndex[item])
                }
            }

        }


        // build and insert the new result entries
        clearResults();
        footer.classList.add('invisible');
        if (results.length == 0) {
            const listItem = document.createElement('li');
            listItem.textContent = "No results found"
            resultsUI.appendChild(listItem);
        }
        for (const item in results) {
            if (Object.prototype.hasOwnProperty.call(results, item)) {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                const p = document.createElement('p');
                const found = [...results[item].text.matchAll(str)];
                const firstIdx = found[0].index;
                link.textContent = `${results[item].title} (${found.length})`;
                const searchText = found[0].input.substring(firstIdx, firstIdx + 50);
                p.innerHTML = `...<strong>${str}</strong>  ${searchText.substring(str.length)}...`
                link.setAttribute('href', results[item].url);
                listItem.appendChild(link);
                listItem.appendChild(p)
                resultsUI.appendChild(listItem);
            }

        }
    }

    // add an event listener for a click on the search link
    btnHandler('#search-str', async function() {

        // get the data
        searchIndex = await fetch('/search.json').then((res) => res.json()).then((res) => res.search);

        searchInput.focus();

        // listen for input changes
        searchInput.addEventListener('input', function(event) {
            const str = searchInput.value
            if (str.length > 2) {
                find(str);
            } else {
                clearResults();
            }
        });

    });
})();