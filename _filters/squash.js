/**
 * Make a search index string by removing duplicated words
 * and removing less useful, common short words
 *
 * @param {String} text
 */

module.exports = function(text) {
    let content = String(text);

    // all lower case, please
    content = content.toLowerCase();

    // remove all html elements and new lines
    const re = /(&lt;.*?&gt;)|(<.*?>)/gi;
    const plain = unescape(content.replace(re, ''));

    // remove duplicated words
    const words = plain.split(' ');
    const deduped = [...(new Set(words))];
    const dedupedStr = deduped.join(' ')

    // remove short and less meaningful words
    let result = dedupedStr.replace(/\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');

    // remove newlines, and punctuation 
    result = result.replace(/\.|\,|\?|-|—|\n/g, '');
    // remove repeated spaces 
    result = result.replace(/([ ]{2,}|\t+)/g, ' ');

    return result;
}