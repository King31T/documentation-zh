# eth_getWork

*返回当前区块的哈希。*

**参数**  

无

**返回值**  

Array - 包含以下属性的数组：

| 索引 | 数据类型      | 描述       |
| :---- | :------------- | :---------------- |
| 1     | DATA, 32 Bytes | 区块哈希 |
| 2     | DATA           | 未使用            |
| 3     | DATA           | 未使用            |

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getWork",

	"params": [],

	"id": 73

}'

```

结果

```json

{

	"jsonrpc": "2.0",

	"id": 73,

	"result": ["0x00000000020e73915413df0c816e327dc4b9d17069887aef1fff0e854f8d9ad0", null, null]

}

```
