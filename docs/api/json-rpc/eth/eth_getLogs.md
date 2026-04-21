# eth_getLogs

*返回与给定过滤器对象匹配的所有日志数组。*

**参数**  

Object - 过滤选项，包括以下字段：

| 字段     | 类型                  | 描述                                                                                                                      |
| :-------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| fromBlock | QUANTITY\|TAG         | （可选，默认："latest"）整数区块号，或 "latest" 表示最后一个挖出的区块                                         |
| toBlock   | QUANTITY\|TAG         | （可选，默认："latest"）整数区块号，或 "latest" 表示最后一个挖出的区块                                         |
| address   | DATA\|Array, 20 Bytes | （可选）合约地址或日志应源自的地址列表。                                             |
| topics    | Array of DATA         | （可选）32 字节 DATA 主题数组。主题是顺序相关的。每个主题也可以是具有 "or" 选项的 DATA 数组。 |
| blockhash | DATA, 32 Bytes        | （可选）区块哈希                                                                                                            |

**返回值**

 参见 [eth_getFilterChanges](eth_getFilterChanges.md)。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"address":["cc2e32f2388f0096fae9b055acffd76d4b3e5532","E518C608A37E2A262050E10BE0C9D03C7A0877F3"],"fromBlock":"0x989680","toBlock":"0x9959d0","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",null,["0x0000000000000000000000001806c11be0f9b9af9e626a58904f3e5827b67be7","0x0000000000000000000000003c8fb6d064ceffc0f045f7b4aee6b3a4cefb4758"]]}],"id":1}'

```

结果

```json

{

    "jsonrpc": "2.0",

    "id": 71,

    "result": []

}

```
