# /wallet/createassetissue

创建一个 TRC10 通证发行交易。

- 源码：`framework/src/main/java/org/tron/core/services/http/CreateAssetIssueServlet.java`
- Method：`POST`
- Contract：`protocol.AssetIssueContract`（`asset_issue_contract.proto:9`）

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `owner_address` | string | 是 | 发行方地址 |
| `name` | string | 是 | 通证名（hex 编码 UTF-8） |
| `abbr` | string | 否 | 缩写（hex 编码 UTF-8） |
| `total_supply` | int64 | 是 | 总发行量 |
| `frozen_supply` | repeated FrozenSupply | 否 | 冻结部分；元素 `{frozen_amount, frozen_days}` |
| `trx_num` | int32 | 是 | 兑换比例分母（trx_num TRX = num 通证） |
| `num` | int32 | 是 | 兑换比例分子 |
| `precision` | int32 | 否 | 精度 |
| `start_time` | int64 | 是 | 募集开始时间，毫秒 |
| `end_time` | int64 | 是 | 募集结束时间，毫秒 |
| `description` | string | 否 | 描述（hex UTF-8） |
| `url` | string | 否 | 项目 URL（hex UTF-8） |
| `free_asset_net_limit` | int64 | 否 | 单账户该通证免费带宽 |
| `public_free_asset_net_limit` | int64 | 否 | 通证公共免费带宽 |
| `permission_id` | int32 | 否 | 多签权限 ID |
| `visible` | bool | 否 | 地址、文本字段格式 |

示例：

```json
{
  "owner_address": "TGehVcNhud84JDCGrNHKVz9jEAVKUpbuiv",
  "name": "44494345",
  "abbr": "44494345",
  "total_supply": 1000000000,
  "trx_num": 1,
  "num": 1,
  "start_time": 1700000000000,
  "end_time": 1800000000000,
  "description": "44494345",
  "url": "68747470733a2f2f747261782e696f",
  "visible": true
}
```

## 响应

返回未签名 `protocol.Transaction`。上链后会得到一个 `assetIssueID`，可在 `TransactionInfo.assetIssueID` 中查看。

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
            "name": "44494345",
            "abbr": "44494345",
            "total_supply": 1000000000,
            "trx_num": 1,
            "num": 1,
            "start_time": 1700000000000,
            "end_time": 1800000000000,
            "description": "44494345",
            "url": "68747470733a2f2f747261782e696f"
          },
          "type_url": "type.googleapis.com/protocol.AssetIssueContract"
        },
        "type": "AssetIssueContract"
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

费用：发行 TRC10 需消耗一笔较高的 TRX 销毁（链参数 `getAssetIssueFee`，目前 1024 TRX）。
