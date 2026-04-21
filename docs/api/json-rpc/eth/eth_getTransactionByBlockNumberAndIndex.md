# eth_getTransactionByBlockNumberAndIndex

*通过区块号和交易索引位置返回交易信息。*

**参数**

| 索引 | 数据类型     | 描述                                         |
| :---- | :------------ | :-------------------------------------------------- |
| 1     | QUANTITY\|TAG | 区块号，或字符串 "earliest"、"latest", |
| 2     | QUANTITY      | 交易索引位置                      |

**返回值**

object - 交易对象，如果未找到交易则返回 null。参见 [eth_getTransactionByBlockHashAndIndex](https://developers.tron.network/reference#eth_gettransactionbyblockhashandindex)

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getTransactionByBlockNumberAndIndex",

	"params": ["0xfb82f0", "0x0"],

	"id": 64

}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":null}

```
