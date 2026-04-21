# eth_protocolVersion

*返回 java-tron 区块版本。*

**参数**  

无

**返回值**  

String - 当前 java-tron 区块版本

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_protocolVersion","params":[],"id":64}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":"0x16"}

```
