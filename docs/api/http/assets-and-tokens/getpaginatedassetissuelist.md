# getpaginatedassetissuelist

TRON API 方法，用于检索 TRON 网络上已发行的所有 TRC10 代币的分页列表。该方法提供高效的分页支持，便于浏览大量代币而不会使响应过于庞大。

## HTTP 请求

`POST /wallet/getpaginatedassetissuelist`

## 支持的路径

- `/wallet/getpaginatedassetissuelist`
- `/walletsolidity/getpaginatedassetissuelist`

## 参数

- offset — 从开头跳过的记录数（分页的起始点）
- limit — 响应中返回的 TRC10 代币最大数量

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
  --url https://api.shasta.trongrid.io/wallet/getpaginatedassetissuelist \
  --header 'Content-Type: application/json' \
  --data '
{
  "offset": 0,
  "limit": 20
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

- 构建全面的 TRC10 代币列表和目录。
- 实现分页代币浏览器以提升用户体验。
- 创建分析代币分发模式的分析仪表板。
- 开发具有高效数据加载的代币发现平台。
- 构建需要浏览可用代币的投资组合追踪器。
- 为 TRC10 代币生态系统创建市场数据聚合器。
