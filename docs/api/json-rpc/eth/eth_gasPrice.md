# eth_gasPrice

返回当前能量的价格（单位：sun）。

**参数**  

无

**返回值**  

当前能量的价格（单位：sun）的整数。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc": "2.0", "id": 1, "method": "eth_gasPrice", "params": []}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x8c"}

```
