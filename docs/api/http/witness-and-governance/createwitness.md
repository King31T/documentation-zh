# createwitness

TRON API 方法，创建一个将账户注册为 TRON 网络见证人（验证者）的交易。见证人通过委托权益证明（DPoS）共识机制参与区块生产和网络治理。

## HTTP 请求

`POST /wallet/createwitness`

## 支持的路径

- `/wallet/createwitness`

## 参数

- owner_address — 将成为见证人的账户地址。使用 visible: true 时为 base58 格式，visible: false 时为十六进制格式。
- url — 提供见证人信息的网站 URL（必须是有效的 URL）
- visible — 可选布尔值。为 true 时，地址为 base58 格式；为 false 时，地址为十六进制格式。默认为 true。

## 返回值

- visible — 布尔值，表示地址是否为可见格式
- txID — 见证人创建交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 包含见证人创建合约详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/createwitness \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "url": "https://mywitness.example.com",
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
    "timestamp": 123
  },
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 将账户注册为见证人，参与 TRON 网络治理。
- 设置区块生产能力，从网络中获取奖励。
- 建立公众形象，获得社区投票和信任。
- 竞争 27 个超级代表席位之一。
- 通过验证服务为网络安全和去中心化做贡献。
- 在 TRON 生态系统中建立声誉和公信力。
