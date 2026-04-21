# eth_getStorageAt

*返回给定地址的存储位置的值。可用于获取合约中变量的值。*

**参数**

| 索引 | 数据类型      | 描述                            |
| :---- | :------------- | :------------------------------------- |
| 1     | DATA, 20 Bytes | 地址                                |
| 2     | QUANTITY       | 存储位置的整数 |
| 3     | QUANTITY\|TAG  | 目前仅支持 "latest"        |

**返回值**

DATA - 该存储位置的值。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getStorageAt",

	"params": ["0xE94EAD5F4CA072A25B2E5500934709F1AEE3C64B", "0x29313b34b1b4beab0d3bad2b8824e9e6317c8625dd4d9e9e0f8f61d7b69d1f26", "latest"],

	"id": 1

}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x0000000000000000000000000000000000000000000000000000000000000000"}

```
