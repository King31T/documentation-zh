# updateBrokerage

TRON API 方法，创建更新见证人奖励佣金比率的交易。只有见证人才能调用此方法，以调整其与投票者分享区块生产奖励的方式。

## HTTP 请求

`POST /wallet/updateBrokerage`

## 支持的路径

- `/wallet/updateBrokerage`

## 参数

- owner_address — 更新佣金的见证人账户地址。使用 visible: true 时为 base58 格式，visible: false 时为十六进制格式。
- brokerage — 新的佣金百分比（0–100）；值越低，与投票者分享的奖励越多。
- visible — 可选布尔值。为 true 时，地址为 base58 格式；为 false 时，地址为十六进制格式。默认为 true。

## 返回值

- visible — 布尔值，表示地址是否为可见格式
- txID — 佣金更新交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 包含佣金更新合约详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/updateBrokerage \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "brokerage": 15,
  "visible": true
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {
    "contract": "<array>",
    "ref_block_bytes": "<string>",
    "ref_block_hash": "<string>",
    "expiration": 123,
    "timestamp": 123
  },
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 调整见证人奖励分享政策以吸引更多投票者。
- 设置与其他见证人相比具有竞争力的佣金比率。
- 根据市场条件实施动态奖励分享策略。
- 管理见证人经济，平衡盈利能力和投票者激励。
