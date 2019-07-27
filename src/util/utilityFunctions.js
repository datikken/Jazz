const slugify = function(text) {
    
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\W-]+/g, '')
        .replace(/--+/g, '')
        .replace(/^-+/,'')
        .replace(/-+$/, '')
}

module.exports = { slugify }