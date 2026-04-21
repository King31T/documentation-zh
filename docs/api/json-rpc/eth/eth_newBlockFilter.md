# eth_newBlockFilter

*在节点中创建一个过滤器，以便在新区块到达时通知。*

**参数**  

无。

**返回值**  

QUANTITY - 过滤器 ID。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":1}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x2bab51aee6345d2748e0a4a3f4569d80"}

```
