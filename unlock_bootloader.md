#  如何解除 小米盒子 5 (MOB2MB-5P) 的 Bootloader 锁定
本教程介绍如何解除 小米盒子 5 (MOB2MB-5P) 的 Bootloader 锁定。

> [!CAUTION]
> 解锁 Bootloader 会导致设备面临各类安全风险，并可能对设备造成不可预估的影响，可能导致：
> - 硬件损坏
> - 设备永久性变砖
> - 失去官方保修资格
> - 无法正常接收或安装 OTA 系统更新
> - 某些应用检测到设备已解锁后拒绝运行
> - DRM 失效 (例如 Widevine 安全等级降级)
> - 某些应用检测到 DRM 失效后拒绝播放受保护内容
> 
> 在非必要情况下不建议执行此操作，如你选择继续则代表你已经充分了解并可自行承担全部风险，并自愿承担责任，作者对此操作产生的任何后果概不负责。

## 目录
- [小米盒子信息与额外说明](#小米盒子信息与额外说明)
- [前置要求](#前置要求)
- [启用 ADB 调试 功能](#启用-adb-调试-功能)
- [连接电脑并授权 ADB](#连接电脑并授权-adb)
- [打开 OEM 解锁 选项](#打开-oem-解锁-选项)
- [进入 Fastboot 模式并解锁 Bootloader](#进入-fastboot-模式并解锁-bootloader)
- [额外内容: 重新锁定 Bootloader (可选)](#额外内容-重新锁定-bootloader-可选)

_※ 说明: 仅当你希望重新锁定 Bootloader 时，才需要阅读 [重新锁定 Bootloader](#额外内容-重新锁定-bootloader-可选) 章节。_

## 小米盒子信息与额外说明
### 小米盒子信息
| 项目 | 内容 |
|------|------|
| 设备型号 | 小米盒子 5 (MOB2MB-5P) |
| SoC | Amlogic S905X5M |
| 系统版本 | OS2.0.7.0 (UD2A.240505.001.W1.OS2.0.7.0.UZFAABX) |
| Android 版本 | Android 14 |
| 安全补丁级别 | 2024-11-01 |
| Bootloader 版本 | 01.01.250317.222939 |
| 测试日期 | 2025 年 10 月 |
| 购买日期 | 2025 年 10 月 |
| 生产日期 | 2025 年 4 月 |

> [!WARNING] 
> ### 额外说明
> 本教程仅在上述版本中进行过完整测试。  
>
> 若你的设备信息与上表**存在差异**，则部分步骤可能会不适用或导致设备异常，请在充分了解风险后谨慎操作。
>
> 此教程中出现的所有命令输出示例仅供参考，请以实际情况为准。

## 前置要求
- 小米盒子 5 (MOB2MB-5P) 一台（未解除 Bootloader 锁定）
- 一台电脑：Windows / Linux / macOS 均可
- 一条可靠的 USB 数据线 (请确保线缆为高质量数据线，而非仅支持充电的线缆。)
   - 若盒子与电脑均为 USB-A 接口，请使用 USB-A 公对 USB-A 公 数据线。
   - 若电脑拥有 USB-C 接口，也可使用 USB-A 公对 USB-C 公 数据线（即常见的手机数据线）。
- 电脑已安装下列工具：
   - [ADB & Fastboot 工具](https://developer.android.com/tools/releases/platform-tools)
   - **保证相关工具 / 驱动运行正常**

_※ 说明：_
- _本文档中提到的 “USB-C” 接口，即为日常生活中经常用到的 “Type-C” 接口。_
- _如果你的设备已经处于解锁状态，则无需执行本教程中与解锁相关的步骤。_
- _如果你想重新锁定你的设备，那么请参阅本教程中的 [重新锁定 Bootloader](#额外内容-重新锁定-bootloader-可选) 章节。_

## 启用 ADB 调试 功能
1. 打开“设置”应用 (包名: `com.xiaomi.mitv.settings`)

   <img height="300" src="./images/screenshots/applist_settings.png">

2. 在“设置”应用中，切换到`关于本机`菜单。
3. 找到`产品型号`选项并连续点击多次，直到设备提示“您现在处于开发者模式”。

   <img height="300" src="./images/screenshots/app_settings_adb_1.png">

4. 切换到`账号与安全`菜单。
5. 启用`ADB 调试`选项。

   <img height="300" src="./images/screenshots/app_settings_adb_2.png">
   
   - 如果页面中未显示该选项，请尝试重新启动“设置”应用后再检查。
6. 退出“设置”应用。

_※ 说明：如果你不退出设置应用，可能会导致你无法看到“允许 USB 调试吗”的对话框。_

## 连接电脑并授权 ADB
> [!NOTE]
> ### 注意
> 开始前，请确保电脑已正确安装并配置了 ADB 工具。
>
> 如需确认 adb 是否可用，请运行以下命令：
> ```shell
> adb --version
> ```
> 如果能正常显示版本号，即表示 ADB 已正确安装。如果没看到版本号，请确保 ADB 已正确安装。

1. 用 USB 数据线连接盒子与电脑
2. 在电脑终端中执行以下命令：
   ```shell
   adb devices
   # 期望返回的信息 - 已允许调试
   List of devices attached
   64066601234567890       device
   # 期望返回的信息 - 未允许调试
   List of devices attached
   64066601234567890       unauthorized
   # 64066601234567890 为设备序列号，仅供参考，请以实际情况为准
   ```
   * 盒子屏幕上会弹出“允许 USB 调试吗？”对话框。

      <img height="300" src="./images/screenshots/dialog_adb.png">

      勾选 **"一律允许"** 并点击 **确定**。

   * 再次运行 `adb devices`，此时应能看到盒子的序列号及状态为 **device**。

_※ 说明：_
- _如果你之前已经用电脑连接过 ADB ，那么在这一步中看不到授权对话框是正常的。_
- _勾选对话框中的"一律允许"选项为可选操作，但是为了便于后续的调试，推荐勾选此选项。_

> [!TIP]
> 没有看到对话框？ 请尝试按照以下几个方向来检查：
>
> * 检查是否退出了设置应用。
> * 检查 ADB 调试是否被打开。
> * 检查 ADB 是否被正确安装。
> * 检查 USB 数据线和驱动工作正常。

## 打开 OEM 解锁 选项
1. 在电脑终端中执行下列命令来打开原生设置中的开发者选项界面:
   ```shell
   adb shell am start com.android.tv.settings/com.android.tv.settings.system.development.DevelopmentActivity
   # 期望返回的信息
   Starting: Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] cmp=com.android.tv.settings/.system.development.DevelopmentActivity }
   ```
2. 在打开的`开发者选项`页面中找到"OEM 解锁"选项并尝试启用。

   <img height="300" src="./images/screenshots/app_settings_developmentactivity_1.png">

   * 如果系统显示了"要允许 OEM 解锁吗？"界面，请在界面中选择启用

      <img height="300" src="./images/screenshots/app_settings_developmentactivity_2.png">

   * 完成后，"OEM 解锁"选项的状态应如下图所示

      <img height="300" src="./images/screenshots/app_settings_developmentactivity_3.png">\
   _※ 说明：由于未能提前保存相关截图，此图片截取自其他设备，仅供参考，请以实际设备为准。_

## 进入 Fastboot 模式并解锁 Bootloader
> [!WARNING]
> **重要提醒：**
>
> 解除 Bootloader 锁定将清除设备上的所有数据。
>
> 在继续操作前，**请务必备份所有重要数据**。

> [!NOTE]
> ### 注意
> 开始前，请确保电脑已正确安装并配置了 Fastboot 工具。
>
> 如需确认 fastboot 是否可用，请运行以下命令：
> ```shell
> fastboot --version
> ```
> 如果能正常显示版本号，即表示 Fastboot 已正确安装。如果没看到版本号，请确保 Fastboot 已正确安装。

1. 在电脑终端中执行下列命令来重启到 Fastboot 模式中:
   ```shell
   adb shell reboot bootloader
   ```
2. 进入 Fastboot 模式后，在电脑终端中依次执行下列命令来进行解锁:
   - 检查设备是否连接 (可选)
      ```shell
      fastboot devices
      # 期望返回的信息
      64066601234567890        fastboot
      ```  
   - 获取设备当前信息 (可选)
      ```shell
      fastboot getvar all
      # 期望返回的信息
      (bootloader) hw-revision: 0
      (bootloader) battery-voltage: 4
      (bootloader) is-userspace: no
      all:
      Finished. Total time: 0.045s
      # 由于返回信息过多，在此处不做完整展示，完整内容请查看下方的示例输出
      ```
   - 执行解除 Bootloader 锁定操作
      ```shell
      fastboot flashing unlock
      # 期望返回的信息
      OKAY [  0.453s]
      Finished. Total time: 0.454s 
      ```
   - 验证是否解锁成功
      ```shell
      fastboot getvar unlocked
      # 期望返回的信息
      unlocked: yes
      Finished. Total time: 0.001s 
      ```
   - 重启设备 (可选)
      ```shell
      fastboot reboot
      # 期望返回的信息
      Rebooting  OKAY [  0.001s]
      Finished. Total time: 0.002s
      ```
至此，你已经完成所有解锁过程

> [!TIP]
> 输入 fastboot 相关命令后发现提示`< waiting for any device >` ?
>
> 请尝试按照以下几个方向来检查：
>
> * 检查设备是否进入了 Fastboot 模式。
> * 检查 USB 数据线和驱动工作正常。

### 额外信息：示例输出（仅供参考）
> [!NOTE]
> 以下为解锁过程中典型的命令输出示例，部分信息 (如序列号、时间、版本号) 仅供参考，请以实际情况为准。

```shell
$ fastboot devices  
64066601234567890        fastboot     
$ fastboot getvar all
(bootloader) hw-revision: 0
(bootloader) battery-voltage: 4
(bootloader) is-userspace: no
(bootloader) is_logical:data: no
(bootloader) is_logical:misc: no
(bootloader) is_logical:super: no
(bootloader) is_logical:boot_a: no
(bootloader) is_logical:boot_b: no
(bootloader) is_logical:system_a: yes
(bootloader) is_logical:system_b: yes
(bootloader) is_logical:vendor_a: yes
(bootloader) is_logical:vendor_b: yes
(bootloader) is_logical:product_a: yes
(bootloader) is_logical:product_b: yes
(bootloader) is_logical:odm_a: yes
(bootloader) is_logical:odm_b: yes
(bootloader) slot-count: 2
(bootloader) downloadsize: 0x08000000
(bootloader) serialno: 64066601234567890
(bootloader)  product: darkknight
(bootloader) unlocked: no
(bootloader) has-slot:data: no
(bootloader) has-slot:metadata: no
(bootloader) has-slot:misc: no
(bootloader) has-slot:super: no
(bootloader) has-slot:boot: yes
(bootloader) has-slot:system: yes
(bootloader) has-slot:vendor: yes
(bootloader) has-slot:product: yes
(bootloader) has-slot:odm: yes
(bootloader) current-slot: a
(bootloader) secure: yes
(bootloader) super-partition-name: super
(bootloader) version-baseband: N/A
(bootloader) version-bootloader: 01.01.250317.222939
(bootloader)  partition-size:super: 0x00000000bb800000
(bootloader)  partition-size:boot_a: 0x0000000004000000
(bootloader)  partition-size:boot_b: 0x0000000004000000
(bootloader)  partition-size:misc: 0x0000000000200000
(bootloader)  partition-size:userdata: 0x000000065b800000
all:
Finished. Total time: 0.045s
$ fastboot flashing unlock  
OKAY [  0.453s]
Finished. Total time: 0.454s 
$ fastboot getvar unlocked   
unlocked: yes
Finished. Total time: 0.001s 
$ fastboot reboot
Rebooting  OKAY [  0.001s]
Finished. Total time: 0.002s
```

## 额外内容: 重新锁定 Bootloader (可选)
> [!CAUTION]
> **警告：**
> 
> 如果你刷入的系统不是**完全匹配设备原厂签名**的版本（例如修改过的 system、boot、vbmeta、vendor 等），再次锁定 Bootloader 将会**导致设备无法启动**。  
> 
> 请在执行前确认：
> - 当前系统是官方或经过正确签名的版本；
> - 已恢复相关分区的原始状态（包括但不限于 vbmeta、boot、system、vendor 等）；
> - 你确实有重新锁定 Bootloader 的需求。

> [!WARNING]
> **重要提醒：**
>
> 重新锁定 Bootloader 将清除设备上的所有数据。\
> 在继续操作前，**请务必备份所有重要数据**。

如果你确定要重新锁定 Bootloader，请在 Fastboot 模式中执行以下命令：
```shell
fastboot flashing lock      # 锁定 Bootloader
fastboot getvar unlocked    # 验证是否成功锁定 (返回 unlocked: no 则代表已成功锁定)
fastboot reboot             # 重启设备 (可选)
```
