module.exports = {
  // pluginOptions 传递任何第三方插件配置
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: '仿有道云笔记',
        mac: {
          icon: './public/icon.ico'
        },
        nsis: {
          oneClick: false, // 一键安装
          perMachine: true, // 是否开启安装时权限限制
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: './public/icon.ico', // 安装图标
          uninstallerIcon: './public/icon.ico', // 卸载图标
          installerHeaderIcon: './public/icon.ico', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
        }
      }
    }
  }
}
