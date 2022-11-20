import AboutUs from '../pages/Company/About us'
import AffiliateProgram from '../pages/Company/Affiliate Program'
import WriteForUs from '../pages/Company/Write For Us'
import CookieStatement from '../pages/Footer Link/Cookie Statement'
import PrivacyPolicy from '../pages/Footer Link/Privacy Policy'
import TermsOfService from '../pages/Footer Link/Terms of Service'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import BusinessPlan from '../pages/Product/BusinessPlan'
import BusinessGuide from '../pages/Product/BussinessGuide'
import FinancialPlan from '../pages/Product/FinancialPlan'
import IdeaPlan from '../pages/Product/IdeaPlan'
import IdeaValidation from '../pages/Product/IdeaValidation'
import Whiteboard from '../pages/Product/Whiteboard'
import BusinessSchools from '../pages/Solutions/Business Schools'
import Entrepreneurs_Startups from '../pages/Solutions/Entrepreneurs & Startups'
import Incubators_Accelerators from '../pages/Solutions/Incubators & Accelerators'

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
    path: '/product/whiteboard',
    element: Whiteboard,
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
  {
    path: '/solutions/startups-and-enterpreneurs',
    element: Entrepreneurs_Startups,
  },
  {
    path: '/solutions/incubators-and-accelerators',
    element: Incubators_Accelerators,
  },
  {
    path: '/solutions/business-schools',
    element: BusinessSchools,
  },
  {
    path: '/pricing',
    element: Pricing,
  },
  {
    path: '/about-us',
    element: AboutUs,
  },
  {
    path: '/affiliate-program',
    element: AffiliateProgram,
  },
  {
    path: '/write-for-us',
    element: WriteForUs,
  },
  {
    path: '/terms-of-service',
    element: TermsOfService,
  },
  {
    path: '/privacy-policy',
    element: PrivacyPolicy,
  },
  {
    path: '/cookie-statement',
    element: CookieStatement,
  },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
