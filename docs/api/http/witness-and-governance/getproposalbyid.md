# getproposalbyid

TRON API 方法，通过提案 ID 检索特定治理提案的详细信息。

## HTTP 请求

`POST /wallet/getproposalbyid`

## 支持的路径

- `/wallet/getproposalbyid`

## 参数

- id — 要检索信息的提案 ID

## 返回值

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
  --url https://api.shasta.trongrid.io/wallet/getproposalbyid \
  --header 'Content-Type: application/json' \
  --data '{
  "id": 1
}'
```

### 返回

```json
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
```

## 使用场景

- 在治理界面中检索详细的提案信息。
- 查看提案状态和批准进度。
- 监控提案参数和投票结果。
- 构建治理仪表板和投票应用。
