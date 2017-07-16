module.exports = {
    entry  : ["./web/app/app.js"],
    output : {
        path     : __dirname + '/web/dist',
        filename : 'bundle.js'
    },
    module : {}
}