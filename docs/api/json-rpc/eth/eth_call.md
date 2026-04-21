# eth_call

*立即执行消息调用，而不在区块链上创建交易。*

**参数**

1\. Object - 交易调用对象，包含以下项。

| 项名称 | 数据类型      | 描述                                                   |
| :-------- | :------------- | :------------------------------------------------------------ |
| from      | DATA, 20 Bytes | 调用者地址。十六进制格式地址，去掉前缀 "41"    |
| to        | DATA, 20 Bytes | 合约地址。十六进制格式地址，去掉前缀 "41" |
| gas       | QUANTITY       | 不支持。值为 0x0                               |
| gasPrice  | QUANTITY       | 不支持。值为 0x0                               |
| value     | QUANTITY       | 随此交易发送的 TRX 数量，单位是 sun，以十六进制编码。默认值：0x0                               |
| data      | DATA           | 方法签名和编码参数的哈希。          |

2\. QUANTITY|TAG - 目前仅支持 "latest"。

**返回值**

DATA - 执行的合约函数的返回值。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_call",

	"params": [{

		"from": "0xF0CC5A2A84CD0F68ED1667070934542D673ACBD8",

		"to": "0x70082243784DCDF3042034E7B044D6D342A91360",

		"gas": "0x0",

		"gasPrice": "0x0",

		"value": "0x0",

		"data": "0x70a08231000000000000000000000041f0cc5a2a84cd0f68ed1667070934542d673acbd8"

	}, "latest"],

	"id": 1

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x"}

```
