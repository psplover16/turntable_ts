import { getDummyJWT, getWebConfigDummy } from '@/mocks/dummy';
import { USE_API } from '@/config/constants';
import type { MobileBootstrapData } from '@/types/mobile';

async function resolveWebConfig() {
  if (!USE_API) {
    return getWebConfigDummy();
  }

  return getWebConfigDummy();
}

export async function requestMobileBootstrapData(): Promise<MobileBootstrapData> {
  const webConfig = await resolveWebConfig();
  const jwt = getDummyJWT();

  return {
    webConfig,
    jwt,
  };
}

export async function refreshMobileJwt(): Promise<string> {
  if (!USE_API) {
    return getDummyJWT();
  }

  return getDummyJWT();
}