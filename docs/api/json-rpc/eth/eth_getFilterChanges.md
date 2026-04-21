# eth_getFilterChanges

*轮询过滤器，返回自上次轮询以来发生的日志数组。*

**参数**  

QUANTITY - 过滤器 ID。

**返回值**

- 对于使用 eth_newFilter 创建的过滤器，返回日志对象列表，每个日志对象包含以下参数：

| 字段            | 类型           | 描述                                                                                 |
| :--------------- | :------------- | :------------------------------------------------------------------------------------------ |
| removed          | TAG            | 如果日志由于链重组被移除则为 true。如果是有效日志则为 false。     |
| logIndex         | QUANTITY       | 日志在区块中的索引位置。如果是待处理日志则为 null。                  |
| transactionIndex | QUANTITY       | 创建日志的交易索引位置。如果是待处理日志则为 null。 |
| transactionHash  | DATA, 32Bytes  | 创建日志的交易哈希。                                         |
| blockHash        | DATA, 32 Bytes | 日志所在区块的哈希。如果是待处理日志则为 null。                             |
| blockNumber      | QUANTITY       | 日志所在区块的区块号。                                                     |
| address          | DATA, 32 Bytes | 日志来源的地址。                                                     |
| data             | DATA           | 包含一个或多个 32 字节的非索引日志参数。                             |
| topics           | DATA\[]        | 事件主题和索引参数。                                                          |

- 对于使用 eth_newBlockFilter 创建的过滤器，返回区块哈希（DATA, 32 Bytes）。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

    "jsonrpc": "2.0",

    "method": "eth_getFilterChanges",

    "params": [

        "0xc11a84d5e906ecb9f5c1eb65ee940b154ad37dce8f5ac29c80764508b901d996"

    ],

    "id": 71

}'

```

结果

```json

{

    "jsonrpc": "2.0",

    "id": 71,

    "error": {

        "code": -32000,

        "message": "filter not found",

        "data": "{}"

    }

}

```
