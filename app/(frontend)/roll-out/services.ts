import { SANITY_CREATE_PROJECT_URL } from './constants';

export const createSanityProject = async () => {
  try {
    const response = await fetch(SANITY_CREATE_PROJECT_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_PERSONAL_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // todo: name based on user's email
        displayName: 'test project from cli',
        organizationId: process.env.SANITY_ORGANIZATION_ID,
      }),
    });

    // sample of 200 response
    // {
    //   isBlocked: false,
    //   isDisabled: false,
    //   isDisabledByUser: false,
    //   metadata: {},
    //   maxRetentionDays: null,
    //   dataClass: null,
    //   activityFeedEnabled: true,
    //   id: 'jjlg7p0k',
    //   displayName: 'test project from cli',
    //   organizationId: 'oHtKoD430',
    //   studioHost: null,
    //   updatedAt: '2023-10-17T13:54:21.544Z',
    //   createdAt: '2023-10-17T13:54:21.544Z',
    //   deletedAt: null,
    //   members: [ { id: 'pCuxeROCY', role: 'administrator', roles: [Array] } ]
    // }
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
