# delegateresource

TRON API 方法，用于将资源委托给另一个账户。该方法允许您将通过质押 TRX 获得的带宽或能量资源委托给另一个地址，使该地址可以使用您的资源进行交易。

## HTTP 请求

`POST /wallet/delegateresource`

## 支持的路径

- `/wallet/delegateresource`

## 参数

- owner_address — 拥有要委托资源的地址（十六进制格式）
- receiver_address — 将接收委托资源的地址（十六进制格式）
- balance — 要委托的等值 TRX 资源数量（单位：sun）
- resource — 要委托的资源类型（"BANDWIDTH" 或 "ENERGY"）
- lock — 可选布尔值，用于锁定委托（默认：false）
- lock_period — 可选锁定期（秒），仅在 lock 为 true 时有效
- visible — 可选布尔值，用于指定地址格式（默认：false 表示十六进制格式）

## 返回值

- visible — 表示使用的地址格式的布尔值
- txID — 交易 ID 哈希
- raw_data — 包含委托合约详情的原始交易数据对象
- raw_data_hex — 原始交易数据的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/delegateresource \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
  "receiver_address": "41e9d79cc47518930bc322d9bf7cddd260a0260a8d",
  "balance": 1000000,
  "resource": "BANDWIDTH",
  "lock": false,
  "lock_period": 0,
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

- 与需要带宽或能量资源的其他账户共享资源。
- 在 DApp 中实现资源租赁或委托服务。
- 允许用户为其他账户赞助交易成本。
- 构建跨多个地址优化使用的资源管理系统。
