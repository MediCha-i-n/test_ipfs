const buffer = require('buffer');
const path = require('path');
const fs = require('fs');
const IpfsHttpClient = require('ipfs-http-client')

const { globSource } = IpfsHttpClient
const ipfs = IpfsHttpClient()



let filename = 't.txt'

// function encoder(filename){
//     // let base64File = fs.readFileSync(filename, 'base64')
//     let base64File = fs.readFile(filename, 'base64', (err, data)=>{
//         if (err) throw err;
//     });
    // let file = {
    //     path: filename,
    //     content: base64File
    // }

//     return file
// }

// let controller = new AbortController();
// setTimeout(()=> controller.abort(), 1000);

async function addipfs(filename){
    // let file = {
    //     path: filename,
    //     content: filename
    // }

    const addOptions = {
        timeout: 10000
    }

    try{
        // const file = await ipfs.add(globSource(filename, {recursive: true}), addOptions);
        // var base64Data = fs.readFileSync(filename, 'base64')
        const file = await ipfs.add(fs.createReadStream(filename), addOptions)
        console.log(file)
    } catch(err) {
        console.log(err)
    }
    
}


// const BufferList = require('bl/Bufferlist')

async function getipfs(cid, filename){
    for await (const file of ipfs.get(cid)) {
        console.log(file.path)

        if (!file.content) continue;

        const content = []

        for await (const chunk of file.content) {
            content.push(chunk)
        }
        // var buf = Buffer.from(content)
        // fs.createWriteStream(filename).write(content[0].toString())

        // var base64 = Buffer.from(content.toString(), 'binary').toString('base64');

        // fs.writeFileSync(filename, content)
        
        var buffers = []

        content.forEach(bufferlist => {
            buffers.push(bufferlist._bufs[0])
            // console.log(bufferlist._bufs.length)
        });

        var buf = Buffer.concat(buffers)

        // console.log(buf.toString('base64'))
        fs.writeFileSync(filename, buf, 'base64')
        // console.log(content)
        // console.log(content[0])
    }
}

// async function getipfsFromWeb(cid, filename){
//     var request = require('request').defaults({ encoding: null });

//     request.get('http://127.0.0.1:8080/ipfs/'+cid, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
            
//             fs.writeFileSync(filename, data)
//             // console.log(data);
//         }
//     });
// }

const cid = 'Qmcmoazqm1CVAgwPkRBwiM8WkFKh7cmmNN7eaahXX9eHjs'
// addipfs('./images/RA.bmp')
// addipfs('t.txt')
getipfs(cid, 'ipfs_return.png')
// getipfsFromWeb(cid, 'ipfs_return.png')

// https://github.com/ipfs-inactive/interface-js-ipfs-core/blob/master/SPEC/FILES.md#get