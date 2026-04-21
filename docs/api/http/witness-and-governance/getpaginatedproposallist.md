# getpaginatedproposallist

TRON API 方法，支持分页检索治理提案，允许高效浏览大量提案列表。

## HTTP 请求

`POST /wallet/getpaginatedproposallist`

## 支持的路径

- `/wallet/getpaginatedproposallist`

## 参数

- offset — 分页的起始索引（默认：0）
- limit — 返回的最大提案数量（默认：10，最大：100）

## 返回值

- proposals — 提案对象数组，每个对象包含：
  - proposal_id — 提案的唯一标识符
  - proposer_address — 创建提案的超级代表地址
  - parameters — 包含提案参数变更的对象
  - expiration_time — 提案过期时间戳
  - create_time — 提案创建时间戳
  - approvals — 已批准该提案的超级代表数组
  - state — 提案当前状态（PENDING、DISAPPROVED、APPROVED、CANCELED）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getpaginatedproposallist \
  --header 'Content-Type: application/json' \
  --data '
{
  "offset": 0,
  "limit": 10
}
'
```

### 返回

```json
{
  "proposals": [
    {
      "proposal_id": 123,
      "proposer_address": "<string>",
      "parameters": {},
      "expiration_time": 123,
      "create_time": 123,
      "approvals": [
        "<string>"
      ],
      "state": "PENDING"
    }
  ]
}
```

## 使用场景

- 在应用中实现分页提案浏览功能。
- 高效加载大型提案数据集。
- 构建支持分页的可扩展治理界面。
- 创建性能优化的提案探索工具。
