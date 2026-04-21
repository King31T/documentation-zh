# eth_getTransactionReceipt

*通过交易哈希返回交易信息：收据、交易费用、区块高度等。请参考 http api: [wallet/gettransactioninfobyid](https://developers.tron.network/reference#transaction-info-by-id)*

**参数**

DATA, 32 Bytes - 交易哈希

**返回值**

object - 交易收据对象，如果未找到收据则返回 null。交易收据包含以下项。

| 项名称         | 数据类型       | 描述                                                                               |
| :---------------- | :-------------- | :---------------------------------------------------------------------------------------- |
| transactionHash   | DATA, 32 Bytes  | 交易哈希                                                                   |
| transactionIndex  | QUANTITY        | 交易在区块中的索引位置                                   |
| blockHash         | DATA, 32 Bytes  | 交易所在区块的哈希                                          |
| blockNumber       | QUANTITY        | 交易所在区块的区块号                                               |
| from              | DATA, 20 Bytes  | 发送方地址                                                                     |
| to                | DATA, 20 Bytes  | 接收方地址                                                                   |
| cumulativeGasUsed | QUANTITY        | 区块中执行该交易时使用的总 gas 量             |
| gasUsed           | QUANTITY        | 该交易单独使用的 gas 量                                |
| contractAddress   | DATA, 20 Bytes  | 如果交易是合约创建，则为创建的合约地址，否则为 null。 |
| logs              | Array           | 该交易生成的日志对象数组                                   |
| logsBloom         | DATA, 256 Bytes | 用于轻客户端快速检索相关日志的布隆过滤器                          |
| root              | DATA            | 交易后的状态根（Byzantium 之前）                                    |
| status            | QUANTITY        | 1（成功）或 0（失败）                                                         |

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getTransactionReceipt",

	"params": ["c9af231ad59bcd7e8dcf827afd45020a02112704dce74ec5f72cb090aa07eef0"],

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

		"contractAddress": null,

		"cumulativeGasUsed": "0x646e2",

		"effectiveGasPrice": "0x8c",

		"from": "0x6eced5214d62c3bc9eaa742e2f86d5c516785e14",

		"gasUsed": "0x0",

		"logs": [],

		"logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",

		"status": "0x1",

		"to": "0x0697250b9d73b460a9d2bbfd8c4cacebb05dd1f1",

		"transactionHash": "0xc9af231ad59bcd7e8dcf827afd45020a02112704dce74ec5f72cb090aa07eef0",

		"transactionIndex": "0x6",

		"type": "0x0"

	}

}

```
