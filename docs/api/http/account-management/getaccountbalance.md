# getaccountbalance

TRON API 方法，用于检索特定账户的 TRX 余额及相关余额信息。该方法提供全面的余额数据，包括可用余额、冻结余额和委托资源。

## HTTP 请求

`POST /wallet/getaccountbalance`

## 支持的路径

- `/wallet/getaccountbalance`

## 参数

- account_identifier.address — 要查询的账户地址。使用 visible: true 时为 base58 格式，使用 visible: false 时为十六进制格式。
- block_identifier — 必填对象，用于指定查询的区块。需同时提供 32 字节哈希（64 个十六进制字符）及对应的区块编号。
- visible — 可选布尔值，用于指定地址格式。默认为 false（十六进制）。

## 返回值

- balance — 可用 TRX 余额（单位：sun，1 TRX = 1,000,000 sun）
- frozen — 冻结余额信息数组
  - frozen_balance — 冻结的 TRX 数量
  - expire_time — 冻结余额的到期时间戳
- delegated_frozenV2 — V2 质押的委托冻结余额信息
- undelegated_frozenV2 — V2 质押的非委托冻结余额信息

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getaccountbalance \
  --header 'Content-Type: application/json' \
  --data '
{
  "account_identifier": {
    "address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e"
  },
  "block_identifier": {
    "hash": "0000000004986736812cbf15ffbcdd229bd3d76a595db895719867cc2da3a5bd",
    "number": 77096758
  },
  "visible": false
}
'
```

### 返回

```json
{
  "balance": 123,
  "frozen": [
    {
      "frozen_balance": 123,
      "expire_time": 123
    }
  ],
  "delegated_frozenV2": [
    {
      "type": "<string>",
      "frozen_balance": 123
    }
  ],
  "undelegated_frozenV2": [
    {
      "type": "<string>",
      "unfreeze_amount": 123,
      "unfreeze_expire_time": 123
    }
  ]
}
```

## 使用场景

- 检查可用于交易和转账的 TRX 余额。
- 监控冻结余额和质押信息。
- 分析委托资源分配。
- 管理账户流动性和资源规划。
