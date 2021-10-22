import * as os from 'os';

const args = process.argv.slice(1);

export const isServe = args.some(val => val === '--serve');

/** https://www.electronjs.org/docs/latest/api/dialog/#dialogshowopendialogbrowserwindow-options
 * dialog.showOpenDialog options
 * @param key SELECT_FILE 菜单 - 添加  SAVE_AS_DIR 保存到新文件夹 undefined 选择文件夹
 * @returns  Electron.OpenDialogSyncOptions
 */
export function getOptions(key?: 'SELECT_FILE' | 'SAVE_AS_DIR') {
  //打开文件夹 的配置参数
  let options: Electron.OpenDialogSyncOptions = {};

  //当打开目录是要选择文件时
  if (key == 'SELECT_FILE') {
    options = {
      properties: ['openFile', 'multiSelections'],
      filters: [{ name: 'Images', extensions: ['jpg', 'png', 'jpeg'] }]
    };
    //macos系统下允许选择文件夹
    if (os.platform() === 'darwin') {
      options.properties?.push('openDirectory');
    }
  } else if (key == 'SAVE_AS_DIR') {
    options = {
      properties: ['createDirectory', 'openDirectory']
    };
  } else {
    options = {
      properties: ['createDirectory', 'openDirectory', 'multiSelections']
    };
  }
  return options;
}
