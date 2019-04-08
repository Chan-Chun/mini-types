/**
 * @file 系统信息
 */
declare namespace my {
  interface IGetSystemInfoSuccessResult {
    /**
     * 用户设置字体大小
     */
    fontSizeSetting: number;

    /**
     * 系统版本
     */
    system: string;

    /**
     * 支付宝版本号
     */
    version: string;

    /**
     * 手机品牌
     */
    brand: string;

    /**
     * 当前电量百分比
     */
    currentBattery: string;

    /**
     * 窗口高度
     */
    windowHeight: number;

    /**
     * 设备像素比
     */
    pixelRatio: number;

    /**
     * 系统名：Android，iOS
     * 注意: 小程序文档中写的Android/iOS, 实际调用返回值为 android/ios/iphone(低版本)
     *      未避免小程序框架后续改造造成不兼容，建议转换成小写之后再进行比较
     */
    platform: 'android' | 'ios' | 'iphone';

    /**
     * 屏幕高度
     */
    screenHeight: number;

    /**
     * 状态栏高度
     */
    statusBarHeight: number;

    /**
     * 支付宝设置的语言
     */
    language: string;

    /**
     * 设备磁盘容量
     */
    storage: string;

    /**
     * 当前运行的客户端，当前是支付宝则有效值是"alipay"
     */
    app: string;

    /**
     * 标题栏高度
     */
    titleBarHeight: number;

    /**
     * 手机型号
     */
    model: string;

    /**
     * 屏幕宽度
     */
    screenWidth: number;

    /**
     * 窗口宽度
     */
    windowWidth: number;
  }

  interface IGetSystemInfoOptions {
    /**
     * 接口调用成功的回调
     */
    success?(res?: IGetSystemInfoSuccessResult): void;

    /**
     * 调用失败的回调函数
     */
    fail?(): void;

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void;
  }

  /**
   * 获取系统信息。
   */
  function getSystemInfo(options: IGetSystemInfoOptions): void;

  /**
   * 返回值同 getSystemInfo success 回调参数
   */
  function getSystemInfoSync(): IGetSystemInfoSuccessResult;
}
