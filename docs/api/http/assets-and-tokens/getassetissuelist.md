# getassetissuelist

TRON API 方法，用于检索 TRON 网络上已发行的所有 TRC10 代币列表。

## HTTP 请求

`POST /wallet/getassetissuelist`

## 支持的路径

- `/wallet/getassetissuelist`
- `/walletsolidity/getassetissuelist`

## 参数

该方法无需参数。

## 返回值

- owner_address — 发行该代币的账户地址
- name — 代币全名
- abbr — 代币符号或缩写
- total_supply — 已发行的代币总量
- trx_num — 兑换率计算中使用的 TRX 数量
- precision — 代币支持的小数位数
- num — 兑换率计算中使用的代币数量（每 TRX 对应的代币数量）
- start_time — ICO 开始时间戳（代币销售开始时间）
- end_time — ICO 结束时间戳（代币销售结束时间）
- description — 代币项目的详细描述
- url — 代币项目的官方网站 URL
- id — 代币的唯一标识符
- free_asset_net_limit — 代币发行方为代币操作提供的带宽
- public_free_asset_net_limit — 此代币可用的公共带宽限制
- public_free_asset_net_usage — 当前已使用的公共带宽量
- public_latest_free_net_time — 最近一次使用免费带宽的时间戳

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getassetissuelist \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### 返回

```json
{
  "assetIssue": [
    {
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
      "id": "<string>",
      "free_asset_net_limit": 123,
      "public_free_asset_net_limit": 123,
      "public_free_asset_net_usage": 123,
      "public_latest_free_net_time": 123
    }
  ]
}
```

## 使用场景

- 构建全面的代币浏览器和市场概览仪表板
- 检索所有可用 TRC10 代币，用于钱包和交易所集成
- 分析 TRON 上完整的 TRC10 代币生态系统
- 为 DeFi 应用创建代币发现界面
