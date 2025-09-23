## 通过 UART 进入 Fastboot 并修复小米盒子 5 (darkknight) 的 Boot 分区
本教程介绍当小米盒子 5  (darkknight) 的 **boot 分区损坏**导致无法正常启动时，如何借助 **UART + U-Boot 命令行**进入 **Fastboot 模式**，并重新刷写 boot 分区以恢复设备。
### 目录
- 前置要求
- Step 1: 
- Step 2: 
- Step 3: 
- Step 4: 
- Step 5: 
- Step 6: 
- Step 7: 
- Step 8: 

> [!IMPORTANT]
> 本操作涉及设备底层修复，存在较高风险，可能导致：
> - 设备永久性变砖
> - 硬件损坏
> - 失去官方保修资格
> 
> 请确保你已充分了解相关风险，并自愿承担责任。作者对操作产生的任何后果概不负责。



### 前置要求
**硬件准备**
- 小米盒子 5 (darkknight) 一台，并且已解除 Bootloader 锁定
- 一个可靠的 HDMI 免焊头（或其他可引出 RX/TX/GND 引脚的方式）
- 一条可靠的 USB-A 公对公数据线（用于连接盒子和电脑，若电脑拥有Type-C接口，也可使用USB-A公 to Type-C公数据线）。
- USB 转TTL串口模块（如 CP2102、CH340）
- 一台电脑：Windows / Linux / macOS 均可
- 电脑已安装下列工具：
  - 任意一个 Serial 客户端，如 [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) /  [WindTerm](https://github.com/kingToolbox/WindTerm)
  - [ADB & Fastboot 工具](https://developer.android.com/tools/releases/platform-tools)
  - **保证相关工具 / 驱动运行正常**

> [!NOTE]
>
> Bootloader 必须已解锁。这是在 Fastboot 中刷写分区的前提。
> 
> 如果你的机顶盒还没有解除 Bootloader 锁定，那么请在成功进入 Fastboot 模式后执行下列命令尝试解锁。
> ```shell
> fastboot flashing unlock
> ```
> 解锁成功的典型输出如下（总时间以实际情况为准）：
> ```shell
> C:\fastboot flashing unlock
>OKAY [  0.016s]
>Finished. Total time: 0.016s
> ```
>如果解锁失败，那么设备可能不符合条件，建议联系官方售后。
