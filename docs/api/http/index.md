# HTTP API

!!! note
    尽管 TRON 通过将 HTTP API 的 Content-Type 设置为 application/json 来避免 XSS，但有些 API 没有输入验证。为了更好地保护用户数据安全，我们建议您在 UI 中使用 API 数据之前对其进行正确的编码，尤其是当参数 visible 等于 true 时。建议参考以下资源：[OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)。

大多数 HTTP API 通过 `wallet` 路径访问（默认端口 `8090`）。部分 API 还支持 `walletsolidity` 路径（默认端口 `8091`），该路径仅提供对**已确认链上数据**的访问。每个 API 页面均会说明其支持的路径。

## API 分类

- [账户管理](account-management/getaccount.md) - 账户查询、余额及多签验证
- [资产与代币](assets-and-tokens/createassetissue.md) - TRC-10 资产发行、转账及查询
- [区块操作](block-operations/getblock.md) - 按编号、ID 及范围查询区块
- [网络信息](network-information/getbandwidthprices.md) - 节点信息、链参数及价格
- [资源管理](resource-management/cancelallunfreezev2.md) - 能量、带宽、质押及委托
- [智能合约](smart-contracts/clearabi.md) - 合约部署、触发及查询
- [交易操作](transaction-operations/getpendingsize.md) - 交易查询及待处理池
- [钱包操作](wallet-operations/accountpermissionupdate.md) - 账户创建、转账及广播
- [超级代表与治理](witness-and-governance/createwitness.md) - 超级代表管理、投票、提案及奖励
