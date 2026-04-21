# freezebalance

TRON API 方法，用于质押 TRX 以获取带宽或能量资源（已弃用方法）。该方法冻结 TRX 代币以获取带宽或能量资源，这些资源是交易执行所必需的。

!!! note
    旧版质押在主网已关闭。`wallet/freezebalance` 接口在主网已禁用，会返回错误：`{"Error":"class org.tron.core.exception.ContractValidateException : freeze v2 is open, old freeze is closed"}`。请改用当前质押方法：`wallet/freezebalancev2`。

## HTTP 请求

`POST /wallet/freezebalance`

## 支持的路径

- `/wallet/freezebalance`

## 参数

- owner_address — 拥有要冻结 TRX 的地址（十六进制格式）
- frozen_balance — 要冻结的 TRX 数量（单位：sun，1 TRX = 1,000,000 sun）
- frozen_duration — 冻结持续时间（最少 3 天）
- resource — 要获取的资源类型（"BANDWIDTH" 或 "ENERGY"）
- receiver_address — 可选的接收资源的地址。省略此字段表示为自己冻结。如提供，必须与 owner_address 不同。
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
  --url https://api.shasta.trongrid.io/wallet/freezebalance \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "frozen_balance": 1000000,
  "frozen_duration": 3,
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

- 质押 TRX 以获取免费交易带宽（旧版方法）。
- 冻结 TRX 以获取智能合约执行能量（旧版方法）。
- 支持仍使用原始质押机制的旧版应用。
- 从已弃用的质押系统迁移到新的 freezebalancev2 方法。
