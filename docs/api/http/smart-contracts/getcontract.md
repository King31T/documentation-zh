# getcontract

TRON API 方法，用于检索 TRON 网络上已部署智能合约的详细信息。该方法提供全面的合约数据，包括字节码、ABI、部署信息和资源配置。

## HTTP 请求

`POST /wallet/getcontract`

## 支持的路径

- `/wallet/getcontract`

## 参数

- value — 十六进制格式的智能合约地址

## 返回值

- bytecode — 十六进制格式的已编译合约字节码
- name — 智能合约的可读名称
- origin_address — 部署合约的账户地址
- contract_address — 十六进制格式的合约地址
- abi — 定义合约方法和事件的应用程序二进制接口
- origin_energy_limit — 合约部署期间设置的最大能量限制
- consume_user_resource_percent — 合约执行时消耗的调用者资源百分比（0-100）
- code_hash — 合约字节码的唯一哈希标识符
- trx_hash — 原始合约部署交易的交易哈希

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getcontract \
  --header 'Content-Type: application/json' \
  --data '
{
  "value": "41a614f803b6fd780986a42c78ec9c7f77e6ded13c"
}
'
```

### 返回

```json
{
  "bytecode": "<string>",
  "name": "<string>",
  "origin_address": "<string>",
  "contract_address": "<string>",
  "abi": {},
  "origin_energy_limit": 123,
  "consume_user_resource_percent": 123,
  "code_hash": "<string>",
  "trx_hash": "<string>"
}
```

## 使用场景

- 检索已部署智能合约的完整信息。
- 获取合约 ABI 以构建用户界面和交互工具。
- 分析合约资源配置和部署详情。
- 验证合约字节码并与预期实现进行比较。
- 构建区块浏览器和合约验证工具。
- 了解合约资源消耗设置以进行优化。
