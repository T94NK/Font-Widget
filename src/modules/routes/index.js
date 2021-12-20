import { MyFonts, BuyFonts } from 'pages'

export const routes = [
  {
    path: '/',
    component: MyFonts,
    exact: true,
  },
  {
    path: '/my-fonts',
    component: MyFonts,
    exact: true,
  },
  {
    path: '/buy-fonts',
    component: BuyFonts,
    exact: true,
  },
]
