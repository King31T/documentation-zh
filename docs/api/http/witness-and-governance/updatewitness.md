# updatewitness

TRON API 方法，创建更新见证人账户 URL 的交易。允许见证人更新其在 TRON 网络治理系统中向投票者展示的公开信息和宣传内容。

## HTTP 请求

`POST /wallet/updatewitness`

## 支持的路径

- `/wallet/updatewitness`

## 参数

- owner_address — 要更新的见证人账户的十六进制地址
- update_url — 见证人的新 URL 字符串（最长 256 字节）
- visible — 布尔值，表示地址是否应为可见格式（Base58Check）

## 返回值

- visible — 布尔值，表示地址是否为可见格式
- txID — 见证人更新交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 包含见证人更新合约详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/updatewitness \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TPswDDCAWhJAZGdHPidFg5nEf8TkNToDX1",
  "update_url": "https://example.com/witness",
  "visible": true
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {
    "contract": [
      {
        "type": "UpdateWitnessContract",
        "parameter": {
          "type_url": "type.googleapis.com/protocol.UpdateWitnessContract",
          "value": {
            "owner_address": "<string>",
            "update_url": "<string>"
          }
        }
      }
    ],
    "ref_block_bytes": "<string>",
    "ref_block_hash": "<string>",
    "expiration": 123,
    "timestamp": 123
  },
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 更新见证人宣传 URL 和面向投票者的信息。
- 维护当前见证人联系信息和网站。
- 构建见证人管理仪表板和治理工具。
- 在应用中实现自动化的见证人信息更新。
- 为 TRON 治理参与者创建见证人档案管理系统。
