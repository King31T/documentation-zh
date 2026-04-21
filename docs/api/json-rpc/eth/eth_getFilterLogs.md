# eth_getFilterLogs

*返回与给定过滤器 ID 匹配的所有日志数组。*

**参数**  

QUANTITY - 过滤器 ID。

**返回值**

参见 [eth_getFilterChanges](eth_getFilterChanges.md)。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

    "jsonrpc": "2.0",

    "method": "eth_getFilterLogs",

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
