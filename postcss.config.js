module.exports = {
    plugins: [require("postcss-import"), require("postcss-clean")({
        level: {
            1: {
                specialComments: "none"
            },
            2: {}
        }
    })]
};