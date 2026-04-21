# eth_blockNumber

*返回最新区块的编号。*

**参数**  

无

**返回值**  

最新区块号。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":64}'

```

```json

{"jsonrpc":"2.0","id":64,"result":"0x20e0cf0"}

```
