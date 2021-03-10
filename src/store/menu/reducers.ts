import type { MenuState } from './types';
import {
  SettingOutlined,
  AntCloudOutlined,
  MobileOutlined,
} from '@ant-design/icons';

const initialState: MenuState = {
  menus: [
    {
      Title: '工会专项工作',
      ID: 'union',
      icon: MobileOutlined,
      children: [
        { ID: 'all2', Title: '全部', MenuType: '工会工作类别' },
        { ID: 'all2_template', Title: '示范模板', MenuType: '工会工作类别' },
      ],
    },
    {
      Title: '合同专项工作',
      ID: 'contract',
      icon: AntCloudOutlined,
      children: [{ ID: 'all3', Title: '全部', MenuType: '合同工作类别' }],
    },
    {
      Title: '类别管理',
      ID: 'dict',
      role: import.meta.env.SNOWPACK_PUBLIC_ADMIN_NAME,
      icon: SettingOutlined,
      children: [
        { Title: '工会工作类别', ID: 'uc' },
        { Title: '工会资料类型', ID: 'uf' },
        { Title: '合同工作类别', ID: 'cc' },
        { Title: '合同资料类型', ID: 'cf' },
      ],
    },
  ],
};

export function menuReducer(state = initialState): MenuState {
  return state;
}
