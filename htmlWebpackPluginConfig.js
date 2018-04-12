module.exports = {
    "files": {
        "css": ["vendor.css", "index.css"],
        "js": ["dell/vendor.js", "js/index.js"],
                "chunks": {
            "head": {
                "entry": "dll/vendor.js",
                "css": ["vendor.css"]
            },
            "main": {
                "entry": "js/index.js",
                "css": ['index.css']
            },
        }
    }
} 