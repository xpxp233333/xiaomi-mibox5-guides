#  如何通过 DSU 来备份 小米盒子 5 (MOB2MB-5P) 的系统镜像
本教程介绍如何通过 DSU 来备份 小米盒子 5 (MOB2MB-5P) 的系统镜像。

> [!CAUTION]
> 此教程涉及到 dd 命令的使用，错误的使用可能导致：
> - 硬件损坏
> - 数据丢失
> - 设备永久性变砖
> - 失去官方保修资格
> 
> 如你选择继续则代表你已经充分了解并可自行承担全部风险，并自愿承担责任，作者对此操作产生的任何后果概不负责。

## 目录
- [小米盒子信息与额外说明](#小米盒子信息与额外说明)
- [前置要求](#前置要求)
- [制作并安装 DSU 镜像](#制作并安装-dsu-镜像)
- [重启到 DSU 系统并执行备份操作](#重启到-dsu-系统并执行备份操作)
- [可选步骤: 删除已安装的 GSI](#可选步骤-删除已安装的-gsi)

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
> 本教程仅在上述版本中进行过完整测试。\
> 若你的电视盒子信息与上表**存在差异**，则部分步骤可能会不适用或导致设备异常，请在充分了解风险后谨慎操作。

## 前置要求
- 小米盒子 5 (MOB2MB-5P) 一台（已解除 Bootloader 锁定）
- 一台电脑：Windows / Linux / macOS 均可
- 一条可靠的 USB 数据线 (可选，如你要使用有线连接方式，请确保线缆为高质量数据线，而非仅支持充电的线缆。)
   - 若盒子与电脑均为 USB-A 接口，请使用 USB-A 公对 USB-A 公 数据线。
   - 若电脑拥有 USB-C 接口，也可使用 USB-A 公对 USB-C 公 数据线（即常见的手机数据线）。
- 电脑已安装下列工具：
   - [ADB & Fastboot 工具](https://developer.android.com/tools/releases/platform-tools)
   - [Android OTA 镜像解压工具](https://github.com/tobyxdd/android-ota-payload-extractor) (从`Release`中下载适用于你设备当前操作系统的最新版本)
   - **保证相关工具 / 驱动运行正常**

_※ 说明：_
- _本文档中提到的 “USB-C” 接口，即为日常生活中经常用到的 “Type-C” 接口。_
- _所有 ADB 相关操作均可以使用无线模式来进行，但是在实际操作流程中，无线模式不如有线模式方便，因此在此教程中不做推荐。_
- _如果你的电视盒子还没有解除 Bootloader 锁定，那么请参阅教程：[如何解除 小米盒子 5 (MOB2MB-5P) 的 Bootloader 锁定](unlock_bootloader.md)。_
- _Android OTA 镜像解压工具 为可选工具_
   - _你可以使用其他支持解包`payload.bin`的类似工具进行相关操作。_
   - _如果你了通过其他方法得到了兼容的带 Root 的 GSI 镜像，你也可以直接使用这个镜像，无需从 OTA 包开始制作。_
   - _如果你选择使用通过其他方式生成或获取的 GSI 镜像，作者无法保证其可用性或与电视盒子的兼容性。请在使用前自行验证镜像兼容性与安全性。_


## 制作并安装 DSU 镜像
> [!TIP]
> ### 动态系统更新 (DSU) 介绍
> 动态系统更新 (DSU) 是 Android 10 中引入的一项系统功能，可执行以下操作：
>
> * 将新的 GSI（或其他 Android 系统映像）下载到您的设备上。
> * 创建新的动态分区。
> * 将下载的 GSI 加载到新的分区。
> * 在设备上将 GSI 作为来宾操作系统启动。
>
> DSU 还可让您在当前系统映像和 GSI 之间轻松切换，因此您在试用 GSI 时不会面临当前系统映像受损的风险。

> [!NOTE]
> ### 注意
> - 开始前，请确保电视盒子上拥有足够的可用存储空间，并且电视盒子已解除 Bootloader 锁定。
> - 4PDA 并非厂商官方页面，在浏览内容和使用相关资源的时候，请注意安全。
> - 你可能需要一个可用的 4PDA 账号才能访问论坛中的资源。
> - 绝大多数操作都需要依赖 ADB ，如果你还不知道怎么样将电视盒子连接电脑至并授权 ADB，那么请参阅其他教程中的：[启用 ADB 调试 功能](unlock_bootloader.md#启用-adb-调试-功能) 和 [连接电脑并授权 ADB](unlock_bootloader.md#连接电脑并授权-adb) 章节。

1. 获取以下固件：
   - Xiaomi Mi TV Stick 4K Android 14 userdebug 固件 ([下载链接](https://android.googleapis.com/packages/ota-api/package/6f2e8b157af3409c028f9973b74b0179ced2d93d.zip)) ([链接来源: 4PDA](https://4pda.to/forum/index.php?showtopic=1041410&view=findpost&p=135711658))
   - Xiaomi TV Box S 3rd Gen Android 14 固件 ([下载链接](https://android.googleapis.com/packages/ota-api/package/fbc6a620d9d88823fa3b4b4257e7c765eb471cb1.zip)) ([链接来源: 4PDA](https://4pda.to/forum/index.php?showtopic=1104313))

   _※ 说明：_
      - _下载链接来自 4PDA 论坛。_
      - _作者不保证这些直链能一直有效。_
      - _本文仅为方便访问而列出直链，请在下载前自行确认其兼容性与安全性。_
***
2. 使用 Android OTA 镜像解压工具 解包第一步中下载的固件 ([点击此处来查看使用方法](https://github.com/tobyxdd/android-ota-payload-extractor))
***
3. 在解包后的文件中找到以下镜像，并使用这些文件制作可安装的 GSI：
   - product.img (取自 Xiaomi Mi TV Stick 4K)
   - system.img (取自 Xiaomi Mi TV Stick 4K)
   - system_ext.img (取自 Xiaomi Mi TV Stick 4K)
   - vendor.img (取自 Xiaomi TV Box S 3rd Gen)

   找齐上述镜像后，将它们打包为一个 `.zip` 文件（压缩包内不要存在文件夹，并且文件格式建议使用标准 ZIP 格式，如要使用其他格式，请自行测试）。
***
4. 将制作好的 GSI 上传至设备，你可以使用以下命令进行上传:
   ```shell
   adb push <本地 GSI 文件路径> <电视盒子上的路径>
   # 下方为一个使用示例
   $ adb push D:\MiBox5\test.zip /sdcard
   # 说明: 将电脑 D 盘 MiBox5 文件夹中的 test.zip 上传到盒子的 /sdcard 目录
   ```
***
5. 上传完成后，使用下列命令来安装 GSI :
   ```shell
   adb shell am start-activity -n com.android.dynsystem/com.android.dynsystem.VerificationActivity -a android.os.image.action.START_INSTALL -d <电视盒子上 GSI 文件的路径> --el KEY_USERDATA_SIZE <DSU 用户空间大小 (单位: 字节)>
   # 下方为一个使用示例
   $ adb shell am start-activity -n com.android.dynsystem/com.android.dynsystem.VerificationActivity -a android.os.image.action.START_INSTALL -d 'file:///sdcard/test.zip' --el KEY_USERDATA_SIZE 6442450944
   # 说明: 安装盒子 sdcard 文件夹中文件名为 test.zip 的 GSI 镜像，并且设置 DSU 用户空间大小为 6GB
   ```
   注意:
   - 建议将用户空间设置为 6GB (6442450944) 或更大。
   - 在后续的系统镜像备份过程中，若存储空间不足，可能会导致操作失败或产生不完整的备份。
   - 安装过程可能需要几分钟时间，请耐心等待几分钟后再执行验证命令，以免影响安装过程。
***
6. 验证 GSI 是否完成安装，你可以使用下列命令来进行验证:
   ```shell
   adb shell gsi_tool status
   # 下方为一个使用示例
   $ adb shell gsi_tool status
   # 安装完成但还没有启用时返回的结果
   installed  # 已安装
   disabled   # 未启用
   # 安装完成并且已启用时返回的结果
   installed  # 已安装
   enabled    # 已启用
   # 安装未完成或是没有安装时返回的结果
   normal
   ```
***
7. 使用下列命令来启用 GSI (在本章中为可选步骤):
   ```shell
   adb shell gsi_tool enable -s
   # 下方为一个使用示例
   $ adb shell gsi_tool enable -s  # 说明: 这条命令是让系统以非粘滞模式启用 GSI
   Live image install successfully enabled.  # 返回的信息说明你已经成功启用
   ```
   启用成功后重启电视盒子即可进入 GSI\
   由于使用的是非粘滞模式，在 GSI 中再次重启即可自动返回原系统

_※ 说明：_
- _动态系统更新 (DSU) 的介绍引自 [Android Developers](https://developer.android.com/topic/dsu)，如需获取更多信息，请参阅 [Android Developers 上的相关文档](https://source.android.com/docs/core/ota/dynamic-system-updates)。_
- _虽然 [Android Developers](https://developer.android.com/topic/dsu) 指出“在试用 GSI 时不会面临当前系统映像受损的风险”，但在实际情况下，当来宾操作系统具有 root 权限时，错误的操作或恶意镜像仍可能对当前设备上的系统镜像造成损坏。因此，请谨慎操作，注意数据安全。_

## 重启到 DSU 系统并执行备份操作
> [!NOTE]
> ### 注意
> 开始前，请确保电视盒子已解除 Bootloader 锁定。

1. 在进入 GSI 系统前先查询当前设备上的活动槽位
   ```shell
   adb shell getprop ro.boot.slot_suffix
   # 下方为一个使用示例
   $ adb shell getprop ro.boot.slot_suffix
   _a  # 表示目前活动槽位为 a 槽
   ```
   此操作可以帮助你在后续的过程中正确地选择需要备份的分区
***
2. 使用下列命令来启用 GSI：
   ```shell
   adb shell gsi_tool enable -s
   # 下方为一个使用示例
   $ adb shell gsi_tool enable -s  # 以非粘滞模式启用 GSI
   Live image install successfully enabled.  # 表示启用成功
   ```
   如需以粘滞模式启用 GSI，请使用下列命令:
   ```shell
   adb shell gsi_tool enable  # 以粘滞模式启用 GSI
   ```
   强烈建议你仅在能保证安装的 GSI 可以正常使用的情况下才启用粘滞模式
> [!TIP]
> ### 什么是粘滞模式
> 普通模式 (非粘滞模式) ：在 GSI 中重启即可自动返回原系统，无需任何额外操作。
>
> 粘滞模式：在 GSI 中即使重启也不会返回原系统，你需要执行下列命令来手动禁用。
> ```shell
> # 这两条命令中的任意一条都可以禁用 GSI，请根据自己的实际情况来进行选择
> # 通过 ADB :
> adb shell gsi_tool disable
> # 通过 Fastbootd : (由于 小米盒子 5 无法正常进入 Fastbootd 模式，因此该命令不可用)
> fastboot gsi disable
> ```
***
3. 重启设备来启动到 GSI

   注意: 不要强行断电重启，请通过系统菜单来使其正常重启，或是使用下列命令来进行重启: 
   ```shell
   adb shell reboot
   ```
***
4. 开始备份并导出系统镜像
> [!NOTE]
> ### 注意
> 如果你使用的 GSI 镜像是按照[上一章提到的方法](#制作并安装-dsu-镜像)制作的，那么在成功重启到 GSI 后:
> - 系统会自动启用 `ADB 调试` 功能
> - 无需完成首次引导流程和手动启用 `ADB 调试` 功能
> - 可以直接通过 ADB 执行命令
>
> 若你使用的不是该教程中制作的镜像，那么这个镜像在默认情况下可能不会自动启用 `ADB 调试` 。\
> 如果重启到 GSI 后发现 `ADB 调试` 功能没有被自动启用，那么请手动启用 `ADB 调试` 功能，否则你将无法执行后续的备份操作。

   当成功进入到 GSI 后，你就可以通过下列命令来执行备份操作:
   1. 进入设备 shell
      ```shell
      adb shell
      ```
      完成后你将进入设备的交互式 shell (通常提示符为 $)
   2. 获取 root 权限
      ```shell
      su
      ```
      完成后你将获得 shell root 权限 (通常提示符为 #)

      如果提示`/system/bin/sh: su: inaccessible or not found`或其他类似的提示，则代表你使用的 GSI 不支持 Root ，请更换镜像后重试
   3. 列出分区
      ```shell
      ls /dev/block/by-name/
      ```
      完成后系统将列出分区，下方为一个示例:
      ```shell
      boot_a        dtbo_a       frp          misc          odm_ext_b  rsv       vbmeta_b
      boot_b        dtbo_b       init_boot_a  mmcblk0       oem_a      super     vbmeta_system_a
      bootloader_a  env          init_boot_b  mmcblk0boot0  oem_b      tee       vbmeta_system_b
      bootloader_b  factory      logo         mmcblk0boot1  param      userdata  vendor_boot_a
      cri_data      factorydata  metadata     odm_ext_a     reserved   vbmeta_a  vendor_boot_b
      ```
   4. 备份分区推荐

      推荐备份下列分区: `boot` `bootloader` `dtbo` `init_boot` `odm_ext` `oem` `super` `vbmeta` `vbmeta_system` `vendor_boot`

      上述分区在后续的厂商 ota 更新过程中都有可能被更新，因此强烈建议备份这些分区
> [!WARNING]\
> 如果你还有其他的特殊需求，也可以视情况来备份其他的分区。\
> 但是请注意，如果你在后续选择还原某些其他分区，这个操作可能会导致设备出现异常或直接变砖，因此请谨慎操作，作者对此操作产生的任何后果概不负责。
   5. 备份指定分区
      - 根据之前执行`adb shell getprop ro.boot.slot_suffix`后返回的信息可以得知，当前设备的活动槽位为 `a` ，因此在备份时，应该备份 `boot_a` `odm_ext_a` 这种名字中带 `_a` 的分区
      - 如果你当前设备的活动槽位为 `b` ，那么在备份时，请备份 `boot_b` `odm_ext_b` 这种名字中带 `_b` 的分区
      - `super` 没有 `_a` `_b` 的设定，因此 `super` 可以直接备份

      以 `boot_a` 为例，使用 `dd` 命令将该分区导出为镜像文件：
      ```shell
      dd if=/dev/block/by-name/boot_a of=/sdcard/boot.img
      # 将 boot_a 分区导出到 /sdcard 文件夹中，文件名为 boot.img
      ```
      命令说明：\
      `if= 为输入路径` `of= 为输出路径`

      执行后将返回以下信息 (仅供参考)：
      ```
      131072+0 records in
      131072+0 records out
      67108864 bytes (64 M) copied, 0.993 s, 64 M/s
      ```
   6. 计算 SHA256

      建议对导出的镜像进行校验，以便后续验证完整性：
      ```shell
      sha256sum /sdcard/boot.img
      ```
      示例输出：
      ```
      c06eaeed4b42ab8ee5d299ae57248af8ef4b5cafadad4ec645ea475f8adac1a8  /sdcard/boot.img
      ```
   7. 将镜像导出至电脑

      输入下列命令来退出 shell:
      ```shell
      exit
      ```
      _※ 说明：你可能需要执行两次 exit 才能完全退出 shell。_
         - _第一次退出的是 root 权限下的 shell (`#` 提示符)_
         -  _第二次退出的是普通用户 shell (`$` 提示符)_

      退出后使用 `adb pull` 命令来将镜像给导出至电脑上:
      ```shell
      adb pull <镜像在盒子上的位置> <镜像在你电脑上的导出位置>
      # 下方为一个使用示例
      $ adb pull /sdcard/boot.img D:\MiBox5\backups
      # 说明: 将盒子 /sdcard 目录中的 boot.img 导出到电脑 D 盘 MiBox5\backups 目录中
      ```
      - 导出完成后强烈建议对这些镜像文件进行 SHA256 校验，并与电视盒子上的结果进行对比，以免传输过程中出现损坏
      - 完成后建议将 SHA256 妥善保存起来
***
5. 退出 GSI :
   - 如果你没有以粘滞模式启用 GSI，那么直接重启设备即可退出并自动返回原系统
   - 如果你以粘滞模式启用 GSI，那么请使用下列命令来手动禁用
      ```shell
      adb shell gsi_tool disable
      ```
      完成后重启设备即可返回原系统
***
至此，你已经将分区镜像成功导出至电脑。\
建议将所有镜像与校验值妥善保存，以便在系统损坏或刷机失败时用于恢复。

## 可选步骤: 删除已安装的 GSI
> [!WARNING]
> **重要提醒：**
>
> 删除已安装的 GSI 会清除对应 DSU 用户空间中的所有内容。
>
> 在继续操作前，请确认你**已备份 GSI 内的重要文件**。

如果你后续不再打算使用这次安装的 GSI，你可以执行下列命令来删除已安装的 GSI ：
```shell
# 这两条命令中的任意一条都可以删除 GSI，请根据自己的实际情况来进行选择
# 通过 ADB :
adb shell gsi_tool wipe
# 通过 Fastbootd : (由于 小米盒子 5 无法正常进入 Fastbootd 模式，因此该命令不可用)
fastboot gsi wipe
```