export interface MyMenu {
  ID?: string
  Title: string
  MenuType?: string | null
}

export interface MenuBar {
  Title: string
  ID: string
  DictType?: string | null
  role?: string | null
  children: MyMenu[]
}

export interface MenuState {
  /* 左侧菜单 */
  menus: MenuBar[]
}