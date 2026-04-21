# eth_coinbase

返回当前节点的超级代表地址。

**参数**  

无

**返回值**  

DATA - 节点的超级代表地址。（注意：如果配置了多个超级代表地址，则返回第一个地址；如果没有有效地址或地址未生成任何区块，则返回错误，错误信息为"etherbase must be explicitly specified"。）

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc": "2.0", "id": 1, "method": "eth_coinbase", "params": []}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"error":{"code":-32000,"message":"etherbase must be explicitly specified","data":"{}"}}

```
