# eth_getBlockTransactionCountByNumber

*通过区块号返回区块中的交易数量。*

**参数**

QUANTITY|TAG - 区块号的整数，或字符串 "earliest" 或 "latest"。

**返回值**

QUANTITY - 该区块中的交易数量的整数。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getBlockTransactionCountByNumber",

	"params": ["0xF96B0F"],

	"id": 1

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x23"}

```
