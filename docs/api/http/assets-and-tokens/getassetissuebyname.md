# getassetissuebyname

TRON API 方法，用于通过代币名称检索 TRC10 代币信息。

## HTTP 请求

`POST /wallet/getassetissuebyname`

## 支持的路径

- `/wallet/getassetissuebyname`
- `/walletsolidity/getassetissuebyname`

## 参数

- value — 要检索信息的 TRC10 代币名称
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- assetIssue — 资产发行信息数组，包含：
  - owner_address — 代币创建者地址
  - name — 代币名称
  - abbr — 代币缩写
  - total_supply — 代币总供应量
  - trx_num — 兑换率中的 TRX 数量
  - num — 兑换率中的代币数量
  - start_time — ICO 开始时间
  - end_time — ICO 结束时间
  - description — 代币描述
  - url — 代币网站 URL
  - id — 代币 ID

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getassetissuebyname \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "54525854657374436f696e",
  "visible": false
}
'
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
      "num": 123,
      "start_time": 123,
      "end_time": 123,
      "description": "<string>",
      "url": "<string>",
      "id": "<string>"
    }
  ]
}
```

## 使用场景

- 检索 TRC10 代币的详细信息
- 在钱包和 DApp 中构建代币信息展示
- 验证代币真实性和属性
- 创建代币发现和分析工具
- 实现代币交易界面
