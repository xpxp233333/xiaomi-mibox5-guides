仅供参考，信息已做脱敏处理
```shell
EnableSelinux=enforcing
Irq_check_en=0
active_slot=_a
aml_dt=s7d_s905x5m_darkknight-2g
androidboot.dtbo_idx=0
arch=arm
assm_mn=OB2CN1QXXXXXXXXXXXXXX
assm_sn=64066601234567890
avb2=1
baudrate=921600
bcb_cmd=get_avb_mode; get_valid_slot; if test ${vendor_boot_mode} = true; then setenv loadaddr_kernel 0x3000000; setenv dtb_mem_addr 0x1000000; fi; if test ${active_slot} != "normal"; then echo ab mode, read dtb from kernel; setenv common_dtb_load imgread dtb ${boot_part} ${dtb_mem_addr}; fi;
board=darkknight
board_logo_part=odm_ext
board_name=s7d_darkknight
bootLogoPart=odm_ext_a
boot_flag=0
boot_part=boot_a
bootargs=init=/init ramoops.pstore_en=1 ramoops.record_size=0x8000 ramoops.console_size=0x4000 loop.max_part=4 arm64.nomte loglevel=0 console=ttyS0,921600 no_console_suspend earlycon=aml_uart,0xfe07a000 scramble_reg= cma_first_wm_low=on otg_device=0 disable_ir=0 logo=osd0,loaded,0x1f800000 vout=dummy_l, panel_type= lcd_ctrl= lcd_debug= hdmitx=,444,8bit hdmimode=none hdmichecksum=0x00000000 dolby_vision_on=4 hdr_policy=0 hdr_priority= config_csc_en=1 hdr_force_mode= dolby_status=1 frac_rate_policy= hdmi_read_edid= cvbsmode=dummy_l osd_reverse=0 video_reverse=0 jtag=disable kvm-arm.mode=none init_on_alloc=0 mac=FF:FF:FF:FF:FF:FF
bootcmd=run storeboot
bootconfig=androidboot.bootreason=normal androidboot.selinux=enforcing androidboot.bootloader=01.01.250317.222939 androidboot.hardware=amlogic androidboot.firstboot=1 androidboot.ddr_size=2147483648B androidboot.cc.status=detach androidboot.production_mode=0 androidboot.serialno=64066601234567890 androidboot.mac=FF:FF:FF:FF:FF:FF androidboot.assm_mn=OB2CN1QXXXXXXXXXXXXXX androidboot.did_key=XXXXXXXXXXXX|123456789|XXXXXXXXXXXXXXXX androidboot.wificountrycode=CN androidboot.hwid=002 androidboot.init_loglevel=3 androidboot.is_xiaomi=true androidboot.otg_device=0 androidboot.rpmb_state=0x1
bootdelay=0
bootloader_version=01.01.250317.222939
bootloader_wp=1
bootm_low=0
bootm_size=80000000
cmdline_keys=setenv region_code US; if keyman init 0x1234; then if keyman read assm_sn ${loadaddr} str; then setenv bootconfig ${bootconfig} androidboot.serialno=${assm_sn}; setenv serial ${assm_sn}; setenv serial# ${assm_sn}; else setenv bootconfig ${bootconfig} androidboot.serialno=${product}${cpu_id}; setenv serial ${product}${cpu_id}; setenv serial# ${product}${cpu_id}; fi; if keyman read region_code ${loadaddr} str; then fi; if keyman read mac ${loadaddr} str; then setenv bootargs ${bootargs} mac=${mac}; setenv bootconfig ${bootconfig} androidboot.mac=${mac}; fi; if keyman read deviceid ${loadaddr} str; then setenv bootconfig ${bootconfig} androidboot.deviceid=${deviceid}; fi; if keyman read assm_mn ${loadaddr} str; then setenv bootconfig ${bootconfig} androidboot.assm_mn=${assm_mn}; else setenv bootconfig ${bootconfig} androidboot.assm_mn=DEFAULT; fi; if keyman read did_key ${loadaddr} str; then setenv bootconfig ${bootconfig} androidboot.did_key=${did_key}; fi; fi; setenv bootconfig ${bootconfig} androidboot.wificountrycode=${region_code}; if test ${console_enable} = 1; then setenv bootconfig ${bootconfig} androidboot.console_enable=${console_enable}; fi; setenv bootconfig ${bootconfig} androidboot.hwid=${hwid}; setenv bootconfig ${bootconfig} androidboot.init_loglevel=${init_loglevel}; setenv bootconfig ${bootconfig} androidboot.is_xiaomi=true; setenv bootconfig ${bootconfig} androidboot.otg_device=${otg_device}; factory_provision init;
colorattribute=444,8bit
common_dtb_load=imgread dtb boot_a 0x1000000
config_csc_en=1
console_enable=0
cpu=armv8
cpu_id=1d000123456789
cvbs_drv=0
cvbsmode=dummy_l
ddr_size=2147483648B
decaddr_kernel=0x01800000
did_key=XXXXXXXXXXXX|123456789|XXXXXXXXXXXXXXXX
disable_ir=0
display_bpp=16
display_color_bg=0
display_color_fg=0xffff
display_color_index=16
display_height=1080
display_layer=osd0
display_width=1920
dolby_status=1
dolby_vision_on=4
dtb_mem_addr=0x1000000
dv_fw_addr=0xa00000
dv_fw_dir=/oem/firmware/dovi_fw.bin
dv_fw_dir_odm_ext=/odm_ext/firmware/dovi_fw.bin
dv_fw_dir_vendor=/vendor/firmware/dovi_fw.bin
ethaddr=ff:ff:ff:ff:ff:ff
ext4LogoPath=/logo_files/bootup.bmp
ext4LogoSz=3f4848
ext4logoLoadCmd=ext4load mmc 1:${logoPart} ${logoLoadAddr} ${ext4LogoPath}
fastboot_step=0
fatload_dev=usb
fb_addr=0x1f800000
fb_height=1080
fb_width=1920
fdt_high=0x20000000
fdtaddr=1000000
fileaddr=1080000
filesize=2346
firstboot=1
forUpgrade_1stBootIndex=0
forUpgrade_bootloaderCopies=3
forUpgrade_bootloaderIndex=1
forUpgrade_flashType=BOOT_EMMC
forUpgrade_robustOta=true
forUpgrade_secureBoot=true
forUpgrade_socType=47
frac_rate_policy=1
fs_type=rootfstype=ramfs
gatewayip=10.18.9.1
get_os_type=if store read ${os_ident_addr} ${boot_part} 0 0x1000; then os_ident ${os_ident_addr}; fi
gpt_mode=true
hdmichecksum=0x00000000
hdmimode=none
hdr_policy=0
hostname=arm_gxbb
hwid=002
init_display=get_rebootmode; echo reboot_mode:::: ${reboot_mode}; if test ${reboot_mode} = quiescent; then setenv reboot_mode_android "quiescent"; setenv dolby_status 0; setenv dolby_vision_on 0; setenv initconfig androidboot.quiescent=1 androidboot.bootreason=${reboot_mode}; run storeargs; osd open;osd clear; else if test ${reboot_mode} = recovery_quiescent; then setenv reboot_mode_android "quiescent"; setenv dolby_status 0; setenv dolby_vision_on 0; setenv initconfig androidboot.quiescent=1 androidboot.bootreason=recovery,quiescent; run storeargs; osd open;osd clear; else setenv reboot_mode_android "normal"; setenv initconfig androidboot.bootreason=${reboot_mode}; hdmitx hpd;hdmitx get_parse_edid; dovi process;watermark_init;osd open;osd clear;run load_bmp_logo; bmp scale;vout output ${outputmode};dovi set;dovi pkg;vpp hdrpkt; run storeargs; fi;fi;
init_loglevel=3
initargs=init=/init ramoops.pstore_en=1 ramoops.record_size=0x8000 ramoops.console_size=0x4000 loop.max_part=4
initconfig=androidboot.bootreason=normal
initrd_high=1f800000
ipaddr=10.18.9.97
jtag=disable
load_bmp_logo=if rdext4pic ${board_logo_part} $loadaddr; then bmp display $logoLoadAddr; else if imgread pic logo bootup $loadaddr; then bmp display $bootup_offset; fi; fi;
loadaddr=0x1080000
loadaddr_kernel=0x3000000
loadaddr_rtos=0x00080000
lock=10101000
loglevel=0
logoLoadAddr=1080000
logoPart=11
mac=FF:FF:FF:FF:FF:FF
netmask=255.255.255.0
nocs_mode=false
os_ident_addr=0x00500000
osd_reverse=0
otg_device=0
outputmode=dummy_l
partition_mode=dynamic
preboot=run bcb_cmd; run upgrade_check;run init_display;run storeargs;run upgrade_key;bcb uboot-command;run switch_bootmode;
product=darkknight
production_mode=0
qms_en=1
reboot_mode=normal
reboot_mode_android=normal
recovery_from_fat_dev=setenv loadaddr ${loadaddr_kernel}; if fatload ${fatload_dev} 0 ${loadaddr} aml_autoscript; then autoscr ${loadaddr}; fi; if fatload ${fatload_dev} 0 ${loadaddr} recovery.img; then if fatload ${fatload_dev} 0 ${dtb_mem_addr} dtb.img; then echo ${fatload_dev} dtb.img loaded; fi; setenv bootargs ${bootargs} ${fs_type}; bootm ${loadaddr}; fi;
recovery_from_flash=echo active_slot: ${active_slot}; setenv loadaddr ${loadaddr_kernel}; setenv recovery_mode true; if test ${active_slot} = normal; then setenv bootargs ${bootargs} ${fs_type} aml_dt=${aml_dt} recovery_part=${recovery_part} recovery_offset=${recovery_offset}; if test ${upgrade_step} = 3; then if ext4load mmc 1:2 ${dtb_mem_addr} /recovery/dtb.img; then echo cache dtb.img loaded; fi; if test ${vendor_boot_mode} = true; then if imgread kernel ${recovery_part} ${loadaddr} ${recovery_offset}; then bootm ${loadaddr}; fi; else if ext4load mmc 1:2 ${loadaddr} /recovery/recovery.img; then echo cache recovery.img loaded; bootm ${loadaddr}; fi; fi; else if imgread dtb recovery ${dtb_mem_addr}; then else echo restore dtb; run common_dtb_load; fi; fi; if imgread kernel ${recovery_part} ${loadaddr} ${recovery_offset}; then bootm ${loadaddr}; fi; else if fdt addr ${dtb_mem_addr}; then else echo retry common dtb; run common_dtb_load; fi; if test ${vendor_boot_mode} = true; then setenv bootargs ${bootargs} ${fs_type} aml_dt=${aml_dt}; setenv bootconfig ${bootconfig} androidboot.slot_suffix=${active_slot}; if imgread kernel ${boot_part} ${loadaddr}; then bootm ${loadaddr}; fi; fi; fi;
recovery_from_sdcard=setenv fatload_dev mmc; if mmcinfo; then run recovery_from_fat_dev; fi;
recovery_from_udisk=setenv fatload_dev usb; if usb start 0; then run recovery_from_fat_dev; fi;
recovery_mode=false
recovery_offset=0
recovery_part=recovery_a
region_code=CN
retry_recovery_times=2
rollback_flag=0
rpmb_state=1
sdcburncfg=aml_sdc_burn.ini
serial=64066601234567890
serial#=64066601234567890
serverip=10.18.9.113
silent=1
slot-suffixes=0
soc=s7d
storage_param=setenv bootargs ${bootargs} ${emmc_quirks}; store param; setenv bootargs ${bootargs} ${mtdbootparts};
storeargs=get_bootloaderversion; setenv bootargs ${initargs} arm64.nomte loglevel=${loglevel} console=ttyS0,${baudrate} no_console_suspend earlycon=aml_uart,${uart_base} scramble_reg=${scramble_reg} cma_first_wm_low=on otg_device=${otg_device} disable_ir=${disable_ir} logo=${display_layer},loaded,${fb_addr} vout=${outputmode},${vout_init} panel_type=${panel_type} lcd_ctrl=${lcd_ctrl} lcd_debug=${lcd_debug} hdmitx=${cecconfig},${colorattribute} hdmimode=${hdmimode} hdmichecksum=${hdmichecksum} dolby_vision_on=${dolby_vision_on} hdr_policy=${hdr_policy} hdr_priority=${hdr_priority} config_csc_en=${config_csc_en} hdr_force_mode=${hdr_force_mode} dolby_status=${dolby_status} frac_rate_policy=${actual_frac_rate} hdmi_read_edid=${hdmi_read_edid} cvbsmode=${cvbsmode} osd_reverse=${osd_reverse} video_reverse=${video_reverse} jtag=${jtag}; setenv bootargs ${bootargs} ${emmc_quirks} kvm-arm.mode=none init_on_alloc=0; setenv bootconfig ${initconfig} androidboot.selinux=${EnableSelinux}; setenv bootconfig ${bootconfig} androidboot.bootloader=${bootloader_version} androidboot.hardware=amlogic; setenv bootconfig ${bootconfig} androidboot.firstboot=${firstboot} androidboot.ddr_size=${ddr_size}; setenv bootconfig ${bootconfig} androidboot.cc.status=${usb_status}; setenv bootconfig ${bootconfig} androidboot.production_mode=${production_mode}; if test ${cc_enable} != 1; then else setenv bootconfig ${bootconfig} androidboot.cc_enable=${cc_enable}; fi; run cmdline_keys;
storeboot=run get_os_type; run storage_param; if test ${os_type} = rtos; then setenv loadaddr ${loadaddr_rtos}; store read ${loadaddr} ${boot_part} 0 0x400000; bootm ${loadaddr}; else if test ${os_type} = kernel; then get_avb_mode; echo active_slot in storeboot: ${active_slot}; if fdt addr ${dtb_mem_addr}; then else echo retry common dtb; run common_dtb_load; fi; setenv bootconfig ${bootconfig} androidboot.force_normal_boot=1; if test ${active_slot} != normal; then setenv bootconfig ${bootconfig} androidboot.slot_suffix=${active_slot}; fi; setenv bootconfig ${bootconfig} androidboot.rollback=${rollback_flag}; setenv loadaddr ${loadaddr_kernel}; if imgread kernel ${boot_part} ${loadaddr}; then bootm ${loadaddr}; fi; else echo wrong OS format ${os_type}; fi;fi; echo try upgrade as booting failure; check_ab; run update;
switch_bootmode=get_rebootmode; if test ${reboot_mode} = factory_reset; then run recovery_from_flash; else if test ${reboot_mode} = update; then run update; else if test ${reboot_mode} = quiescent; then setenv bootargs ${bootargs} androidboot.quiescent=1; else if test ${reboot_mode} = recovery_quiescent; then setenv bootargs ${bootargs} androidboot.quiescent=1; run recovery_from_flash; else if test ${reboot_mode} = cold_boot; then else if test ${reboot_mode} = fastboot; then fastboot 0; fi; fi;fi;fi;fi;fi;
uart_base=0xfe07a000
update=run usb_burning; run recovery_from_sdcard; run recovery_from_udisk; run recovery_from_flash;
upgrade_check=echo recovery_status=${recovery_status}; if itest.s "${recovery_status}" == "in_progress"; then run storeargs; run recovery_from_flash; else fi; echo upgrade_step=${upgrade_step}; if itest ${upgrade_step} == 3; then run storeargs; run update; fi;
upgrade_key=run upgrade_key_base;echo usr key;
upgrade_key_base=if gpio input "GPIOD_2"; then echo detect upgrade key; if test ${upgrade_key_flag} = 0; then echo enter recovery; setenv upgrade_key_flag 1; saveenv; run recovery_from_flash; else if test ${upgrade_key_flag} = 1; then echo enter update; setenv upgrade_key_flag 2; saveenv; run update; else echo enter fastboot; setenv upgrade_key_flag 0; saveenv; fastboot 0; fi;fi; fi;
upgrade_step=2
usb_burning=adnl 1200
usb_status=detach
vendor=amlogic
vendor_boot_mode=true
vendor_boot_part=vendor_boot
video_reverse=0
write_boot=0

Environment size: 12480/65532 bytes
```