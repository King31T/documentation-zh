# deploycontract

TRON API 方法，用于创建将新智能合约部署到 TRON 网络的交易。该方法使用所有必要参数准备部署交易，然后必须签名并广播以完成合约部署。

## HTTP 请求

`POST /wallet/deploycontract`

## 支持的路径

- `/wallet/deploycontract`

## 参数

- owner_address — 部署合约的账户地址（十六进制格式）
- abi — 以 JSON 字符串形式定义合约方法和事件的合约 ABI（应用程序二进制接口）
- bytecode — 十六进制格式的已编译合约字节码
- parameter — （可选）十六进制格式的构造函数参数编码
- call_value — （可选）部署期间转入合约的 TRX 数量（单位：SUN，1 TRX = 1,000,000 SUN）
- consume_user_resource_percent — （可选）合约调用时消耗的调用者资源百分比（0-100，默认 100）
- fee_limit — （可选）愿意为部署支付的最大能量费用（单位：SUN）
- origin_energy_limit — （可选）合约创建者为未来调用提供的能量限制
- name — （可选）合约的可读名称

## 返回值

- visible — 布尔值，表示地址是否为可读格式
- txID — 部署交易的唯一交易 ID
- raw_data — 包含所有部署参数的原始交易数据
- raw_data_hex — 以十六进制格式编码的原始交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/deploycontract \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "41b487cdb2d8dc7b2a8e5e7e7b4e3e8b8b8b8b8b",
  "abi": "[{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"}]",
  "bytecode": "608060405234801561001057600080fd5b5061012a806100206000396000f3fe6080604052",
  "parameter": "",
  "call_value": 0,
  "consume_user_resource_percent": 100,
  "fee_limit": 1000000000,
  "origin_energy_limit": 10000000,
  "name": "MyContract"
}
'
```

### 返回

```json
{
  "visible": true,
  "txID": "<string>",
  "raw_data": {},
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 将新智能合约部署到 TRON 区块链。
- 创建 TRC20 代币、NFT 合约和其他去中心化应用。
- 在部署期间设置合约资源限制和费用结构。
- 准备可以离线签名的部署交易以提高安全性。
- 构建部署工具和合约管理平台。
- 为 DApp 和服务建立智能合约基础设施。
