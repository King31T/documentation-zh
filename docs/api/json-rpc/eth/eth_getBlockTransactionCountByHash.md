# eth_getBlockTransactionCountByHash

*通过区块哈希返回区块中的交易数量。*

**参数**

DATA, 32 Bytes - 区块哈希

**返回值**

QUANTITY - 该区块中的交易数量的整数。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"id": 1,

	"method": "eth_getBlockTransactionCountByHash",

	"params": ["0x00000000020ef11c87517739090601aa0a7be1de6faebf35ddb14e7ab7d1cc5b"]

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x39"}

```
