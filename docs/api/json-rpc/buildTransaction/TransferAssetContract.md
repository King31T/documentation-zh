# TransferAssetContract

**参数**  

对象 - 对象中的项如下：

|            |                |                                            |
| :--------- | :------------- | :----------------------------------------- |
| from       | DATA, 20 字节 | 交易发送方的地址   |
| to         | DATA, 20 字节 | 交易接收方的地址 |
| tokenId    | QUANTITY       | 代币 ID                                   |
| tokenValue | QUANTITY       | TRC10 代币的转账金额               |

**返回**

对象 - TransferAssetContract 交易或错误

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

    "method": "buildTransaction",

    "params": [

        {

            "from": "0xC4DB2C9DFBCB6AA344793F1DDA7BD656598A06D8",

            "to": "0x95FD23D3D2221CFEF64167938DE5E62074719E54",

            "tokenId": 1000016,

            "tokenValue": 20

        }

    ],

    "id": 44,

    "jsonrpc": "2.0"

}

'

```

结果

```json

{"jsonrpc":"2.0","id":44,"error":{"code":-32600,"message":"assetBalance must be greater than 0.","data":"{}"}}

```
