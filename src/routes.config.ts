// import React from "react";


//工会
// const UnionIndex = React.lazy(() => {
//   return import('./pages/Union/Index');
// });
// const UnionForm = React.lazy(() => {
//   return import('./pages/Union/Form');
// });
// const UnionDetail = React.lazy(() => {
//   return import('./pages/Union/Detail');
// });

//合同
// const ContractIndex = React.lazy(() => {
//   return import('./pages/Contract/Index');
// });
// const ContractForm = React.lazy(() => {
//   return import('./pages/Contract/Form');
// });
// const ContractDetail = React.lazy(() => {
//   return import('./pages/Contract/Detail');
// });

// //字典
// const DictIndex = React.lazy(() => {
//   return import('./pages/Dict/Index');
// });
// //404
// const NotFound = React.lazy(() => {
//   return import('./pages/404');
// });


interface RouteConfig {
  path: string
  component?: React.FC
  exact?: boolean
  breadcrumbName?: string
}

export const routesConfigs: Array<RouteConfig> = [


  // {path: '/union', exact: true, component: UnionIndex, breadcrumbName: '工会专项工作'},
  // {path: '/union/form', exact: true, component: UnionForm, breadcrumbName: '编辑'},
  // {path: '/union/form/:id', component: UnionForm},
  // {path: '/union/detail/:id', component: UnionDetail},
  // {path: '/union/:cid', component: UnionIndex},

  // {path: '/contract', exact: true, component: ContractIndex, breadcrumbName: '合同专项工作'},
  // {path: '/contract/form', exact: true, component: ContractForm, breadcrumbName: '编辑'},
  // {path: '/contract/form/:id', component: ContractForm},
  // {path: '/contract/detail/:id', component: ContractDetail},
  // {path: '/contract/:cid', component: ContractIndex},

  // {path: '/dict/:id', component: DictIndex},
  // {path: '*', component: NotFound},

  { path: '/union/detail', breadcrumbName: '详情' },
  { path: '/contract/detail', breadcrumbName: '详情' },
  { path: '/dict', breadcrumbName: '类别管理' },
  { path: '/dict/pc', breadcrumbName: '党务工作类别' },
  { path: '/dict/pf', breadcrumbName: '党务资料类型' },
  { path: '/dict/uc', breadcrumbName: '工会工作类别' },
  { path: '/dict/uf', breadcrumbName: '工会资料类型' },
  { path: '/dict/cc', breadcrumbName: '合同工作类别' },
  { path: '/dict/cf', breadcrumbName: '合同资料类型' },
]