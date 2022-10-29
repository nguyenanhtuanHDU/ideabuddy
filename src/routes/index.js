import Home from '../pages/Home'
import BusinessPlan from '../pages/Product/BusinessPlan'
import BusinessGuide from '../pages/Product/BussinessGuide'
import FinancialPlan from '../pages/Product/FinancialPlan'
import IdeaPlan from '../pages/Product/IdeaPlan'
import IdeaValidation from '../pages/Product/IdeaValidation'

const publicRoutes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/product/idea-plan',
    element: IdeaPlan,
  },
  {
    path: '/product/business-guide',
    element: BusinessGuide,
  },
  {
    path: '/product/financial-plan',
    element: FinancialPlan,
  },
  {
    path: '/product/idea-validation',
    element: IdeaValidation,
  },
  {
    path: '/product/business-plan',
    element: BusinessPlan,
  },
]

const privateRoures = []

export { publicRoutes, privateRoures }
