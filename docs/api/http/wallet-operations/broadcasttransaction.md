# broadcasttransaction

TRON API 方法，向 TRON 网络广播已签名的交易。该方法提交完整构建并签名的交易以供处理并纳入区块链。

## HTTP 请求

`POST /wallet/broadcasttransaction`

## 支持的路径

- `/wallet/broadcasttransaction`

## 参数

- raw_data — 原始交易数据对象，包含：
  - contract — 包含交易详情的合约对象数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间（毫秒）
  - timestamp — 交易创建时间戳
- raw_data_hex — 原始交易数据的十六进制表示
- signature — 交易签名数组（已签名交易必需）
- visible — 可选布尔参数，用于地址格式

## 返回值

- result — 布尔值，表示广播是否成功
- code — 广播失败时的错误码
- message — 广播失败时的十六进制错误消息
- txid — 广播成功时的交易 ID

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/broadcasttransaction \
  --header 'Content-Type: application/json' \
  --data '
{
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "amount": 1000,
            "owner_address": "41608f8da72479edc7dd921e4c30bb7e7cddbe722e",
            "to_address": "41e9d79cc47518930bc322d9bf7cddd260a0260a8d"
          },
          "type_url": "type.googleapis.com/protocol.TransferContract"
        },
        "type": "TransferContract"
      }
    ],
    "ref_block_bytes": "5e4b",
    "ref_block_hash": "47c9dc89341b300d",
    "expiration": 1591089627000,
    "timestamp": 1591089567635
  },
  "raw_data_hex": "0a025e4b220847c9dc89341b300d40f8fed3a2a72e5a66080112620a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412310a1541608f8da72479edc7dd921e4c30bb7e7cddbe722e121541e9d79cc47518930bc322d9bf7cddd260a0260a8d18e8077093afd0a2a72e",
  "signature": [
    "deadbeefcafebabefacec0011234abcd0badf00d9999777755553333222211114321dcba0f0ff0f013579bdf2468ace0987654321a2b3c4d5e6f7a8b9c0deeff1b"
  ],
  "visible": false
}
'
```

### 返回

```json
{
  "result": true,
  "code": "<string>",
  "message": "<string>",
  "txid": "<string>"
}
```

## 使用场景

- 将已签名的交易提交到 TRON 网络进行处理。
- 广播转账、智能合约交互和其他操作。
- 在离线创建并签名后完成交易的最终提交。
- 在钱包和 DApp 中实现交易提交功能。
