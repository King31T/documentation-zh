# listproposals

TRON API 方法，检索 TRON 网络上所有治理提案，提供当前和历史提案的全面视图。

## HTTP 请求

`POST /wallet/listproposals`

## 支持的路径

- `/wallet/listproposals`

## 参数

该方法不需要任何参数。

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
  --url https://api.shasta.trongrid.io/wallet/listproposals \
  --header 'Content-Type: application/json' \
  --data '{}'
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

- 在管理界面中显示所有治理提案。
- 构建全面的治理仪表板。
- 分析提案趋势和投票模式。
- 创建提案监控和通知系统。
