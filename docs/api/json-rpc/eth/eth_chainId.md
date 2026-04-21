# eth_chainId

*返回 TRON 网络的 chainId，即创世区块哈希的最后四个字节。*

**参数**  

无

**返回值**  

DATA - TRON 网络的 chainId

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":79}'

```

结果

```json

{"jsonrpc":"2.0","id":79,"result":"0x2b6653dc"}

```
