# eth_getBalance

返回给定地址账户的余额。

**参数**

| 索引 | 数据类型      | 描述                    |
| :---- | :------------- | :----------------------------- |
| 1     | DATA, 20 Bytes | 要查询余额的地址。  |
| 2     | QUANTITY       | 目前仅支持 "latest" |

**返回值**

QUANTITY - 当前余额的整数（单位：sun）。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getBalance",

	"params": ["0x41f0cc5a2a84cd0f68ed1667070934542d673acbd8", "latest"],

	"id": 64

}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":"0x492780"}

```
