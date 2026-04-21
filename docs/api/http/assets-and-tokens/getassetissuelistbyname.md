# getassetissuelistbyname

TRON API 方法，用于检索与指定名称模式匹配的 TRC10 代币列表。该方法允许按名称搜索代币，适用于发现具有相似或相关名称的资产。

## HTTP 请求

`POST /wallet/getassetissuelistbyname`

## 支持的路径

- `/wallet/getassetissuelistbyname`
- `/walletsolidity/getassetissuelistbyname`

## 参数

- value — 代币名称或模式。使用 visible: true 时提供纯文本；使用 visible: false 时提供十六进制编码的 UTF-8。
- visible — 可选布尔值。为 true 时，value 为纯文本；为 false 时为十六进制编码。默认为 true。

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
  - free_asset_net_limit — 免费带宽分配
  - public_free_asset_net_limit — 公共免费带宽限制
  - frozen_supply — 冻结代币供应详情

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getassetissuelistbyname \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "SEED",
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

- 按名称模式或部分名称搜索 TRC10 代币。
- 在生态系统中发现具有相似名称或主题的代币。
- 在应用中构建代币发现和搜索功能。
- 在创建新资产前验证代币名称以避免冲突。
- 为代币选择界面实现自动补全功能。
- 分析 TRON 网络中的代币命名模式和趋势。
