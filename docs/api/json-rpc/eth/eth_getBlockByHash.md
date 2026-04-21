# eth_getBlockByHash

*通过哈希返回区块信息。*

**参数**

| 索引 | 数据类型      | 描述                                                                                    |
| :---- | :------------- | :--------------------------------------------------------------------------------------------- |
| 1     | DATA, 32 Bytes | 区块哈希                                                                                |
| 2     | Boolean        | 如果为 true，则返回完整的交易对象；如果为 false，则仅返回交易的哈希。 |

**返回值**

object - 区块对象，如果未找到区块则返回 null。区块包含以下项。

| 项名称        | 数据类型       | 描述                                                                                         |
| :--------------- | :-------------- | :-------------------------------------------------------------------------------------------------- |
| number           | QUANTITY        | 区块号                                                                                        |
| hash             | DATA, 32 Bytes  | 区块哈希                                                                                   |
| parentHash       | DATA, 32 Bytes  | 父区块哈希                                                                            |
| nonce            | QUANTITY        | 未使用                                                                                              |
| sha3Uncles       | DATA, 32 Bytes  | 区块中叔块数据的 SHA3                                                                |
| logsBloom        | DATA, 256 Bytes | 区块日志的布隆过滤器。                                                         |
| transactionsRoot | DATA, 32 Bytes  | 区块交易树的根                                                       |
| stateRoot        | DATA, 32 Bytes  | 区块最终状态树的根                                                       |
| receiptsRoot     | DATA, 32 Bytes  | 区块收据树的根                                                          |
| miner            | DATA, 20 Bytes  | 受益者地址，挖矿奖励将给予该地址                                |
| difficulty       | QUANTITY        | 该区块的难度整数                                                            |
| totalDifficulty  | QUANTITY        | 直到该区块的链的总难度整数                                       |
| extraData        | DATA            | 该区块的"额外数据"字段                                                                |
| size             | QUANTITY        | 该区块的大小（单位：字节）                                                             |
| gasLimit         | QUANTITY        | 该区块允许的最大 gas                                                               |
| gasUsed          | QUANTITY        | 该区块中所有交易使用的总 gas                                                |
| timestamp        | QUANTITY        | 区块创建时的 Unix 时间戳，单位为秒。                              |
| transactions     | Array           | 交易对象数组，或根据最后一个参数返回的 32 字节交易哈希。 |
| uncles           | Array           | 叔块哈希数组                                                                               |

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getBlockByHash",

	"params": ["0x0000000000f9cc56243898cbe88685678855e07f51c5af91322c225ce3693868", false],

	"id": 1

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":null}

```
