# eth_newFilter

*根据过滤选项创建一个过滤器对象，以便在状态更改（日志）时通知。*

**参数**  

Object - 过滤选项：

| 字段     | 类型                  | 描述                                                               |
| :-------- | :-------------------- | :------------------------------------------------------------------------ |
| fromBlock | QUANTITY\|TAG         | 整数区块号，或 "latest"                                         |
| toBlock   | QUANTITY\|TAG         | 整数区块号，或 "latest"                                         |
| address   | DATA\|Array, 20 Bytes | 合约地址或日志应源自的地址列表。 |
| topics    | Array of DATA         | 主题                                                                    |

**返回值**  

QUANTITY - 过滤器 ID。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_newFilter","params":[{"address":["cc2e32f2388f0096fae9b055acffd76d4b3e5532","E518C608A37E2A262050E10BE0C9D03C7A0877F3"],"fromBlock":"0x989680","toBlock":"0x9959d0","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",null,["0x0000000000000000000000001806c11be0f9b9af9e626a58904f3e5827b67be7","0x0000000000000000000000003c8fb6d064ceffc0f045f7b4aee6b3a4cefb4758"]]}],"id":1}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x2bab51aee6345d2748e0a4a3f4569d80"}

```
