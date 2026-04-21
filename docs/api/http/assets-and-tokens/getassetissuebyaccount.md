# getassetissuebyaccount

TRON API 方法，用于查询账户发行的 TRC10 代币信息。TRC10 代币是 TRON 的原生资产，可以直接在区块链上发行，无需智能合约。

## HTTP 请求

`POST /wallet/getassetissuebyaccount`

## 支持的路径

- `/wallet/getassetissuebyaccount`

## 参数

- address — 代币发行者的账户地址
- visible — 可选布尔值。为 true 时地址为 base58 格式；为 false 时为十六进制格式。默认为 false。

## 返回值

- assetIssue — TRC10 代币信息对象数组，每个对象包含：
  - id — 唯一代币 ID
  - owner_address — 代币发行者地址
  - name — 十六进制格式的代币名称
  - abbr — 十六进制格式的代币缩写
  - total_supply — 代币总供应量
  - trx_num — 兑换比例中的 TRX 数量
  - precision — 代币小数位数
  - num — 兑换比例中的代币数量
  - start_time — 代币销售开始时间戳
  - end_time — 代币销售结束时间戳
  - description — 十六进制格式的代币描述
  - url — 十六进制格式的代币网站 URL
  - free_asset_net_limit — 每个账户的免费带宽分配
  - public_free_asset_net_limit — 公共免费带宽总限制
  - frozen_supply — 冻结代币供应信息数组

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getassetissuebyaccount \
  --header 'Content-Type: application/json' \
  --data '
{
  "address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "visible": true
}
'
```

### 返回

```json
{
  "assetIssue": [
    {
      "id": "<string>",
      "owner_address": "<string>",
      "name": "<string>",
      "abbr": "<string>",
      "total_supply": 123,
      "trx_num": 123,
      "precision": 123,
      "num": 123,
      "start_time": 123,
      "end_time": 123,
      "description": "<string>",
      "url": "<string>",
      "free_asset_net_limit": 123,
      "public_free_asset_net_limit": 123,
      "frozen_supply": "<array>"
    }
  ]
}
```

## 使用场景

- 查询特定账户发行的所有 TRC10 代币。
- 构建显示发行者创建的所有代币的代币投资组合视图。
- 审计给定账户的代币发行历史。
- 在钱包和浏览器中显示发行者级别的代币信息。
- 出于合规目的验证代币所有权和发行详情。
