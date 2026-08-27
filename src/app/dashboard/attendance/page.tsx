'use client';
import dynamic from 'next/dynamic';

const AttendancePage = dynamic(() => import('@/pages/AttendancePage'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4" />
        <p className="text-sm text-gray-500">Loading attendance...</p>
      </div>
    </div>
  ),
});

export default function Page() {
  return <AttendancePage />;
}
