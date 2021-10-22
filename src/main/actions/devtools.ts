//添加扩展
import { session } from 'electron';
import * as path from 'path';

export class ChromeDevtools {
  public handle() {
    const Angular_Gauntlets = this.getExtension('Angular_Gauntlets', '1.2.1');
    session.defaultSession.loadExtension(Angular_Gauntlets, { allowFileAccess: true });
  }
  private getExtension(id: string, v: string): string {
    return path.resolve(`./Extensions/${id}/${v}_0`);
  }
}
