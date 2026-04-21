# eth_estimateGas

*通过 triggerConstantContract 获取所需的能量。*

**参数**  

object - 交易调用对象，包含以下项

| 项名称 | 数据类型      | 描述                                          |
| :-------- | :------------- | :--------------------------------------------------- |
| from      | DATA, 20 Bytes | 发送方地址                                |
| to        | DATA, 20 Bytes | 接收方地址                              |
| gas       | QUANTITY       | 未使用。                                              |
| gasPrice  | QUANTITY       | 未使用。                                              |
| value     | QUANTITY       | 随此交易发送的值的整数      |
| data      | DATA           | 方法签名和编码参数的哈希。 |

**返回值**  

使用的能量量。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"id": 1,

	"method": "eth_estimateGas",

	"params": [{

		"from": "0x41F0CC5A2A84CD0F68ED1667070934542D673ACBD8",

		"to": "0x4170082243784DCDF3042034E7B044D6D342A91360",

		"gas": "0x01",

		"gasPrice": "0x8c",

		"value": "0x01",

		"data": "0x70a08231000000000000000000000041f0cc5a2a84cd0f68ed1667070934542d673acbd8"

	}]

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x0"}

```
