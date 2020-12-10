var qs = require('querystring')
http = require('http')
http.createServer()
    .on('request', (req, res) => {
        // var params = qs.parse(req.url.split('?')[1]);
        // let params = parse(req)
        setTimeout(() => {
            var params = qs.parse(req.url.split('?')[1]);

            params = JSON.parse(JSON.stringify(params).replace(/\s/g, ""))

            let fn = params['callback']
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            })

            res.write(fn + '(' + JSON.stringify({
                'sex': 'mal'
            }) + ')' + `\n let name = '666'`)
            res.end()
        }, 5000)

        // res.end()
    }).listen('8888')

