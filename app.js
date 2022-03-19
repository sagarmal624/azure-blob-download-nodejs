const express = require('express');
const { BlobServiceClient } = require('@azure/storage-blob');
const app = express();
const port = 8000;
app.listen(port,()=> {
console.log('listen port 8000');
})
app.get('/hello_world', (req,res)=>{
main()
.then(() => console.log('Done'))
.catch((ex) => console.log(ex.message));
res.send('Hello World');
})

async function main() {
    console.log('Azure Blob storage v12 - JavaScript quickstart sample');
const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);
const downloadBlockBlobResponse = await blockBlobClient.download(0);
console.log(
  "\t",
  await streamToText(downloadBlockBlobResponse.readableStreamBody)
);
}
async function streamToText(readable) {
  readable.setEncoding('utf8');
  let data = '';
  for await (const chunk of readable) {
    data += chunk;
  }
  return data;
}