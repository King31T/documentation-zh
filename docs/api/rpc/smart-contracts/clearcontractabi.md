# clearContractABI

**支持的 API**：`wallet`

TRON API 方法，清除（删除）智能合约的 ABI（应用程序二进制接口）信息。此操作从区块链中删除合约的 ABI 数据，使合约函数不易被发现，但在知道函数签名的情况下仍可执行。

```protobuf
rpc ClearContractABI (ClearABIContract) returns (TransactionExtention) {}
```
