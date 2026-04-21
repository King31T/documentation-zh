# getnextmaintenancetime

TRON API 方法，检索下一个计划维护窗口的时间戳。维护期每 6 小时发生一次，在此期间见证人选举、奖励分配和其他网络治理更新将生效。

## HTTP 请求

`POST /wallet/getnextmaintenancetime`

## 支持的路径

- `/wallet/getnextmaintenancetime`

## 参数

该方法不需要任何参数。

## 返回值

- num — 下一个维护窗口的时间戳（Unix 纪元以来的毫秒数）

## 示例

### 请求

```shell
curl --request POST \
  --url https://api.shasta.trongrid.io/wallet/getnextmaintenancetime \
  --header 'Content-Type: application/json' \
  --data '{}'
```

### 返回

```json
{
  "num": 1704070800000
}
```

## 使用场景

- 在维护期前规划见证人操作和投票变更。
- 安排投票决策，使其在下一个选举周期生效。
- 为自动化系统构建维护时间表追踪功能。
- 协调网络治理活动与维护窗口。
- 计算见证人选举结果最终确定前的剩余时间。
