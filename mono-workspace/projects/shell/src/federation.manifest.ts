import { environment } from './environments/environment';

export const federationManifest = {
  todo: `${environment.TODO_SERVICE_URL}/remoteEntry.json`,
  user: `${environment.USER_SERVICE_URL}/remoteEntry.json`
};
