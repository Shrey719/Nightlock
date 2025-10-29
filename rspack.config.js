module.exports = [
    {
        name: "client",
        target: "web",
        resolve: ['.js', '.ts', '.json'],
        entry: "./src/nightlock.js",
        output: {
            "filename": "nightlock.bundle.js"
        }
    }
]