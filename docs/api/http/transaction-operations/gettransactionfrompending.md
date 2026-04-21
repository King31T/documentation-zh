# gettransactionfrompending

TRON API 方法，通过交易 ID 从内存池中检索特定的待处理交易。这允许应用程序检查未确认交易的状态和详情。

## HTTP 请求

`POST /wallet/gettransactionfrompending`

## 支持的路径

- `/wallet/gettransactionfrompending`

## 参数

- value — 要检索的待处理交易的交易 ID 哈希

## 返回值

- txID — 唯一交易标识符哈希
- raw_data — 原始交易数据，包含：
  - contract — 包含交易合约详情的数组
  - ref_block_bytes — 用于验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
  - fee_limit — 此交易允许的最大费用
- signature — 交易签名数组
- ret — 交易结果信息（如有）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/gettransactionfrompending \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "f34f1c799700a9d83b67fdcadd7be697010a8dbbcd520de4ac46a648e3e7ae3d"
}
'
```

### 返回

```json
{
  "txID": "f34f1c799700a9d83b67fdcadd7be697010a8dbbcd520de4ac46a648e3e7ae3d",
  "raw_data": {
    "contract": [
      {
        "type": "TransferContract",
        "parameter": {
          "type_url": "type.googleapis.com/protocol.TransferContract",
          "value": {}
        }
      }
    ],
    "ref_block_bytes": "6f80",
    "ref_block_hash": "1c9c4b8c43c5e0b1",
    "expiration": 1704067260000,
    "timestamp": 1704067200000,
    "fee_limit": 100000000
  },
  "signature": [
    "<string>"
  ],
  "ret": [
    {
      "contractRet": "SUCCESS"
    }
  ]
}
```

## 使用场景

- 通过 ID 检查特定待处理交易的状态。
- 检索未确认交易的详细信息进行验证。
- 构建监控待处理交易的交易追踪系统。
- 在自定义应用中确认之前验证交易参数。
- 为用户界面和通知实现交易状态轮询。
