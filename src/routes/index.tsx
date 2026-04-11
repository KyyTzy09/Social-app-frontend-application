import AppLayout from '@/common/components/AppLayout'
import PageContent from '@/features/index/PageContent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <AppLayout>
      {/* Main Content */}
      <PageContent />
    </AppLayout>
  )
}