# eth_getBlockByNumber

*通过区块号返回区块信息。*

**参数**

| 索引 | 数据类型     | 描述                                                                                    |
| :---- | :------------ | :--------------------------------------------------------------------------------------------- |
| 1     | QUANTITY\|TAG | 区块号的整数，或字符串 "earliest"、"latest"                                  |
| 2     | Boolean       | 如果为 true，则返回完整的交易对象；如果为 false，则仅返回交易的哈希。 |

**返回值**

object - 区块对象，如果未找到区块则返回 null。参见 [eth_getBlockByHash](https://developers.tron.network/reference#eth_getblockbyhash)

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getBlockByNumber",

	"params": ["0xF9CC56", true],

	"id": 1

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":null}

```
