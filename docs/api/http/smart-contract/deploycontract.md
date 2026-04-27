# /wallet/deploycontract

部署智能合约。返回未签名的部署交易。

- 源码：`framework/src/main/java/org/tron/core/services/http/DeployContractServlet.java`
- Method：`POST`
- Contract：`protocol.CreateSmartContract`（`smart_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 部署者地址 |
| `name` | string | 否 | 合约名 |
| `abi` | json string | 否 | 合约 ABI（JSON 数组字符串） |
| `bytecode` | string | 是 | 合约字节码（hex） |
| `parameter` | string | 否 | 构造函数参数（hex，紧接 bytecode） |
| `fee_limit` | int64 | 是 | 交易费用上限（sun） |
| `call_value` | int64 | 否 | 调用合约带入的 TRX（sun） |
| `consume_user_resource_percent` | int64 | 是 | 用户承担能量百分比 0–100 |
| `origin_energy_limit` | int64 | 是 | 部署者承担能量上限 |
| `token_id` | int64 | 否 | 调用合约带入的 TRC10 token id |
| `call_token_value` | int64 | 否 | 调用合约带入的 TRC10 数量 |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "name": "MyContract",
  "abi": "[]",
  "bytecode": "608060",
  "fee_limit": 1000000000,
  "consume_user_resource_percent": 100,
  "origin_energy_limit": 10000000,
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`（contract 类型 `CreateSmartContract`）。

特殊：`Util.printTransactionToJSON` 检测到 `CreateSmartContract` 时，会在 transaction 顶层额外注入预测的合约地址 `contract_address`（hex；由 `owner_address` + nonce 确定，**不受 `visible` 影响**）。签名广播后该地址即生效。

响应示例：

```json
{
  "visible": true,
  "txID": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
  "contract_address": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
            "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
            "new_contract": {
              "origin_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
              "consume_user_resource_percent": 100,
              "name": "MyContract",
              "bytecode": "608060",
              "origin_energy_limit": 10000000
            }
          },
          "type_url": "type.googleapis.com/protocol.CreateSmartContract"
        },
        "type": "CreateSmartContract"
      }
    ],
    "ref_block_bytes": "1c9a",
    "ref_block_hash": "8d3a8c0e2c6e8b04",
    "fee_limit": 1000000000,
    "expiration": 1700000060000,
    "timestamp": 1700000000000
  },
  "raw_data_hex": "0a02..."
}
```
