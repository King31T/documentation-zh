# /wallet/getaccount

查询账户信息。

- 源码：`framework/src/main/java/org/tron/core/services/http/GetAccountServlet.java`
- Method：`GET` / `POST`
- 支持固化接口：`/walletsolidity/getaccount`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `address` | string | 是 | 账户地址；`visible=false` 为 hex（21 字节，0x41 前缀），`visible=true` 为 base58check |
| `visible` | bool | 否 | 地址、文本字段格式 |

POST 示例：

```json
{
  "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "visible": true
}
```

## 响应

返回 `protocol.Account`（见 `protocol/src/main/protos/core/Tron.proto:132`）。常用字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `address` | bytes | 账户地址 |
| `account_name` | bytes | 账户昵称 |
| `type` | enum | `Normal` / `AssetIssue` / `Contract` |
| `balance` | int64 | TRX 余额（sun，1 TRX = 1e6 sun） |
| `create_time` | int64 | 创建时间，毫秒 |
| `votes` | repeated Vote | 投票记录 |
| `frozen` | repeated Frozen | Stake 1.0 冻结（带宽） |
| `frozenV2` | repeated FreezeV2 | Stake 2.0 冻结 |
| `unfrozenV2` | repeated UnFreezeV2 | Stake 2.0 解冻中 |
| `account_resource` | AccountResource | 能量相关 |
| `asset` / `assetV2` | map\<string,int64\> | 持有的 TRC10 |
| `allowance` | int64 | 见证人未提取奖励 |
| `latest_opration_time` | int64 | 最近一次操作时间 |
| `owner_permission` / `witness_permission` / `active_permission` | Permission | 权限配置 |

响应示例：

```json
{
  "address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "balance": 1234567890,
  "create_time": 1600000000000,
  "latest_opration_time": 1700000000000,
  "frozenV2": [
    { "type": "ENERGY", "amount": 1000000000 }
  ],
  "asset_issued_name": "44494345"
}
```

账户不存在返回 `{}`。
