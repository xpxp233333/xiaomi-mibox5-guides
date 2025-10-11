## 通过 UART 进入 Fastboot 并修复小米盒子 5 (darkknight) 的 Boot 分区
本教程介绍当小米盒子 5  (darkknight) 的 **boot 分区损坏**导致无法正常启动时，如何借助 **UART + U-Boot 命令行**进入 **Fastboot 模式**，并重新刷写 boot 分区以恢复设备。
### 目录
- [确认 Bootloader 解锁状态](#确认-bootloader-解锁状态)
- [前置要求](#前置要求)
- Step 1: 
- Step 2: 
- Step 3: 
- Step 4: 
- Step 5: 
- Step 6: 
- Step 7: 
- Step 8: 

> [!CAUTION]
> **在阅读本教程前，请先确认你的 Bootloader 解锁状态！**
> - 强烈建议在继续之前，先阅读下方的 [确认 Bootloader 解锁状态](#确认-bootloader-解锁状态) 章节。
> - 避免盲目购买工具后才发现无法继续。

> [!IMPORTANT]
> 本操作涉及设备底层修复，存在较高风险，可能导致：
> - 设备永久性变砖
> - 硬件损坏
> - 失去官方保修资格
> 
> 请确保你已充分了解相关风险，并自愿承担责任。作者对操作产生的任何后果概不负责。

### 确认 Bootloader 解锁状态
#### 1. 已解锁
- 如果你的设备之前已经解锁，那么只要还能进入 Fastboot 模式，就可以直接刷写分区。
- 后续步骤请直接跳到 [前置要求](#前置要求)

#### 2. 未解锁，但系统还能正常启动
- 请先通过 开发者选项 打开相关设置，然后在 Fastboot 模式下执行：
```shell
fastboot flashing unlock
```
#### 3. 未解锁，且系统已损坏
- 在成功进入 Fastboot 模式后执行下列命令尝试解锁：
```shell
fastboot flashing unlock
```
- 但请注意
  - 成功率 不确定，部分设备可能拒绝解锁
  - 如果解锁失败，将无法刷写 boot 分区。
  - 本教程无法保证修复效果，此时建议考虑联系官方售后或使用更底层的方法。

> [!NOTE]
> ### HyperOS 的特殊情况
> 在系统版本`2.0.7.0`中，只要开发者模式已打开，并且设备能进入 Fastboot 模式，就可以直接执行 `fastboot flashing unlock` 来进行解锁。
> #### 但需要注意：
> - 这可能是厂商的疏漏或临时实现方式，无法保证后续系统版本仍然可用。
> - 如果未来版本修补该方式，未解锁的设备可能无法依照本教程修复。

### 前置要求
**硬件准备**
- 小米盒子 5 (darkknight) 一台（最好已解除 Bootloader 锁定，未解锁的情况请[参考上文说明](#确认-bootloader-解锁状态)）
- 一个可靠的 HDMI 免焊头（或其他可引出 RX/TX/GND 引脚的方式）
- 一条可靠的 USB-A 公对公数据线（用于连接盒子和电脑，若电脑拥有Type-C接口，也可使用USB-A公 to Type-C公数据线）。
- USB 转TTL串口模块（如 CP2102、CH340）
- 一台电脑：Windows / Linux / macOS 均可
- 电脑已安装下列工具：
  - 任意一个 Serial 客户端，如 [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) /  [WindTerm](https://github.com/kingToolbox/WindTerm)
  - [ADB & Fastboot 工具](https://developer.android.com/tools/releases/platform-tools)
  - **保证相关工具 / 驱动运行正常**

### Test
<details>
<summary>查看 eMMC 特写</summary>
![eMMC closeup](./images/device/emmc.png)
</details>
