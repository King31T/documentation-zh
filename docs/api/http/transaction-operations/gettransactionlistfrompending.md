# gettransactionlistfrompending

TRON API 方法，检索内存池中当前所有待处理交易的列表。这允许应用程序监控等待被包含在区块中的未确认交易。

## HTTP 请求

`GET /wallet/gettransactionlistfrompending`

## 支持的路径

- `/wallet/gettransactionlistfrompending`

## 参数

该方法不需要任何参数。它返回当前 mempool 中的所有待处理交易。

## 返回值

- transactions — 待处理交易对象数组，每个对象包含：
  - txID — 唯一交易标识符哈希
  - raw_data — 原始交易数据，包括：
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
curl --request GET \
  --url https://api.shasta.trongrid.io/wallet/gettransactionlistfrompending
```

### 返回

```json
{
  "transactions": [
    {
      "txID": "f34f1c799700a9d83b67fdcadd7be697010a8dbbcd520de4ac46a648e3e7ae3d",
      "raw_data": {
        "contract": [
          {
            "type": "TransferContract",
            "parameter": {}
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
  ]
}
```

## 使用场景

- 实时监控待处理交易以追踪交易状态。
- 构建交易池分析和网络拥塞监控工具。
- 实现自定义 mempool 浏览器和待处理交易仪表板。
- 在确认前分析交易模式和费用结构。
- 为特定待处理交易或交易类型创建告警。
