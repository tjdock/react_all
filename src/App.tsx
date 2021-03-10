import React, {FC, Suspense, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import {Button, Dropdown, Menu} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined,} from '@ant-design/icons';
import './App.scss';
import logo from './assets/logo.png';
import type {RootState} from './store';
import type {MenuBar, MyMenu} from './store/menu/types';
// import { login } from "./store/main/actions";
// import { Dict, MenuBar } from "./store/dict/types";
import {routesConfigs} from './routes.config';
import {LOGIN, LoginAction} from './store/main/types';

const App: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const displayName = useSelector((state: RootState) => state.main.displayName);
  const menus = useSelector((state: RootState) => state.menu.menus);
  // const roles = useSelector((state: RootState) => state.main.roles);

  const [collapsed, setCollapsed] = useState(false);
  //取当前路由名称，让菜单高亮
  const [current, setCurrent] = useState(location.pathname.split('/')[1]);
  const [openKeys, setOpenKeys] = useState(new Array<string>());

  useEffect(() => {
    console.log('current=' + current);
    //todo test
    dispatch({type:LOGIN});

    if (current === '') {
      setCurrent('union');
      history.push('/union/all2');
    }

    //展开所在菜单
    menus.forEach((menu) => {
      if (menu.ID === current) {
        setOpenKeys([current]);
        menu.children.forEach((m) => {
          let _id = m.ID ? m.ID.toString() : '';
          if (_id === location.pathname.split('/')[2]) {
            setCurrent(_id);
          }
        });
      }
    });

    if (menus.length === 0) {
      dispatch({ type: LOGIN });
    }
  }, [dispatch, menus, current, location.pathname, history]);

  //折叠菜单
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  //点击左侧菜单
  const menuClickHandler = (e: any) => {
    if (openKeys.length === 1) {
      history.push('/' + openKeys[0] + '/' + e.key);
    } else {
      history.push('/' + e.key);
    }
    setCurrent(e.key);
  };

  //展开左侧菜单
  const openChangeHandler: any = (arr: string[]) => {
    const latestOpenKey = arr.find((key) => openKeys.indexOf(key) === -1);
    if (menus.map((m) => m.ID).indexOf(latestOpenKey || '') === -1) {
      setOpenKeys(arr);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  //注销，切换用户
  const dropdown = () => (
    <Menu>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href={
            import.meta.env.SNOWPACK_PUBLIC_LOGIN_ANOTHER_URL + window.location
          }
        >
          切换用户
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          rel="noopener noreferrer"
          href={import.meta.env.SNOWPACK_PUBLIC_SIGN_OUT_URL}
        >
          注销
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="main">
      <div className={['left', collapsed ? 'collapsed' : ''].join(' ')}>
        <div className="top">
          <Button
            type="link"
            onClick={toggleCollapsed}
            icon={
              collapsed ? (
                <MenuUnfoldOutlined style={{ color: 'white' }} />
              ) : (
                <MenuFoldOutlined style={{ color: 'white' }} />
              )
            }
          />
        </div>
        <Menu
          className="custSubmenu"
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          onClick={menuClickHandler}
          selectedKeys={[current]}
          openKeys={openKeys}
          onOpenChange={openChangeHandler}
        >
          {menus
            .filter((menu: MenuBar) => {
              //return menu.role ? roles.indexOf(menu.role) > -1 : true
              return true;
            })
            .map((menu: MenuBar) => {
              if (menu.children.length > 0) {
                return (
                  <Menu.SubMenu
                    key={menu.ID}
                    title={
                      <span>
                        <menu.icon />
                        <span>{menu.Title}</span>
                      </span>
                    }
                  >
                    {menu.children.map((m: MyMenu) => (
                      <Menu.Item key={m.ID}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>{m.Title}</span>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={menu.ID}>
                    <SettingOutlined />
                    <span>{menu.Title}</span>
                  </Menu.Item>
                );
              }
            })}
        </Menu>
      </div>
      <div className="right">
        <div className="top">
          <img src={logo} alt="" />
          <div className="spacer" />
          <Dropdown overlay={dropdown}>
            <Button
              type="link"
              style={{ color: 'white' }}
              icon={<UserOutlined style={{ color: 'white' }} />}
            >
               {displayName}
            </Button>
          </Dropdown>
        </div>
        <div className="hh" />
        <Suspense fallback={null}>
          <Switch>
            {routesConfigs.map(
              (r) =>
                r.component && (
                  <Route
                    key={r.path}
                    path={r.path}
                    exact={r.exact}
                    component={r.component}
                  />
                )
            )}
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
