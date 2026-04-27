# /wallet/getcontract

按合约地址获取合约元信息。返回 `SmartContract` 本体（含 deploy 时的 `bytecode`），但**不含运行时码 `runtimecode` 与 `contract_state`**。如需运行时信息，请用 [`/wallet/getcontractinfo`](getcontractinfo.md)。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetContractServlet.java`
- Method：`GET` / `POST`
- Response：`protocol.SmartContract`（`smart_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 合约地址 |
| `visible` | bool | 否 | 地址格式（响应中 `name` 为 proto `string`，不受 `visible` 影响） |

示例：

```json
{
  "value": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "visible": true
}
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `origin_address` | string | 部署者地址 |
| `contract_address` | string | 合约地址 |
| `abi` | ABI | 合约 ABI |
| `bytecode` | string(hex) | 合约 runtime 字节码 |
| `call_value` | int64 | 部署时附带的 TRX |
| `consume_user_resource_percent` | int64 | 用户承担能量百分比 |
| `name` | string | 合约名 |
| `origin_energy_limit` | int64 | 部署者能量上限 |
| `code_hash` | string(hex) | 字节码哈希 |
| `trx_hash` | string(hex) | 部署交易哈希 |
| `version` | int32 | 版本 |

响应示例：

```json
{
  "origin_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "abi": {
    "entrys": [
      {
        "name": "transfer",
        "type": "Function",
        "inputs": [
          { "name": "to", "type": "address" },
          { "name": "value", "type": "uint256" }
        ],
        "outputs": [{ "type": "bool" }],
        "stateMutability": "Nonpayable"
      }
    ]
  },
  "bytecode": "608060...",
  "consume_user_resource_percent": 100,
  "name": "MyContract",
  "origin_energy_limit": 10000000,
  "code_hash": "abc123...",
  "trx_hash": "d5ec749e..."
}
```

不存在返回 `{}`。
