# createassetissue

TRON API 方法，用于创建在 TRON 网络上发行新 TRC10 代币的未签名交易。TRC10 代币是 TRON 的原生资产，无需部署智能合约即可创建。

## HTTP 请求

`POST /wallet/createassetissue`

## 支持的路径

- `/wallet/createassetissue`

## 参数

- owner_address — 将发行并拥有该代币的地址
- name — 代币全名（字符串）
- abbr — 代币符号或缩写（字符串）
- total_supply — 将发行的代币总量（整数）
- trx_num — 兑换率计算中使用的 TRX 数量（整数）
- num — 兑换率计算中使用的代币数量（整数）
- precision — 代币支持的小数位数（整数，0-6）
- start_time — ICO 开始时间戳（毫秒，整数）
- end_time — ICO 结束时间戳（毫秒，整数）
- description — 代币项目的详细描述（字符串）
- url — 代币项目的官方网站 URL（字符串）
- free_asset_net_limit — 代币发行方为代币操作提供的带宽（整数，可选）
- public_free_asset_net_limit — 此代币可用的公共带宽限制（整数，可选）
- frozen_supply — 冻结供应配置数组（可选）
- visible — 可选布尔参数。设置为 true 时，地址为 base58 格式。默认为 false。

## 返回值

- visible — 表示响应中使用的地址格式
- txID — 交易哈希
- raw_data — 原始交易数据，包括：
  - contract — 包含资产发行合约的数组
  - ref_block_bytes — 参考区块字节
  - ref_block_hash — 参考区块哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
  - fee_limit — 此交易允许的最大费用
- raw_data_hex — 原始交易的十六进制表示

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/createassetissue \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "TZ4UXDV5ZhNW7fb2AMSbgfAEZ7hWsnYS2g",
  "name": "MyToken",
  "abbr": "MTK",
  "total_supply": 1000000000000,
  "trx_num": 1,
  "num": 1000,
  "start_time": 1640995200000,
  "end_time": 1672531200000,
  "description": "A new TRC10 token for the TRON ecosystem",
  "url": "https://example.com",
  "precision": 6,
  "free_asset_net_limit": 1000000,
  "public_free_asset_net_limit": 1000000,
  "frozen_supply": [
    {
      "frozen_amount": 123,
      "frozen_days": 123
    }
  ],
  "visible": true
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {
    "contract": "<array>",
    "ref_block_bytes": "<string>",
    "ref_block_hash": "<string>",
    "expiration": 123,
    "timestamp": 123,
    "fee_limit": 123
  },
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 为项目和组织创建新的 TRC10 代币
- 发起首次代币发行（ICO）和代币销售
- 在钱包应用中构建代币发行功能
- 为 DeFi 平台开发自动化代币创建系统
