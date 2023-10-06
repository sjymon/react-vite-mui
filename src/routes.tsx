import { APP_ROUTES } from '@constants/routes'
import AccountFeature from '@features/account'
import ClientAccountLayout from '@features/account/components/AccountLayout'
import AccountSidebar from '@features/account/components/AccountSidebar'
import DraftContainer from '@features/draft/DraftContainer'
import { DRAFT_ROUTES } from '@features/draft/routes'
import { Box } from '@mui/material'
import { RouteObject } from 'react-router-dom'

const configAppRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.HOME.path,
    element: (
      <ClientAccountLayout sidebar={<AccountSidebar />}>
        <Box>Content</Box>
      </ClientAccountLayout>
    ),
  },
  {
    path: APP_ROUTES.ACCOUNT.path,
    element: <AccountFeature />,
  },
  {
    path: APP_ROUTES.PROJECT.path,
    element: 'project',
  },
  {
    path: APP_ROUTES.STACK.path,
    element: 'stack',
  },
  {
    path: DRAFT_ROUTES.index.path,
    element: <DraftContainer />,
  },
]

export default configAppRoutes
