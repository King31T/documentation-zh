# /wallet/getcontractinfo

获取合约的完整运行时信息（包含 runtime code、状态、能量信息）。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetContractInfoServlet.java`
- Method：`GET` / `POST`
- Response：`protocol.SmartContractDataWrapper`（`smart_contract.proto`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `value` | string | 是 | 合约地址 |
| `visible` | bool | 否 | 地址格式 |

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
| `smart_contract` | SmartContract | 合约元信息（同 [`/wallet/getcontract`](getcontract.md)） |
| `runtimecode` | string(hex) | 链上运行时字节码（proto 字段名无下划线） |
| `contract_state` | ContractState | 合约状态：`energy_usage`、`energy_factor`、`update_cycle` |

响应示例：

```json
{
  "smart_contract": {
    "origin_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
    "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "abi": { "entrys": [] },
    "bytecode": "608060...",
    "consume_user_resource_percent": 100,
    "name": "MyContract",
    "origin_energy_limit": 10000000
  },
  "runtimecode": "6080...",
  "contract_state": {
    "energy_usage": 0,
    "energy_factor": 0,
    "update_cycle": 12345
  }
}
```

不存在返回 `{}`。
