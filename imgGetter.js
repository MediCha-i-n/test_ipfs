const fs = require('fs');
const IpfsHttpClient = require('ipfs-http-client')

const { globSource } = IpfsHttpClient
const ipfs = IpfsHttpClient()

async function getipfs(cid, filename){
    for await (const file of ipfs.get(cid)) {
        console.log(file.path)

        if (!file.content) continue;

        const content = []

        for await (const chunk of file.content) {
            content.push(chunk)
        }
        
        var buffers = []

        content.forEach(bufferlist => {
            buffers.push(bufferlist._bufs[0])
        });

        var buf = Buffer.concat(buffers)

        fs.writeFileSync(filename, buf, 'base64')
    }
}

const cid = 'QmeSgxdp8r98xeyJbbwqYrS8oZBuWZ1x1sRFKAn7Wgph97'
getipfs(cid, 'ipfs_return.png')
