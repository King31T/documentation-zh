# withdrawexpireunfreeze

TRON API 方法，用于提取已完成解质押等待期的 TRX 代币。该方法允许您领取之前通过 unfreezebalancev2 解质押并已过强制 14 天等待期的 TRX，使代币可进行转账。

## HTTP 请求

`POST /wallet/withdrawexpireunfreeze`

## 支持的路径

- `/wallet/withdrawexpireunfreeze`

## 参数

- owner_address — 拥有已过期解质押 TRX 的地址（十六进制格式）
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
  --url https://api.shasta.trongrid.io/wallet/withdrawexpireunfreeze \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
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

- 领取已完成 14 天解质押期的 TRX 代币。
- 使之前质押的 TRX 可以转账和交易。
- 完成通过 unfreezebalancev2 开始的解质押过程。
- 通过将质押的 TRX 转换回可转账代币来管理流动性。
