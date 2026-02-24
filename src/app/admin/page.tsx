'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface UserRecord {
  uid: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  approved: boolean;
  createdAt: Timestamp | null;
}

export default function AdminPage() {
  const { user, userDoc, loading } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!user || userDoc?.role !== 'admin') {
        router.replace('/');
      }
    }
  }, [user, userDoc, loading, router]);

  useEffect(() => {
    if (userDoc?.role !== 'admin') return;
    async function fetchUsers() {
      const snap = await getDocs(collection(db, 'users'));
      const list: UserRecord[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          uid: d.id,
          name: data.name ?? '',
          email: data.email ?? '',
          phone: data.phone ?? '',
          role: data.role ?? 'user',
          approved: data.approved ?? false,
          createdAt: data.createdAt ?? null,
        };
      });
      list.sort((a, b) => {
        const ta = a.createdAt?.seconds ?? 0;
        const tb = b.createdAt?.seconds ?? 0;
        return tb - ta;
      });
      setUsers(list);
      setFetching(false);
    }
    fetchUsers();
  }, [userDoc]);

  async function setApproval(uid: string, approved: boolean) {
    await updateDoc(doc(db, 'users', uid), {
      approved,
      ...(approved ? { approvedAt: Timestamp.now() } : {}),
    });
    setUsers((prev) =>
      prev.map((u) => (u.uid === uid ? { ...u, approved } : u))
    );
  }

  if (loading || fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 text-sm">로딩 중...</p>
      </div>
    );
  }

  if (!user || userDoc?.role !== 'admin') return null;

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">어드민 대시보드</h1>
        <p className="text-slate-500 text-sm mb-8">회원 승인 및 관리</p>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">이름</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">이메일</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 hidden md:table-cell">전화번호</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 hidden md:table-cell">가입일</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">상태</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-slate-400 py-10">
                    등록된 회원이 없습니다.
                  </td>
                </tr>
              )}
              {users.map((u) => (
                <tr key={u.uid} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-800">{u.name}</td>
                  <td className="px-4 py-3 text-slate-600">{u.email}</td>
                  <td className="px-4 py-3 text-slate-600 hidden md:table-cell">{u.phone}</td>
                  <td className="px-4 py-3 text-slate-500 hidden md:table-cell">
                    {u.createdAt
                      ? new Date(u.createdAt.seconds * 1000).toLocaleDateString('ko-KR')
                      : '-'}
                  </td>
                  <td className="px-4 py-3">
                    {u.approved ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                        승인됨
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                        대기중
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {u.role === 'admin' ? (
                      <span className="text-xs text-slate-400">관리자</span>
                    ) : u.approved ? (
                      <button
                        onClick={() => setApproval(u.uid, false)}
                        className="text-xs font-semibold text-red-600 hover:underline"
                      >
                        거부
                      </button>
                    ) : (
                      <button
                        onClick={() => setApproval(u.uid, true)}
                        className="text-xs font-semibold text-blue-600 hover:underline"
                      >
                        승인
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
