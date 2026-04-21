# getenergyprices

TRON API 方法，用于检索 TRON 网络上当前的能量价格，显示智能合约执行的能量成本。

## HTTP 请求

`POST /wallet/getenergyprices`

## 支持的路径

- `/wallet/getenergyprices`
- `/walletsolidity/getenergyprices`

## 参数

该方法不需要任何参数。

## 返回值

- prices — 能量定价信息，包括当前费率和历史数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getenergyprices \
  --header 'Content-Type: application/json' \
  --data '{}'
```

## 使用场景

- 监控智能合约操作的当前能量成本
- 为 DApp 用户构建费用估算工具
- 通过能量定价分析网络拥塞情况
- 优化智能合约执行时机
- 创建具有成本意识的交易调度系统
