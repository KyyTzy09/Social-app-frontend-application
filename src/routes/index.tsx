import AppLayout from '@/common/components/AppLayout'
import { AuthModal } from '@/features/auth/AuthModal'
import PageContent from '@/features/index/PageContent'
import PageRightSidebar from '@/features/index/PageRightSidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <AppLayout>
      <AuthModal isOpen={true} onClose={() => { }} />
      {/* Main Content */}
      <PageContent />
      {/* Right Sidebar */}
      <PageRightSidebar />
    </AppLayout>
  )
}