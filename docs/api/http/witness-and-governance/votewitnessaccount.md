# votewitnessaccount

TRON API 方法，创建一个使用冻结 TRX 余额为见证人（验证者）投票的交易。投票是 TRON 委托权益证明（DPoS）治理系统的重要组成部分，有助于决定哪些见证人成为超级代表。

## HTTP 请求

`POST /wallet/votewitnessaccount`

## 支持的路径

- `/wallet/votewitnessaccount`

## 参数

- owner_address — 投票账户地址。使用 visible: true 时为 base58 格式，visible: false 时为十六进制格式。
- votes — 投票分配数组，每个元素包含：
  - vote_address — 要投票的见证人地址（visible: true 时为 base58；visible: false 时为以 41 开头的 21 字节十六进制地址）
  - vote_count — 分配给该见证人的票数
- visible — 可选布尔值。为 true 时，地址为 base58 格式；为 false 时，地址为十六进制格式。默认为 true。

## 返回值

- visible — 布尔值，表示地址是否为可见格式
- txID — 投票交易的唯一交易 ID
- raw_data — 原始交易数据，包含：
  - contract — 包含见证人投票合约详情的数组
  - ref_block_bytes — 用于交易验证的参考区块字节
  - ref_block_hash — 参考区块的哈希
  - expiration — 交易过期时间戳
  - timestamp — 交易创建时间戳
- raw_data_hex — 以十六进制格式编码的完整交易数据

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/votewitnessaccount \
  --header 'Content-Type: application/json' \
  --data '
{
  "owner_address": "THPvaUhoh2Qn2y9THCZML3H815hhFhn5YC",
  "votes": [
    {
      "vote_address": "TDdeM7G4HSxhn2MfovsiMWwXZkiFaHhjMB",
      "vote_count": 1000000
    },
    {
      "vote_address": "TAybtvPZCSj5kumiU4myD28xBy6WFtkgCu",
      "vote_count": 500000
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
    "timestamp": 123
  },
  "raw_data_hex": "<string>"
}
```

## 使用场景

- 通过为偏好的见证人投票参与 TRON 网络治理。
- 支持与您网络发展理念一致的见证人。
- 从与投票者分享利润的见证人处获得投票奖励。
- 影响哪些见证人成为前 27 名超级代表。
- 将投票权分散到多个见证人以实现多元化。
- 通过民主参与促进网络去中心化。
