module.exports = {
    entry: {
        test_resource1: '.\\js\\src\\test1.js',
        test_resource2: '.\\js\\src\\test2.js',
    },
    output: {
        path: ".\\src\\staticresources",
        filename: "[name].resource"
    }
};