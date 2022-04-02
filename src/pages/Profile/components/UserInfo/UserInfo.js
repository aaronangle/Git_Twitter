import React from 'react';
import styles from './styles.module.css';
import { joinClassNames, pluralizeName } from 'utils';

export const UserInfo = ({ user, children }) => {
  return (
    <>
      <div className={styles.relative}>
        <div className={styles.banner}></div>
        <img src={user.avatar_url} alt="" className={styles.profilePic} />
      </div>
      <div className={styles.userDetailsCont}>
        <h2>{user.name}</h2>
        <p className="text--muted m-0">@{user.login}</p>
        <p>{user.bio}</p>
        <div className={styles.flexRow}>
          {user.blog && (
            <a
              href={user.blog}
              target="_blank"
              rel="noopener noreferrer"
              className={joinClassNames(styles.flex, styles.primary)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
              </svg>
              {user.blog}
            </a>
          )}
          {user.company && (
            <p className={joinClassNames(styles.flex, styles.muted)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v4h5v-2h2v2h6v-2h2v2h5V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 11h-2v-2H9v2H7v-2H2v6c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6h-5v2z"></path>
              </svg>
              {user.company}
            </p>
          )}
          {user.location && (
            <p className={joinClassNames(styles.flex, styles.muted)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path>
              </svg>
              {user.location}
            </p>
          )}
          <p className={joinClassNames(styles.flex, styles.muted)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
            </svg>
            Joined{' '}
            {new Date(user.created_at).toLocaleDateString([], { month: 'long', year: 'numeric' })}
          </p>
        </div>
        <div className={styles.flexRow}>
          <p className="">
            <b>{user.following}</b> <span className={styles.muted}>Following</span>
          </p>
          <p className="">
            <b>{user.followers}</b>{' '}
            <span className={styles.muted}>{pluralizeName('Follower', user.followers)}</span>
          </p>
        </div>
        {children}
      </div>
    </>
  );
};
