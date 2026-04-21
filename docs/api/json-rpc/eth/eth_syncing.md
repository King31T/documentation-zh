# eth_syncing

*返回一个包含节点同步状态数据的对象。*

**参数**  

无

**返回值**  

Object|Boolean, 包含同步状态数据的对象或 FALSE（当未同步时），对象中的项包括：

|               |          |                                                                                             |
| :------------ | :------- | :------------------------------------------------------------------------------------------ |
| startingBlock | QUANTITY | 导入开始的区块（只有在同步到达头部后才会重置） |
| currentBlock  | QUANTITY | 当前区块                                                                           |
| highestBlock  | QUANTITY | 预估的最高区块                                                                 |

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":64}'

```

结果

```json

{

	"jsonrpc": "2.0",

	"id": 64,

	"result": {

		"startingBlock": "0x20e76cc",

		"currentBlock": "0x20e76df",

		"highestBlock": "0x20e76e0"

	}

}

```
