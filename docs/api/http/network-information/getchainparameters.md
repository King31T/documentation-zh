# getchainparameters

TRON API 方法，用于检索当前区块链参数和配置设置。该方法提供对重要网络常量、费用、限制及其他控制 TRON 区块链运行的可配置参数的访问。

## HTTP 请求

`GET /wallet/getchainparameters`

## 支持的路径

- `/wallet/getchainparameters`

## 参数

该方法不需要任何参数。

## 返回值

- chainParameter — 区块链参数数组
  - key — 参数名称
  - value — 参数值
- 常见参数包括：
  - getMaintenanceTimeInterval — 维护周期间隔
  - getAccountUpgradeCost — 账户升级费用
  - getCreateAccountFee — 创建新账户的费用
  - getTransactionFee — 基础交易费用
  - getAssetIssueFee — 发行资产/代币的费用
  - getWitnessPayPerBlock — 每区块见证人奖励
  - getWitnessStandbyAllowance — 备用见证人津贴
  - getCreateNewAccountFeeInSystemContract — 系统合约账户创建费用
  - getCreateNewAccountBandwidthRate — 账户创建的带宽费率
  - getAllowCreationOfContracts — 是否允许合约创建
  - getRemoveThePowerOfTheGr — 治理参数
  - getEnergyFee — 能量费率
  - getExchangeCreateFee — 创建交易所的费用
  - getMaxCpuTimeOfOneTx — 每笔交易最大 CPU 时间
  - getAllowUpdateAccountName — 是否允许更新账户名
  - getAllowSameTokenName — 是否允许重复代币名称
  - getAllowDelegateResource — 是否允许资源委托
  - getTotalEnergyLimit — 网络总能量限制
  - getAllowTvmTransferTrc10 — TVM 是否可转移 TRC10 代币
  - getTotalEnergyCurrentLimit — 当前总能量限制
  - getAllowMultiSign — 是否允许多签
  - getAllowAdaptiveEnergy — 是否启用自适应能量
  - getUpdateAccountPermissionFee — 更新账户权限的费用
  - getMultiSignFee — 多签交易的费用

## 示例

### 请求

```shell
curl --request GET \
  --url https://api.shasta.trongrid.io/wallet/getchainparameters
```

### 返回

```json
{
  "chainParameter": [
    {
      "key": "getMaintenanceTimeInterval",
      "value": 21600000
    },
    {
      "key": "getAccountUpgradeCost",
      "value": 9999000000
    },
    {
      "key": "getCreateAccountFee",
      "value": 100000
    },
    {
      "key": "getTransactionFee",
      "value": 10
    },
    {
      "key": "getAssetIssueFee",
      "value": 1024000000
    },
    {
      "key": "getWitnessPayPerBlock",
      "value": 16000000
    },
    {
      "key": "getWitnessStandbyAllowance",
      "value": 115200000000
    },
    {
      "key": "getEnergyFee",
      "value": 140
    },
    {
      "key": "getAllowMultiSign",
      "value": 1
    }
  ]
}
```

## 使用场景

- 检索当前网络费用和限制，用于交易规划。
- 检查治理参数和网络设置。
- 了解应用开发的网络约束。
- 监控参数变更和网络升级。
