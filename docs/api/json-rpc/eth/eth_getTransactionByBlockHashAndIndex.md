# eth_getTransactionByBlockHashAndIndex

*通过区块哈希和交易索引位置返回交易信息。*

**参数**

| 索引 | 数据类型      | 描述                    |
| :---- | :------------- | :----------------------------- |
| 1     | DATA, 32 Bytes | 区块哈希                |
| 2     | QUANTITY       | 交易索引位置 |

**返回值**

object - 交易对象，如果未找到交易则返回 null。交易包含以下项。

| 项名称        | 数据类型      | 描述                                             |
| :--------------- | :------------- | :------------------------------------------------------ |
| blockHash        | DATA, 32 Bytes | 交易所在区块的哈希        |
| blockNumber      | QUANTITY       | 交易所在区块的区块号             |
| from             | DATA, 20 Bytes | 发送方地址                                   |
| gas              | QUANTITY       | 未使用。                                                 |
| gasPrice         | QUANTITY       | 能量价格                                            |
| hash             | DATA, 32 Bytes | 交易哈希                                 |
| input            | DATA           | 随交易发送的数据                |
| nonce            | QUANTITY       | 未使用                                                  |
| to               | DATA, 20 Bytes | 接收方地址                                 |
| transactionIndex | QUANTITY       | 交易在区块中的索引位置 |
| value            | QUANTITY       | 转账金额（单位：sun）                                |
| v                | QUANTITY       | ECDSA 恢复 id                                       |
| r                | DATA, 32 Bytes | ECDSA 签名 r                                       |
| s                | DATA, 32 Bytes | ECDSA 签名 s                                       |

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getTransactionByBlockHashAndIndex",

	"params": ["00000000020ef11c87517739090601aa0a7be1de6faebf35ddb14e7ab7d1cc5b", "0x0"],

	"id": 64

}'

```

结果

```json

{

	"jsonrpc": "2.0",

	"id": 64,

	"result": {

		"blockHash": "0x00000000020ef11c87517739090601aa0a7be1de6faebf35ddb14e7ab7d1cc5b",

		"blockNumber": "0x20ef11c",

		"from": "0xb4f1b6e3a1461266b01c2c4ff9237191d5c3d5ce",

		"gas": "0x0",

		"gasPrice": "0x8c",

		"hash": "0x8dd26d1772231569f022adb42f7d7161dee88b97b4b35eeef6ce73fcd6613bc2",

		"input": "0x",

		"nonce": null,

		"r": "0x6212a53b962345fb8ab02215879a2de05f32e822c54e257498f0b70d33825cc5",

		"s": "0x6e04221f5311cf2b70d3aacfc444e43a5cf14d0bf31d9227218efaabd9b5a812",

		"to": "0x047d4a0a1b7a9d495d6503536e2a49bb5cc72cfe",

		"transactionIndex": "0x0",

		"type": "0x0",

		"v": "0x1b",

		"value": "0x203226"

	}

}

```
