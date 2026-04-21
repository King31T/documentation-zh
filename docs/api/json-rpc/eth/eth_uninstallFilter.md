# eth_uninstallFilter

*卸载给定 ID 的过滤器。当不再需要监视时应始终调用此方法。此外，如果过滤器在一段时间内未通过 eth_getFilterChanges 请求，则会超时。*

**参数**  

QUANTITY - 过滤器 ID。

**返回值**

 Boolean - 如果过滤器成功卸载则为 true，否则为 false。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

    "jsonrpc": "2.0",

    "method": "eth_uninstallFilter",

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

    "result": true

}

```
