import Statsig, { StatsigUser } from "statsig-node";

const isStatsigReady = Statsig.initialize(
  process.env.STATSIG_SERVER_KEY
);

export async function getStatsigValues(
  user: StatsigUser
): Promise<Record<string, unknown> | null> {
  await isStatsigReady;
  return Statsig.getClientInitializeResponse(user);
}

export const checkStatsigFeatureGate = async (
  user: StatsigUser,
  featureName: string,
) => {
  await isStatsigReady;
  return Statsig.checkGateSync(user, featureName);
}



import type { FlagOverridesType } from '@vercel/flags';
import { decrypt } from '@vercel/flags';
import { cookies } from 'next/headers';

export async function getFlags(): Promise<FlagOverridesType> {
  const overrideCookie = cookies().get('vercel-flag-overrides');
  if (!overrideCookie) return {};
  const overrides = await decrypt<FlagOverridesType>(overrideCookie.value);
  return {
    button_emoji: overrides.button_emoji ? overrides.button_emoji : false,
  };
}
