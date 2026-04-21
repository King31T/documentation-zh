# net_version

*返回创世区块的哈希值。*

**参数**  

无

**返回**  

String - 创世区块的哈希值。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":64}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":"0x2b6653dc"}

```
