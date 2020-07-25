module.exports = function(collection) {
    let skillList = collection.getAll().map(function(skill) {
        let item = {};
        if (skill.data.externalurl) {
            item["url"] = skill.data.externalurl;
        } else item["url"] = skill.url;
        item["title"] = skill.data.title;
        item["text"] = skill.templateContent;
        return item;
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return skillList;
};