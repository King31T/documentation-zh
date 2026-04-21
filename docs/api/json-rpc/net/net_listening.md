# net_listening

*如果客户端正在主动监听网络连接，则返回 true。*

**参数**  

无

**返回**  

Boolean - 如果正在监听，则为 true，否则为 false。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":64}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":true}

```
