# undelegateresource

TRON API 方法，用于撤销委托给另一地址的带宽或能量资源。该方法允许您收回之前使用 delegateresource 委托给另一账户的资源，使这些资源再次可供您自己的账户使用。

## HTTP 请求

`POST /wallet/undelegateresource`

## 支持的路径

- `/wallet/undelegateresource`

## 参数

- owner_address — 最初委托资源的地址（十六进制格式）
- receiver_address — 接收委托资源的地址（十六进制格式）
- balance — 要撤销委托的等值 TRX 资源数量（单位：sun，1 TRX = 1,000,000 sun）
- resource — 要撤销委托的资源类型（"BANDWIDTH" 或 "ENERGY"）
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
  --url https://api.shasta.trongrid.io/wallet/undelegateresource \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "receiver_address": "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0",
  "balance": 1000000,
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

- 收回委托给其他账户的带宽或能量资源。
- 在不再需要委托时管理资源分配。
- 在您控制的多个账户之间重新分配资源。
- 跨多个地址优化资源利用率。
