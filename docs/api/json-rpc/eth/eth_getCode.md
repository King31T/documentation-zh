# eth_getCode

*返回给定智能合约地址的运行时代码。*

**参数**

| 索引 | 数据类型      | 描述                           |
| :---- | :------------- | :------------------------------------ |
| 1     | DATA, 20 Bytes | 合约地址                      |
| 2     | QUANTITY\|TAG  | 目前仅支持 "latest" |

**返回值**

DATA - 给定地址的运行时代码。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getCode",

	"params": ["0x4170082243784DCDF3042034E7B044D6D342A91360", "latest"],

	"id": 64

}'

```

结果

```json

{"jsonrpc":"2.0","id":64,"result":"0x"}

```
