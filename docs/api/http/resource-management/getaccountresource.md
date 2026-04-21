# getaccountresource

TRON API 方法，用于查询账户的资源信息，包括带宽、能量和 TRON Power（投票权）。该接口提供全面的资源指标，用于管理交易成本和网络参与。

## HTTP 请求

`POST /wallet/getaccountresource`

## 支持的路径

- `/wallet/getaccountresource`

## 参数

- address — 十六进制格式（41 前缀）或 base58check 格式的账户地址
- visible — 地址是否为可读的 base58check 格式（可选，默认：true）

## 返回值

- freeNetUsed — 账户已使用的免费带宽
- freeNetLimit — 账户可用的免费带宽总量
- NetUsed — 通过质押获得的已用带宽量
- NetLimit — 通过质押获得的带宽总量
- TotalNetLimit — 网络带宽总限制
- TotalNetWeight — 带宽的网络总权重
- EnergyUsed — 账户消耗的能量
- EnergyLimit — 通过质押获得的能量总量
- TotalEnergyLimit — 网络能量总限制
- TotalEnergyWeight — 网络能量总权重
- tronPowerLimit — 可用于投票的 TRON Power
- tronPowerUsed — 已用于投票的 TRON Power
- totalTronPowerWeight — 网络 TRON Power 总权重
- assetNetUsed — TRC10 资产的带宽使用情况（数组）
- assetNetLimit — TRC10 资产的带宽限制（数组）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getaccountresource \
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
  "freeNetUsed": 0,
  "freeNetLimit": 5000,
  "NetUsed": 0,
  "NetLimit": 0,
  "TotalNetLimit": 43200000000,
  "TotalNetWeight": 84687233463517,
  "EnergyUsed": 0,
  "EnergyLimit": 0,
  "TotalEnergyLimit": 90000000000,
  "TotalEnergyWeight": 13369831825062,
  "tronPowerLimit": 0,
  "tronPowerUsed": 0,
  "totalTronPowerWeight": 0,
  "assetNetUsed": [
    {
      "key": "<string>",
      "value": 123
    }
  ],
  "assetNetLimit": [
    {
      "key": "<string>",
      "value": 123
    }
  ]
}
```

## 使用场景

- 监控账户带宽和能量消耗
- 根据可用资源计算交易费用
- 管理资源委托和质押策略
- 追踪用于网络治理的投票权（TRON Power）
- 分析 TRC10 代币转账的资源使用情况
- 构建显示资源可用性的钱包界面
