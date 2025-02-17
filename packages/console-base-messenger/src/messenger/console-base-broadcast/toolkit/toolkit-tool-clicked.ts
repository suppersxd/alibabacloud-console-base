import {
  EToolkitTypeShort
} from '../../../const';
import {
  composeToolkitTypeWithId
} from '../../../util/compose-toolkit-type';
import broadcastByConsoleBase from '../../../util/broadcast-by-console-base';

/**
 * 通知控制台应用：某工具被点击
 * 
 * 原 @ali/console-base-sdk-toolkit messenger.broadcastClicked
 */
export default function toolkitToolClicked(id: string): void {
  broadcastByConsoleBase(composeToolkitTypeWithId(EToolkitTypeShort.TOOL_CLICKED, id));
}
