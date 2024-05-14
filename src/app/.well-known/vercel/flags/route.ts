import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { getStatsigData } from '@vercel/flags/providers/statsig';
 
export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get('Authorization'));
  if (!access) return NextResponse.json(null, { status: 401 });
 
  const statsigData = await getStatsigData({
    consoleApiKey: process.env.STATSIG_CONSOLE_API_KEY,
    projectId: process.env.STATSIG_PROJECT_ID,
  });

  return NextResponse.json<ApiData>(statsigData);
}