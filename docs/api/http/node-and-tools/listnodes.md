# /wallet/listnodes

列出节点已发现的对等节点。

- 源码：`framework/src/main/java/org/tron/core/services/http/ListNodesServlet.java`
- Method：`GET` / `POST`
- 别名路径：`/net/listnodes`
- Response：`api.NodeList`

## 请求参数

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `visible` | bool | 否 | 文本字段格式（仅影响 `Address.host`：`true` 输出 UTF-8 IP 字符串，默认/`false` 输出 hex 字节） |

示例：

```bash
curl http://127.0.0.1:8090/wallet/listnodes
curl http://127.0.0.1:8090/wallet/listnodes?visible=true
```

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `nodes` | repeated Node | 已知节点 |
| `nodes[].address.host` | string | IP 地址；`visible=true` 为 UTF-8 文本（如 `"127.0.0.1"`），否则为对应字节的 hex（如 `"3132372e302e302e31"`） |
| `nodes[].address.port` | int32 | 端口 |

响应示例（`visible=true`）：

```json
{
  "nodes": [
    { "address": { "host": "127.0.0.1", "port": 18888 } }
  ]
}
```

响应示例（默认）：

```json
{
  "nodes": [
    { "address": { "host": "3132372e302e302e31", "port": 18888 } }
  ]
}
```

无节点时返回 `{}`。
