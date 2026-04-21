# net_peerCount

*返回当前连接到客户端的对等节点数量。*

**参数**  

无

**返回**  

QUANTITY - 连接的对等节点数量的整数。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":64}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":"0x9"}

```
