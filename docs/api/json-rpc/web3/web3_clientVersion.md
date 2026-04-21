# web3_clientVersion

*返回当前客户端版本。*

**参数**  

无

**返回**  

String - 当前客户端版本

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc": "2.0", "id": 1, "method": "web3_clientVersion", "params": []}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"TRON/v4.3.0/Linux/Java1.8/GreatVoyage-v4.2.2.1-281-gc1d9dfd6c"}

```
