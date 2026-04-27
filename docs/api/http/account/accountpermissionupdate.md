# /wallet/accountpermissionupdate

修改账户的 owner / witness / active 权限（多签配置）。

- 源码：`framework/src/main/java/org/tron/core/services/http/AccountPermissionUpdateServlet.java`
- Method：`POST`
- Contract：`protocol.AccountPermissionUpdateContract`（`account_contract.proto:44`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 账户地址 |
| `owner` | Permission | 是 | owner 权限（type=Owner，id=0；不能为空） |
| `witness` | Permission | 否 | 见证人权限（type=Witness，id=1）；只有 SR 账户填 |
| `actives` | repeated Permission | 是 | active 权限列表（type=Active，id 从 2 开始） |
| `permission_id` | int32 | 否 | 当前签名所用权限 ID |
| `visible` | bool | 否 | 地址格式 |

`Permission` 字段（`Tron.proto:262`）：

| 字段 | 类型 | 说明 |
|---|---|---|
| `type` | enum | `Owner` / `Witness` / `Active` |
| `id` | int32 | Owner=0，Witness=1，Active>=2 |
| `permission_name` | string | 权限名 |
| `threshold` | int64 | 触发阈值（所有 key.weight 之和达到该值才生效） |
| `operations` | bytes | active 权限可执行的合约类型位图（hex，32 字节） |
| `keys` | repeated Key | 签名 key（`{address, weight}`） |

示例（最小 owner 权限 + 1 个 active）：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "owner": {
    "type": 0, "id": 0, "permission_name": "owner",
    "threshold": 1,
    "keys": [{ "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv", "weight": 1 }]
  },
  "actives": [{
    "type": 2, "id": 2, "permission_name": "active",
    "threshold": 1,
    "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
    "keys": [{ "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv", "weight": 1 }]
  }],
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`。

响应示例：

```json
{
  "visible": true,
  "txID": "d5ec749ecc2a615399d8a6c864ea4c74ff9f8453eaa44d6b1e2f0b7b3e2f3b6a",
  "raw_data": {
    "contract": [
      {
        "parameter": {
          "value": {
              "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
              "owner": {
                  "type": "Owner",
                  "id": 0,
                  "permission_name": "owner",
                  "threshold": 1,
                  "keys": [
                      {
                          "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
                          "weight": 1
                      }
                  ]
              },
              "actives": [
                  {
                      "type": "Active",
                      "id": 2,
                      "permission_name": "active",
                      "threshold": 1,
                      "operations": "7fff1fc0033e0100000000000000000000000000000000000000000000000000",
                      "keys": [
                          {
                              "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
                              "weight": 1
                          }
                      ]
                  }
              ]
          },
          "type_url": "type.googleapis.com/protocol.AccountPermissionUpdateContract"
        },
        "type": "AccountPermissionUpdateContract"
      }
    ],
    "ref_block_bytes": "1c9a",
    "ref_block_hash": "8d3a8c0e2c6e8b04",
    "expiration": 1700000060000,
    "timestamp": 1700000000000
  },
  "raw_data_hex": "0a02..."
}
```

⚠️ 一旦生效，旧 owner 权限失效；务必先模拟验证。
