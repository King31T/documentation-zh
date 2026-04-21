# eth_accounts

*返回客户端拥有的地址列表。*

**参数**  

无

**返回值**  

空列表

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '

{"jsonrpc": "2.0", "id": 1, "method": "eth_accounts", "params": []}'

```

```json

{"jsonrpc":"2.0","id":1,"result":[]}

```
