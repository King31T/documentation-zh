# getapprovedlist

TRON API 方法，返回签署（批准）特定已签名交易的地址列表。提交完整的已签名交易对象后，该接口从签名中解析出批准者地址。

## HTTP 请求

`POST /wallet/getapprovedlist`

## 支持的路径

- `/wallet/getapprovedlist`

## 参数

- txID — 交易 ID（哈希）。
- raw_data — 原始交易对象。
- raw_data_hex — 十六进制格式的原始交易。
- signature — 65 字节十六进制签名数组。
- visible — 可选布尔值。为 true 时，raw_data 中的地址使用 base58；为 false 时使用十六进制。默认为 false。

## 返回值

- approved_list — 从签名中恢复的地址数组（十六进制）
- transaction — 返回的交易载荷及验证结果

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getapprovedlist \
  --header 'Content-Type: application/json' \
  --data '
{
  "txID": "4ad97d49409cfff338d2f9e71d4019c70e82030b52e15e208b1808f2f3ea782e",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "data": "a9059cbb0000000000000000000000415d4a41a3b0cdda5c03df72b38a20aa1b88777c7500000000000000000000000000000000000000000000000000000000f9cd95c0",
            "owner_address": "41cf2e99409d2a9a9190197ab0bff35ca87818c41e",
            "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c"
          },
          "type_url": "type.googleapis.com/protocol.TriggerSmartContract"
        },
        "type": "TriggerSmartContract"
      }
    ],
    "ref_block_bytes": "68bd",
    "ref_block_hash": "bc830d2c09fa23d1",
    "expiration": 1761952567698,
    "fee_limit": 225000000,
    "timestamp": 1761952507695
  },
  "raw_data_hex": "0a0268bd2208bc830d2c09fa23d14092a3bae4a3335aae01081f12a9010a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412740a1541cf2e99409d2a9a9190197ab0bff35ca87818c41e121541a614f803b6fd780986a42c78ec9c7f77e6ded13c2244a9059cbb0000000000000000000000415d4a41a3b0cdda5c03df72b38a20aa1b88777c7500000000000000000000000000000000000000000000000000000000f9cd95c070afceb6e4a3339001c0f4a46b",
  "signature": [
    "c99cdc8af6f47dc65a75aa0c6da1c5be8510736e581043162c3e8525c6e0ed8f592adaa74ba250136ea6e1fb125b3d3d024ac6abd3e24c28097d66a8e2a0c0aa01"
  ],
  "visible": false
}
'
```

### 返回

```json
{
  "result": {},
  "approved_list": [
    "<string>"
  ],
  "transaction": {}
}
```

## 使用场景

- 验证哪些地址签署了一笔交易
- 审计多签工作流
- 构建显示交易批准者的钱包 UI
