# freezebalancev2

TRON API 方法，使用新质押机制质押 TRX 以获取资源。该方法冻结 TRX 代币以获取带宽或能量资源，具有更高的灵活性，包括随时解冻资源的能力。

## HTTP 请求

`POST /wallet/freezebalancev2`

## 支持的路径

- `/wallet/freezebalancev2`

## 参数

- owner_address — 拥有要冻结 TRX 的地址（十六进制格式）
- frozen_balance — 要冻结的 TRX 数量（单位：sun，1 TRX = 1,000,000 sun）
- resource — 要获取的资源类型（"BANDWIDTH" 或 "ENERGY"）
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- visible — 表示使用的地址格式的布尔值
- txID — 交易 ID 哈希
- raw_data — 包含冻结合约详情的原始交易数据对象
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/freezebalancev2 \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "frozen_balance": 1000000,
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

- 使用新机制质押 TRX 以获取免费交易带宽。
- 冻结 TRX 以获取智能合约执行能量，灵活性更高。
- 利用无需等待期即可解冻资源的能力。
- 在钱包和 DApp 中实现现代 TRON 质押，实现更好的资源管理。
