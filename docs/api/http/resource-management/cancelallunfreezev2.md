# cancelallunfreezev2

TRON API 方法，用于取消账户在 Stake 2.0 机制下的所有解冻操作。该方法允许用户取消待处理的解冻请求，并将资源恢复到冻结状态。

## HTTP 请求

`POST /wallet/cancelallunfreezev2`

## 支持的路径

- `/wallet/cancelallunfreezev2`

## 参数

- owner_address — 希望取消所有解冻操作的账户地址
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含取消解冻合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/cancelallunfreezev2 \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "visible": true
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {},
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 取消所有待处理的解冻请求以保持质押资源
- 根据市场情况决定保持资源冻结状态
- 在 DeFi 协议中管理资源分配
- 实现动态质押策略
- 防止资源意外解冻
