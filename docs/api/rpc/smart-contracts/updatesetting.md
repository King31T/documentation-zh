# updateSetting

**支持的 API**：`wallet`

TRON API 方法，更新智能合约的用户资源消耗百分比设置。此设置决定执行合约时应消耗合约调用者多少比例的资源（带宽和能量）。

```protobuf
rpc UpdateSetting (UpdateSettingContract) returns (TransactionExtention) {}
```
