import { useState } from 'react'
import {
  Search,
  Plus,
  Filter,
  Eye,
  Edit,
  MoreHorizontal,
  Home,
  Film,
  Book,
  Folder,
  Settings,
} from 'lucide-react'
import { SidebarNavigation, SidebarButton } from '@/components/sidebar-navigation'
import { SecondaryNav, SecondaryNavItem } from '@/components/secondary-nav'
import { Button } from '@/components/button'
import { InputField } from '@/components/input-field'
import { SelectField } from '@/components/select-field'
import { Badge } from '@/components/badge'
import { Table } from '@/components/table'
import { Pagination } from '@/components/pagination'
import { Avatar } from '@/components/avatar'

// Mock data
const orders = [
  { id: 'ORD-001', customer: 'Alice Chen', email: 'alice@example.com', product: 'Pro Plan', amount: '$299', status: 'completed', date: '2024-04-10' },
  { id: 'ORD-002', customer: 'Bob Smith', email: 'bob@example.com', product: 'Basic Plan', amount: '$99', status: 'pending', date: '2024-04-09' },
  { id: 'ORD-003', customer: 'Carol Wang', email: 'carol@example.com', product: 'Enterprise', amount: '$999', status: 'processing', date: '2024-04-08' },
  { id: 'ORD-004', customer: 'David Lee', email: 'david@example.com', product: 'Pro Plan', amount: '$299', status: 'completed', date: '2024-04-07' },
  { id: 'ORD-005', customer: 'Emma Zhang', email: 'emma@example.com', product: 'Basic Plan', amount: '$99', status: 'cancelled', date: '2024-04-06' },
]

const statusOptions = [
  { value: '', label: 'All Status' },
  { value: 'pending', label: 'Pending' },
  { value: 'processing', label: 'Processing' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
]

const productOptions = [
  { value: '', label: 'All Products' },
  { value: 'basic', label: 'Basic Plan' },
  { value: 'pro', label: 'Pro Plan' },
  { value: 'enterprise', label: 'Enterprise' },
]

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'id',
    key: 'id',
    width: 120,
    fixed: 'left' as const,
    render: (value: string) => (
      <span className="text-text-primary font-medium">{value}</span>
    ),
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    width: 200,
    render: (_: unknown, record: typeof orders[0]) => (
      <div className="flex items-center gap-md">
        <Avatar type="initial" initials={record.customer.charAt(0)} size="small" shape="circle" />
        <div>
          <span className="text-text-primary">{record.customer}</span>
          <span className="text-text-secondary text-video-title ml-sm">{record.email}</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    width: 150,
    render: (value: string) => (
      <span className="text-text-primary">{value}</span>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    width: 100,
    render: (value: string) => (
      <span className="text-text-primary font-medium">{value}</span>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: string) => {
      const variantMap: Record<string, 'default' | 'success' | 'warning' | 'danger' | 'brand'> = {
        completed: 'success',
        pending: 'warning',
        processing: 'brand',
        cancelled: 'danger',
      }
      return <Badge label={value.charAt(0).toUpperCase() + value.slice(1)} variant={variantMap[value]} />
    },
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 120,
    render: (value: string) => (
      <span className="text-text-secondary">{value}</span>
    ),
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 100,
    fixed: 'right' as const,
    render: () => (
      <div className="flex items-center gap-sm">
        <Button variant="subtle" size="small" iconStart={<Eye className="size-4" strokeWidth={1.5} />}>
          View
        </Button>
      </div>
    ),
  },
]

export function OrderListPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [productFilter, setProductFilter] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [loading, setLoading] = useState(false)

  const handleReset = () => {
    setSearch('')
    setStatusFilter('')
    setProductFilter('')
    setPage(1)
  }

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setPage(newPage)
    setPageSize(newPageSize)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Navigation */}
      <SidebarNavigation
        footer={
          <>
            <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
            <Avatar type="image" src="/user.jpg" size="medium" shape="circle" />
          </>
        }
      >
        <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} />
        <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} active />
        <SidebarButton icon={<Book className="size-full" strokeWidth={1.5} />} />
        <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
      </SidebarNavigation>

      {/* Secondary Nav */}
      <SecondaryNav title="Orders">
        <SecondaryNavItem icon={<Film className="size-full" strokeWidth={1.5} />} label="All Orders" active />
        <SecondaryNavItem icon={<Filter className="size-full" strokeWidth={1.5} />} label="Pending" />
        <SecondaryNavItem icon={<Book className="size-full" strokeWidth={1.5} />} label="Completed" />
      </SecondaryNav>

      {/* Main Content */}
      <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-xl">
          <h1 className="text-title text-text-primary">Orders</h1>
          <Button variant="primary" iconStart={<Plus className="size-4" strokeWidth={1.5} />}>
            New Order
          </Button>
        </div>

        {/* Data Card */}
        <div className="bg-surface-bg rounded-corner-lg p-xl">
          {/* Filter Bar */}
          <div className="flex items-center gap-lg mb-md">
            <InputField
              value={search}
              placeholder="Search orders..."
              onChange={setSearch}
              className="w-[300px]"
            />
            <SelectField
              options={statusOptions}
              value={statusFilter}
              onChange={setStatusFilter}
              placeholder="Status"
            />
            <SelectField
              options={productOptions}
              value={productFilter}
              onChange={setProductFilter}
              placeholder="Product"
            />
            <Button variant="neutral" onClick={handleReset}>
              Reset
            </Button>
          </div>

          <div className="border-t border-border-secondary my-md" />

          {/* Table */}
          <Table
            columns={columns}
            data={orders}
            rowKey="id"
            loading={loading}
            pagination={false}
            noDataElement={
              <div className="flex flex-col items-center justify-center py-2xl">
                <span className="text-text-secondary">No orders found</span>
              </div>
            }
          />

          {/* Pagination */}
          <div className="border-t border-border-secondary pt-md mt-sm">
            <Pagination
              total={100}
              current={page}
              pageSize={pageSize}
              pageSizeOptions={[10, 20, 50]}
              showTotal
              showJumper
              showPageSize
              onChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  )
}