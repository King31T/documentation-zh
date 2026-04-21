# unfreezebalancev2

TRON API 方法，用于从新质押机制中解质押 TRX。该方法释放之前使用 freezebalancev2 质押的 TRX 代币，启动 14 天等待期后代币才可提取。这是当前推荐的解质押方法。

## HTTP 请求

`POST /wallet/unfreezebalancev2`

## 支持的路径

- `/wallet/unfreezebalancev2`

## 参数

- owner_address — 拥有要解质押 TRX 的地址（十六进制格式）
- unfreeze_balance — 要解质押的 TRX 数量（单位：sun，1 TRX = 1,000,000 sun）
- resource — 要释放的资源类型（"BANDWIDTH" 或 "ENERGY"）
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
  --url https://api.shasta.trongrid.io/wallet/unfreezebalancev2 \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "unfreeze_balance": 1000000,
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

- 使用当前质押机制解质押 TRX。
- 启动 14 天解质押期，等待代币可提取。
- 通过减少质押数量管理带宽和能量资源分配。
- 灵活地解质押部分数量而非全部。
