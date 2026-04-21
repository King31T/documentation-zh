# unDelegateResource

**支持的 API**：`wallet`

TRON API 方法，从另一个地址撤销委托的带宽或能量资源。该方法允许收回之前通过 delegateresource 委托给另一个账户的资源，使这些资源重新可供自己的账户使用。

```protobuf
rpc UnDelegateResource (UnDelegateResourceContract) returns (TransactionExtention) {}
```
