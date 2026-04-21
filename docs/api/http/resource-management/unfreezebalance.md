# unfreezebalance

TRON API 方法，用于解冻之前为带宽或能量资源冻结的 TRX（已弃用方法）。该方法释放之前冻结的 TRX 代币，在锁定期到期后使其可以转账。这是旧版解质押机制；对于当前质押模型，请使用 unfreezebalancev2。

!!! note
    旧版解质押仅适用于旧版冻结。在主网上，新的旧版冻结已被禁用。只有当您的账户仍有旧版冻结余额时，才能使用 `wallet/unfreezebalance`。对于 V2 质押，请使用 `wallet/unfreezebalancev2`。

## HTTP 请求

`POST /wallet/unfreezebalance`

## 支持的路径

- `/wallet/unfreezebalance`

## 参数

- owner_address — 拥有要解冻的 TRX 的地址（十六进制格式）
- resource — 要释放的资源类型（"BANDWIDTH" 或 "ENERGY"）
- receiver_address — 可选的正在接收资源的地址。省略表示为自己解冻。如提供，必须与 owner_address 不同。
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- visible — 表示使用的地址格式的布尔值
- txID — 交易 ID 哈希
- raw_data — 原始交易数据对象
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/unfreezebalance \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "resource": "BANDWIDTH",
  "visible": false
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

- 解质押 TRX 使代币可再次转账（旧版方法）。
- 释放不再需要的带宽或能量资源（旧版方法）。
- 支持仍使用原始解质押机制的旧版应用。
- 从已弃用的解质押系统迁移到新的 unfreezebalancev2 方法。
